import type { ProjectData } from "@/components/project"

export const sampleProject: ProjectData = {
  hero: {
    headline: "Designing interfaces for human decision-making",
    subheadline: "A conversational analytics system that turns intent into trusted insight",
  },
  meta: {
    role: "Product Designer",
    systemType: "AI-powered analytics",
    users: "Data analysts, business users",
    timeline: "6 months",
    keyConstraint: "Zero AI/ML expertise required",
    outcome: "3x faster insight discovery, 40% reduction in analyst workload",
  },
  systemFraming: {
    title: "The System",
    framingStatement:
      "This system bridges the gap between business questions and data complexity through natural language understanding and intelligent query generation.",
  },
  problem: {
    framingSentence:
      "Business users couldn't access their own data without technical gatekeepers.",
    bullets: [
      "Average 3-day turnaround for simple analytics requests",
      "70% of analyst time spent translating questions into queries",
      "Users built incorrect mental models from delayed, filtered insights",
    ],
  },
  strategy: {
    heading: "Design for progressive disclosure, not automation",
    bullets: [
      "Show the query being built in real-time, not just the result",
      "Let users edit and refine AI suggestions before execution",
      "Surface uncertainty explicitly rather than hiding it",
      "Did NOT automate everything—kept human judgment in the loop",
    ],
  },
  keyInteraction: {
    callouts: [
      "Natural language input with intent detection",
      "Live query preview with edit controls",
      "Confidence indicators for AI suggestions",
    ],
  },
  mentalModel: {
    steps: [
      "User expresses intent in natural language",
      "System translates to structured query with visible reasoning",
      "User validates, edits, or refines the interpretation",
      "Results surface with explanations and next-question suggestions",
    ],
  },
  trustAndControl: {
    safeguards: [
      "All AI suggestions are editable before execution",
      "Query preview shows exactly what will run",
      "Confidence scores visible on all interpretations",
      "One-click rollback to previous query versions",
      "Manual override available at every decision point",
    ],
  },
  architecture: {
    takeaway:
      "Separating intent parsing from query execution allowed us to surface the reasoning layer—making the system inspectable and trustworthy.",
  },
  outcomes: {
    bullets: [
      "3x faster insight discovery (avg 1 day → 8 hours)",
      "40% reduction in analyst workload for routine requests",
      "85% of users report higher confidence in self-service results",
      "Query accuracy improved 60% through human-in-loop refinement",
      "Zero critical errors in production after 3 months",
    ],
  },
  reflection: {
    changed: [
      "Initial focus was on automation—shifted to augmentation after early user testing",
      "Scrapped 2 prototypes that hid too much complexity",
    ],
    learned: [
      "Users need to see the reasoning, not just the result",
      "Transparency > efficiency when trust is the constraint",
      "Progressive disclosure works better than progressive automation",
    ],
    wouldEvolve: [
      "Add collaborative query building for team learning",
      "Explore spatial reasoning for complex multi-table queries",
      "Build feedback loop for continuous model improvement",
    ],
  },
  transferableInsight: {
    statement:
      "AI interfaces should optimize for human learning, not just task completion.",
    supporting: [
      "When users understand how a system thinks, they make better decisions about when to trust it.",
      "The goal isn't to replace expertise—it's to make expertise accessible to more people.",
    ],
  },
}
