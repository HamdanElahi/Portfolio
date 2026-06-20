export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  metricValue: string;
  metricUnit: string;
  problem: string;
  solution: string;
  executiveSummary: string;
  roiImpact: string;
  pipelineStages: Array<{
    name: string;
    description: string;
  }>;
  breakthroughs: Array<{
    title: string;
    description: string;
  }>;
  auditTrail: Array<{
    scenario: string;
    details: string;
    isUrgent?: boolean;
    output?: string;
  }>;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
}

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

export interface Booking {
  name: string;
  email: string;
  date: string;
  timeSlot: string;
  packageType: string;
  message: string;
}
