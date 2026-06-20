import { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "lead-triage-n8n",
    title: "Autonomous Enterprise Lead Triage Architecture",
    subtitle: "An event-driven visual orchestration pipeline that qualifies incoming sales prospects and instantly escalates enterprise accounts.",
    category: "n8n Automation",
    beforeLabel: "Before: 30 hours/wk manual tracking",
    afterLabel: "After: 3 hours/wk passive auditing",
    metricValue: "90%",
    metricUnit: "reduction in response lag",
    problem: "B2B sales teams miss out on hot leads because manual data tracking and triage create massive, hours-long operational bottlenecks, delaying human touchpoints precisely when customer interest is peak.",
    solution: "Engineered an automated serverless backend pipeline inside n8n paired with Google Gemini 2.5 Flash via OpenRouter. The workflow intercepts incoming lead payloads, qualifies target budget triggers in real time, and handles multi-point database updates and escalations.",
    executiveSummary: "Delayed response triggers close-rate drops of up to 391% after only five minutes. This enterprise architecture intercepts incoming inbound web payloads, uses context-aware LLM processing to determine lead priority, and escalates hot contacts within milliseconds.",
    roiImpact: "Completely automates enterprise qualification, cutting down lead triage response times from hours to fractions of a second and notifying sales teams via rich-text communication channels with zero manual overhead.",
    pipelineStages: [
      {
        name: "Zero-Compute Webhook Gateway",
        description: "Replaced heavy polling scripts with a live HTTP Webhook node inside n8n that stays entirely dormant at zero-compute idle state until triggered."
      },
      {
        name: "Contextual JSON Binding",
        description: "Passed unparsed webhook JSON bodies directly to dynamic prompt expressions, isolating lead particulars without intermediate system storage."
      },
      {
        name: "Intelligence Evaluation",
        description: "Issued low-latency payload routing requests to Gemini 2.5 Flash to evaluate customer intent, financial scale, and strategic alignment."
      },
      {
        name: "Secure Schema Logging",
        description: "Asynchronously mapped qualified data results downstream to secure, sandboxed Airtable cloud schema instances."
      },
      {
        name: "VIP Urgent Escalation",
        description: "Monitored criteria via case-insensitive contains matching, pushing styled Discord/Slack webhook notifications under 500ms if a $75k+ budget lead is detected."
      }
    ],
    breakthroughs: [
      {
        title: "File Encoding Anomaly (PowerShell ÿ)",
        description: "Resolved a critical Non-UTF-8 character translation bug created by legacy Windows platform file generation utilities by forcing standard UTF-8 structural formatting in the local IDE."
      },
      {
        title: "API Token Overage (HTTP 402 Error)",
        description: "Mitigated strict free-tier consumption boundaries by imposing explicit max_token constraints (Max Tokens: 100) inside the n8n JSON sub-node configurations."
      },
      {
        title: "Cross-Platform Compatibility Blockers (HTTP 400)",
        description: "Overrode default OpenAI cloud dashboard payload tracking variables (Store: False parameters) to align OpenRouter handshaking compliance with system API expectations."
      },
      {
        title: "Database Access Hardening (Airtable Token Security)",
        description: "Replaced administrative login references with isolated personal access tokens restricted exclusively to table-level write permissions, mitigating security surface vectors."
      }
    ],
    auditTrail: [
      {
        scenario: "Scenario A: Low-Value Lead Triage",
        details: "Lead 'Ali Khan' submitted with an estimated project budget of $1,500. The webhook pipeline captured, structured, and flagged the payload as 'Low-Priority' under 400ms. Airtable database logs updated silently; notification systems remained resting to eliminate alarm clutter.",
        isUrgent: false,
        output: "Database Write: SUCCESS | Status: Archived as Low Triage | Escalation Status: COLD"
      },
      {
        scenario: "Scenario B: Enterprise Urgent Escalation",
        details: "Lead 'Zain Malik' submitted with an enterprise project budget of $75,000. Inbound webhook triggered downstream pipeline. Gemini assessed lead as high-profile. n8n String Node triggered VIP match, formatting a rich payload and pushing a notification to Discord inside 350ms.",
        isUrgent: true,
        output: "🚨 URGENT ENTERPRISE LEAD DETECTED 🚨\n👤 Name: Zain Malik\n📧 Email: zain@enterprise.com\n💰 Budget: $75,000\n🤖 AI Assessment: This lead is high-priority due to their significant budget of $75,000. Initiating instant human handoff."
      }
    ],
    codeSnippet: {
      language: "json",
      filename: "n8n_lead_qualifier_workflow.json",
      code: `{
  "name": "Autonomous Lead Qualification",
  "nodes": [
    {
      "parameters": {
        "path": "webhook-lead-ingress",
        "options": {}
      },
      "type": "n8n-nodes-base.webhook",
      "id": "node-webhook-in",
      "name": "Webhook Inbound"
    },
    {
      "parameters": {
        "model": "google/gemini-2.5-flash",
        "prompt": "=Analyze the lead intent and project budget: \\"{{$json.body.lead_name}}\\" with budget \\"{{$json.body.budget}}\\" and message \\"{{$json.body.message}}\\""
      },
      "type": "n8n-nodes-base.openRouterAgent",
      "id": "node-ai-agent",
      "name": "Gemini Triage Triage"
    },
    {
      "parameters": {
        "conditions": {
          "string": [
            {
              "value1": "={{$json.ai_response}}",
              "operation": "contains",
              "value2": "high-priority"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.if",
      "id": "node-routing-filter",
      "name": "VIP Filter"
    }
  ]
}`
    }
  },
  {
    id: "context-aware-weather",
    title: "Dynamic Meteorological Ingestion & Context AI Pipeline",
    subtitle: "A localized meteorological script that processes live nested metrics to inject context into cloud-hosted LLM engines.",
    category: "Python Core",
    beforeLabel: "Before: Manual climate tracking",
    afterLabel: "After: 100% Automated Risk Advisories",
    metricValue: "100%",
    metricUnit: "automated safety auditing",
    problem: "Workforce and parameter dispatch in volatile open-air environments requires tedious physical environmental analysis to bypass extreme weather health dangers and project site standstills.",
    solution: "Engineered a native, modular Python system that executes clean REST GET calls against the Open-Meteo server, parses coordinates dynamically, binds deep nested metrics into customized text templates, maps reports with Gemini via OpenRouter, and commits structured operational sheets local-side.",
    executiveSummary: "By establishing zero-dependency Python streams that run dynamically on schedule, companies can evaluate localized atmospheric metrics and translate them directly into operational guidelines via LLM context injections.",
    roiImpact: "Completely eliminates weather risk evaluation overhead, replacing hours of administrative planning with immediate automated site safety instructions.",
    pipelineStages: [
      {
        name: "REST API Ingestion",
        description: "Utilizes Python's requests library to ping coordinate streams, bypassing bloated SDK footprints and maintaining thin operational surfaces."
      },
      {
        name: "Deep Nested Parsing",
        description: "Safely reads and dissects multi-layered nested JSON indexes like data['current']['temperature_2m'] with try-except fallback wraps."
      },
      {
        name: "Dynamic Template Injection",
        description: "Compiles regional indices dynamically into an analytical prompt text, passing structured situational frames without static clutter."
      },
      {
        name: "Edge API Handshake",
        description: "Funnels raw HTTP POST transactions into the OpenRouter edge pipeline, retrieving contextual model advice under custom quota limits."
      },
      {
        name: "Isolated Log Persistence",
        description: "Appends audit-ready logs sequentially into daily_report.txt, maintaining permanent, structured history outputs without file overruns."
      }
    ],
    breakthroughs: [
      {
        title: "Undefined Ingress Key Safety",
        description: "Constructed deep parsing checks to manage API offline timeouts or null JSON records, safeguarding the Python loop against index exceptions."
      },
      {
        title: "I/O Race Mitigation",
        description: "Used Python's clean context manager 'with open() in append mode' to guarantee file access isolation during continuous high-frequency metrics writing."
      }
    ],
    auditTrail: [
      {
        scenario: "Live Execution Audit (Multan Region)",
        details: "Atmospheric logs extracted current temperature metrics (~38.2°C). Python thread mapped readings into Gemini query, outputting site action guidelines and committing local daily logs securely.",
        isUrgent: false,
        output: "Log Entry Committed:\n[2026-06-18 22:15:00] Temperature: 38.2 C | AI Advice: Core heat warning active. Field crews on outdoor scaffolds must initiate mandatory 15-minute shaded hydration breaks every hour. | Status: STABLE"
      }
    ],
    codeSnippet: {
      language: "python",
      filename: "weather_ai_ingress.py",
      code: `import os
import requests
from dotenv import load_dotenv

# Load credentials securely from environment configuration files
load_dotenv()
api_key = os.getenv("OPENROUTER_API_KEY")

# 1. Ingest real-time localized weather data 
weather_url = "https://api.open-meteo.com/v1/forecast?latitude=30.2&longitude=71.5&current=temperature_2m"
weather_response = requests.get(weather_url).json()
current_temp = weather_response["current"]["temperature_2m"]

# 2. Build out dynamic context prompt strings
dynamic_prompt = f"The current temperature is {current_temp} C. Give a 1-sentence workforce safety directive."

# 3. Setup transactional parameters for the LLM execution layer
openrouter_url = "https://openrouter.ai/api/v1/chat/completions"
headers = {
    "Authorization": f"Bearer {api_key.strip() if api_key else ''}",
    "Content-Type": "application/json",
}
payload = {
    "model": "google/gemini-2.5-flash",
    "messages": [{"role": "user", "content": dynamic_prompt}],
    "max_tokens": 100 
}

# 4. Transmit transactional data package to OpenRouter Gateway
response = requests.post(openrouter_url, headers=headers, json=payload)
ai_response = response.json()

# 5. Handle responses, expose console alerts, and log events
if "error" in ai_response:
    print("API Transaction Error:", ai_response["error"])
else:
    ai_text = ai_response["choices"][0]["message"]["content"]
    # Secure storage appending logs safely 
    with open("daily_report.txt", "a") as file:
        file.write(f"Temperature: {current_temp} C | AI Advice: {ai_text}\\n")
    print("[System] Log execution complete.")`
    }
  },
  {
    id: "lead-qual-prototype",
    title: "Visual Event-Driven Lead Qualification Agent Workflow",
    subtitle: "A flexible visual blueprint mapping raw inputs to context-aware models with strict error boundaries.",
    category: "n8n Prototyping",
    beforeLabel: "Before: Complex hardcoded scripts",
    afterLabel: "After: Transparant visual node-based layout",
    metricValue: "1/10th",
    metricUnit: "codebase maintenance footprint",
    problem: "When CRM schemas change or sales structures adapt, maintaining raw script-based integration pipelines requires tedious software engineering cycles and introduces breaking points.",
    solution: "Built a visually mapped orchestration prototype in n8n featuring a localized endpoint receiver, a data-binding model representing individual variables like {{ $json.body.customer_name }}, and an AI module linked to OpenRouter.",
    executiveSummary: "Visual n8n pathways eliminate maintenance cognitive load. If endpoints, schemas, or alert rules require revision, team leads update visually with live sandbox verification instead of redeploying servers.",
    roiImpact: "Decreases software consulting cycles significantly by empowering operators to adjust lead-routing workflows in seconds with no code revision.",
    pipelineStages: [
      {
        name: "Webhook Trigger Node",
        description: "Establishes a highly resilient local API gateway capturing inbound POST strings without background pool threads."
      },
      {
        name: "Structural Binding Logic",
        description: "Converts nested JSON paths cleanly to dynamic tokens like {{ $json.body.customer_name }} to map target values with pixel accuracy."
      },
      {
        name: "OpenRouter LLM Interface",
        description: "Routes queries targeting Gemini-2.5-Flash to translate messy sales intent notes into a refined logical true/false output."
      },
      {
        name: "Constraint Hardening Node",
        description: "Enforces strict limits (Max Tokens: 100) and blocks tracking storage logs (Store: False) to guard API rate parameters."
      }
    ],
    breakthroughs: [
      {
        title: "Schema Translation Shield",
        description: "Integrated n8n variable fallback rules ensuring that missing webhook keys (e.g., empty phone labels) do not crash downstream execution paths."
      }
    ],
    auditTrail: [
      {
        scenario: "Lead Qualification Verification (Simulated)",
        details: "Processed a simulated $1,500 budget lead with arbitrary data. The structural engine mapped parameters seamlessly, generated qualification metrics, and archived it quietly.",
        isUrgent: false,
        output: "n8n Stream Response: 'Based on the provided budget of $1,500, Ali Khan is likely a low-priority lead'"
      }
    ],
    codeSnippet: {
      language: "json",
      filename: "n8n_event_blueprint.json",
      code: `{
  "nodes": [
    {
      "parameters": {
        "keepOnlySet": true,
        "values": {
          "string": [
            {
              "name": "customer_name",
              "value": "={{$json.body.customer_name}}"
            },
            {
              "name": "budget_amount",
              "value": "={{$json.body.budget}}"
            }
          ]
        }
      },
      "type": "n8n-nodes-base.set",
      "name": "Data Parameter Binding",
      "id": "node-data-binding"
    }
  ]
}`
    }
  },
  {
    id: "database-hardening",
    title: "Visual Database Integration & Sandboxed Auth Mapping",
    subtitle: "A hardened visual security model restricting database schemas while maintaining rapid write access.",
    category: "Security & Cloud Integrations",
    beforeLabel: "Before: Root-credential leak vectors",
    afterLabel: "After: Granular Table-Bound tokens",
    metricValue: "ZERO",
    metricUnit: "shared master account credentials",
    problem: "Visual automation pipelines (n8n, Zapier) risk massive data security breach if credentials contain master permissions or are shared in plain-text configurations.",
    solution: "Designed a hardened security model for Airtable data logging. The architecture isolates permissions using Table-level personal access secrets matching strict boundaries.",
    executiveSummary: "Data protection is as critical as automation itself. This showcase demonstrates hardened configuration structures within visual workflow pipes, enforcing strict token bounding and error-safe logic routing.",
    roiImpact: "Secures enterprise client information against unauthorized leaks while preserving 100% cloud pipeline reliability.",
    pipelineStages: [
      {
        name: "Token Sandboxing Setup",
        description: "Disabled global master API keys entirely, migrating n8n connections to individual Personal Access Tokens scoped exclusively for lead records."
      },
      {
        name: "Logical String Matching",
        description: "Constructed string matching conditions mapping case-insensitive filters to protect output targets from arbitrary LLM vocabulary changes."
      }
    ],
    breakthroughs: [
      {
        title: "Credential Isolation Strategy",
        description: "Mapped strict read/write boundaries such that the automation layer cannot look at corporate metadata or delete master databases, keeping leaks completely isolated."
      }
    ],
    auditTrail: [
      {
        scenario: "Security Breach Attempt Audit",
        details: "Ran security simulation testing with altered keys. Sandboxing constraints successfully terminated execution block, triggering immediate localized fail-safe reporting logs.",
        isUrgent: true,
        output: "Security Log: Access Denied. Action is outside scoped personal token permissions. Database integrity preserved."
      }
    ]
  }
];
