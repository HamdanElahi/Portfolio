import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Location of persistent storage file
  const STORAGE_PATH = path.join(process.cwd(), "bookings_storage.json");

  // Helper to read current data
  const readBookings = (): any[] => {
    try {
      if (fs.existsSync(STORAGE_PATH)) {
        const fileContent = fs.readFileSync(STORAGE_PATH, "utf-8");
        return JSON.parse(fileContent);
      }
    } catch (err) {
      console.error("Failed to read bookings storage", err);
    }
    return [];
  };

  // Helper to write data
  const writeBookings = (data: any[]) => {
    try {
      fs.writeFileSync(STORAGE_PATH, JSON.stringify(data, null, 2), "utf-8");
    } catch (err) {
      console.error("Failed to write to bookings storage", err);
    }
  };

  // API Route: Fetch all consultation bookings
  app.get("/api/bookings", (req, res) => {
    const data = readBookings();
    res.json({ success: true, count: data.length, bookings: data });
  });

  // API Route: Book a new consultation slot & trigger mock/live n8n integration
  app.post("/api/bookings", async (req, res) => {
    const { name, email, date, timeSlot, packageType, message, webhookOverrideUrl } = req.body;

    if (!name || !email || !date || !timeSlot) {
      return res.status(400).json({
        success: false,
        error: "Missing required booking details (name, email, date, timeSlot are required).",
      });
    }

    const newBooking = {
      id: `bk_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      name,
      email,
      date,
      timeSlot,
      packageType: packageType || "General Consultation",
      message: message || "",
      createdAt: new Date().toISOString(),
      n8nDispatched: false,
      n8nStatus: "not_configured"
    };

    // 1. Save locally to file system
    const currentList = readBookings();
    currentList.unshift(newBooking);
    writeBookings(currentList);

    // 2. n8n direct link is removed as requested by the user. Cal.com booking is enough.
    console.log(`Booking saved locally to storage. (n8n forwarding has been removed as Cal is self-contained).`);

    return res.status(201).json({
      success: true,
      message: "Consultation booked successfully and registered.",
      booking: newBooking
    });
  });

  // API Route: Reset/Clear all data for test demonstration
  app.post("/api/bookings/reset", (req, res) => {
    writeBookings([]);
    res.json({ success: true, message: "Local demo storage bookings cleared." });
  });

  // Handle Vite Asset Serving / Middlewares
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT} under NODE_ENV=${process.env.NODE_ENV || 'development'}`);
  });
}

startServer().catch((err) => {
  console.error("Server startup error:", err);
});
