# Project Documentation & Deployment Guide

This project is a highly-optimized offline-first **workflow automation consultant portfolio and booking engine** built with a full-stack React (Vite) + Express + TypeScript architecture.

It features interactive canvas diagrams mapping advanced automation architecture (such as automated lead qualifiers, webhooks, and AI triage systems), a smooth responsive design, a custom-integrated interactive FAQ section, and a booking module using **Cal.com** with support for direct interactive consultations.

---

## Technical Stack & Built-with

### Frontend
- **React 18 & TypeScript**: Robust, type-safe interactive components.
- **Vite**: Rapid asset bundle packaging and client-side builds.
- **Tailwind CSS**: High-performance, declarative utility styling using a curated midnight theme with soft off-white text and warm orange accents (`#ff6d1f`).
- **Motion (`motion/react`)**: Graceful layout animations and micro-interaction states.
- **Lucide React**: Clean and modern vector icon telemetry.

### Backend
- **Express + TypeScript**: High-performance runtime REST API server hosting assets and booking endpoints.
- **Node-TS Runtime / TSX / esbuild**: The TypeScript code runs server-side natively in development, and is bundled into a single optimized `.cjs` script with sourcemaps using `esbuild` for production deployment.

### Integrations & Services
- **Cal.com**: Fully customizable scheduling widget targeting interactive 15-minute consultations direct to Google / Apple / Outlook calendar nodes.
- **Gemini SDK (Optional)**: Structured for integration via processing pipelines server-side.

---

## Required Environment Variables (`.env`)

For local execution or custom production endpoints, define the following variables within your `.env` file at the root directory:

| Variable Name | Required? | Description |
| :--- | :--- | :--- |
| `GEMINI_API_KEY` | Optional | Your Gemini API Key from Google AI Studio. Used for server-side AI integrations. |
| `APP_URL` | Optional | The canonical deployment URL. Auto-injected in AI Studio preview runtimes. |
| `N8N_WEBHOOK_URL` | Removed | *(No longer required)* The application now handles booking captures natively via Cal.com without raw local network dependencies. |

---

## Local Development Instructions

Follow these instructions to install, build, and audit your workspace locally on your system:

### 1. Prerequisite Installation
Ensure you have **Node.js (v18+)** and **npm** installed on your operational system.

### 2. Dependency Installation
Execute standard module discovery to prepare dependencies listed in `package.json`:
```bash
npm install
```

### 3. Start Local Development Server
Launch the unified full-stack dev pipeline:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application live.

### 4. Produce Compiled Production Bundle
Test standard validation and compilation builds:
```bash
npm run build
```
This command performs two critical tasks:
1. Compiles frontend static assets using Vite under production mode, dropping finished files into `/dist`.
2. Packages the Express `server.ts` entry file through `esbuild` to create a standalone, optimized `/dist/server.cjs` script.

### 5. Launch Production Build Locally
Verify the bundled build operates safely:
```bash
npm run start
```

---

## Deployment Information

This full-stack application is built to be production-ready and fully containerizable.

### 1. Cloud Run Deployment (Standard Containerized Hosting)
This project is engineered to work on serverless container computing, specifically **Google Cloud Run**, **AWS ECS/Fargate**, or **Render/Railway**.

1. **Host & Port Binding**: The custom server binds explicitly to `0.0.0.0` on port `3000`. Ensure your container configuration passes port `3000` to the routing ingress rule.
2. **Standard Dockerfile Template**:
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   ENV NODE_ENV=production
   EXPOSE 3000
   CMD ["npm", "run", "start"]
   ```

### 2. Export / Download
In AI Studio Build, you can download your production-ready project files at any time:
1. Locate the **Settings Menu** in the AI Studio Build user interface (typically available at the top-right console dashboard).
2. Click **Export to GitHub** to link this workspace direct to a remote repository, or
3. Select **Export to ZIP** to download a local bundle containing all configuration files, TypeScript scripts, and dependencies complete.
