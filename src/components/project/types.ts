export interface ProjectData {
  hero: {
    headline: string
    subheadline: string
    visualUrl?: string
  }
  meta: {
    role: string
    systemType: string
    users: string
    timeline: string
    keyConstraint: string
    outcome: string
  }
  systemFraming: {
    title: string
    visualUrl?: string
    framingStatement: string
  }
  problem: {
    visualUrl?: string
    framingSentence: string
    bullets: string[]
  }
  strategy: {
    visualUrl?: string
    heading: string
    bullets: string[]
  }
  keyInteraction: {
    visualUrl?: string
    callouts?: string[]
  }
  mentalModel: {
    visualUrl?: string
    steps: string[]
  }
  trustAndControl: {
    visualUrl?: string
    safeguards: string[]
  }
  architecture?: {
    visualUrl?: string
    takeaway: string
  }
  outcomes: {
    visualUrl?: string
    bullets: string[]
  }
  reflection: {
    changed: string[]
    learned: string[]
    wouldEvolve: string[]
  }
  transferableInsight: {
    statement: string
    supporting: string[]
  }
}

export interface SectionNavItem {
  id: string
  label: string
}
