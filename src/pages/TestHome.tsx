import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Brain,
  Workflow,
  Search,
  FileText,
  Layers,
} from "lucide-react"

export default function TestHome() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14 md:pt-28 md:pb-20">
          <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Sparkles className="h-3.5 w-3.5" />
                  Human-AI interaction
                </Badge>
                <Badge variant="outline">Decision systems</Badge>
                <Badge variant="outline">Enterprise UX</Badge>
              </div>

              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                I design how intelligent systems think with humans.
              </h1>

              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Product designer focused on human-AI interaction, decision
                systems, and making complex technology usable, trustworthy, and
                effective.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" className="gap-2" asChild>
                  <a href="#featured-work">
                    View featured work <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#about">About me</a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  Available for 2026 roles
                </div>
                <div>Seattle · Remote</div>
                <div>AI analytics · Workflow UX · Design systems</div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="grid gap-4">
                <Card className="p-5">
                  <div className="text-sm text-muted-foreground">Flagship</div>
                  <div className="mt-1 text-lg font-medium">
                    AI Analytics Tool
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Natural language to SQL with explainable outputs and
                    guardrails that help teams trust the result.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">LLM UX</Badge>
                    <Badge variant="secondary">Explainability</Badge>
                    <Badge variant="secondary">Analytics</Badge>
                  </div>
                </Card>

                <Card className="p-5">
                  <div className="text-sm text-muted-foreground">
                    Credibility signals
                  </div>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      Shipped multiple features across AWS database products
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      Strong POV on human-AI interaction patterns and failure
                      modes
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      Prototyping-heavy, metrics-aware, systems thinker
                    </li>
                  </ul>
                </Card>

                <div className="rounded-lg border bg-card/40 p-5">
                  <div className="text-sm text-muted-foreground">
                    What you can expect
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <MiniStat label="Fast alignment" value="Clear artifacts" />
                    <MiniStat label="Lower risk" value="Built-in guardrails" />
                    <MiniStat label="Better trust" value="Explainable UX" />
                    <MiniStat label="More adoption" value="Workflow fit" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t pt-6 text-sm text-muted-foreground">
            <a className="hover:text-foreground" href="#approach">
              Approach
            </a>
            <a className="hover:text-foreground" href="#featured-work">
              Featured work
            </a>
            <a className="hover:text-foreground" href="#about">
              About
            </a>
            <a className="hover:text-foreground" href="#contact">
              Contact
            </a>
            <a className="hover:text-foreground" href="/resume.pdf">
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              My approach to Human-AI design
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I treat AI as a teammate with constraints. The interface should
              make reasoning visible, control explicit, and failures safe.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <ApproachCard
                icon={<Brain className="h-5 w-5" />}
                title="Model the decision"
                text="Start with the judgment call. Identify inputs, uncertainty, and what 'good' looks like in context."
              />
              <ApproachCard
                icon={<Workflow className="h-5 w-5" />}
                title="Design the loop"
                text="Human intent, AI output, verification, and action. Each step gets a clear job and a safe fallback."
              />
              <ApproachCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Make trust earned"
                text="Show provenance, confidence, and why. Provide controls for review, edit, and override."
              />
              <ApproachCard
                icon={<Layers className="h-5 w-5" />}
                title="Ship guardrails"
                text="Constraints, defaults, and escalation paths. Protect users from silent failures and edge cases."
              />
            </div>

            <Card className="mt-4 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-sm text-muted-foreground">
                    Typical deliverables
                  </div>
                  <div className="mt-1 text-base font-medium">
                    Artifacts that align teams quickly
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Intent model</Badge>
                  <Badge variant="secondary">Failure modes</Badge>
                  <Badge variant="secondary">Interaction patterns</Badge>
                  <Badge variant="secondary">Evaluation plan</Badge>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-3 sm:grid-cols-3">
                <SmallItem
                  icon={<Search className="h-4 w-4" />}
                  title="Inputs"
                  text="What the AI sees and what it misses"
                />
                <SmallItem
                  icon={<FileText className="h-4 w-4" />}
                  title="Outputs"
                  text="What is shown, hidden, summarized, and why"
                />
                <SmallItem
                  icon={<ShieldCheck className="h-4 w-4" />}
                  title="Controls"
                  text="Review, edit, rerun, and escalation paths"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">About me</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I design for high-stakes workflows where accuracy, trust, and time
              matter. My background spans enterprise systems, analytics, and
              building UX patterns that make advanced capabilities usable.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button variant="outline" asChild>
                <a href="/about">Read more</a>
              </Button>
              <Button variant="ghost" asChild>
                <a href="#contact" className="gap-2">
                  Contact <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <div className="mt-8 rounded-lg border bg-card/40 p-5">
              <div className="text-sm text-muted-foreground">Focus areas</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge variant="secondary">Human-AI interaction</Badge>
                <Badge variant="secondary">Analytics UX</Badge>
                <Badge variant="secondary">Enterprise workflows</Badge>
                <Badge variant="secondary">Design systems</Badge>
                <Badge variant="secondary">Prototyping</Badge>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <Card className="p-6">
              <div className="text-sm text-muted-foreground">How I work</div>

              <Tabs defaultValue="principles" className="mt-4">
                <TabsList>
                  <TabsTrigger value="principles">Principles</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>

                <TabsContent value="principles" className="mt-4">
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li>
                      <span className="font-medium">Clarity wins:</span>{" "}
                      interfaces should reduce cognitive load, not add polish
                      overhead.
                    </li>
                    <li>
                      <span className="font-medium">Trust is designed:</span>{" "}
                      show reasoning, provenance, and allow meaningful control.
                    </li>
                    <li>
                      <span className="font-medium">Workflow over features:</span>{" "}
                      match real sequences of work and the constraints of teams.
                    </li>
                  </ul>
                </TabsContent>

                <TabsContent value="process" className="mt-4">
                  <ol className="space-y-3 text-sm leading-relaxed">
                    <li>
                      1. Define the decision, users, and failure modes
                    </li>
                    <li>
                      2. Prototype loops (prompt, output, verify, act)
                    </li>
                    <li>
                      3. Validate with real tasks and measure trust + accuracy
                    </li>
                    <li>
                      4. Ship guardrails and iterate from telemetry
                    </li>
                  </ol>
                </TabsContent>

                <TabsContent value="tools" className="mt-4">
                  <div className="flex flex-wrap gap-2 text-sm">
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Proto stacks</Badge>
                    <Badge variant="secondary">Design tokens</Badge>
                    <Badge variant="secondary">Research scripts</Badge>
                    <Badge variant="secondary">LLM eval</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    I collaborate tightly with engineering and use lightweight
                    artifacts that keep velocity high without losing rigor.
                  </p>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section
        id="featured-work"
        className="mx-auto max-w-6xl px-6 py-16 md:py-20"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured work
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Selected case studies focused on AI interaction, analytics, and
              complex workflow design.
            </p>
          </div>
          <Button variant="outline" asChild>
            <a href="/projects">View all projects</a>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <WorkCard
            title="AI Analytics Tool"
            subtitle="Human-AI querying with explainability"
            tags={["LLM UX", "SQL", "Trust"]}
            href="/projects/ai-analytics-tool"
          />
          <WorkCard
            title="Data Model Builder"
            subtitle="Workflow UX for schema and pipeline building"
            tags={["IA", "Systems", "Design tokens"]}
            href="/projects/data-model-builder"
          />
          <WorkCard
            title="Decision Dashboard Concept"
            subtitle="Operator-ready monitoring and triage patterns"
            tags={["Dashboards", "Ops", "Telemetry"]}
            href="/projects/decision-dashboard"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <Card className="p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Want to build something trustworthy?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Reach out for roles, collaborations, or to talk about human-AI
                workflows.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <a href="mailto:hello@raymondfesta.com" className="gap-2">
                  Email me <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf">Resume</a>
              </Button>
            </div>
          </div>
        </Card>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Raymond Festa</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-foreground" href="/projects">
              Projects
            </a>
            <a className="hover:text-foreground" href="/about">
              About
            </a>
            <a className="hover:text-foreground" href="https://www.linkedin.com/in/raymondcfesta/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border bg-background/40 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  )
}

function ApproachCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-md border bg-background/40 p-2">
          {icon}
        </div>
        <div>
          <div className="text-base font-medium">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            {text}
          </p>
        </div>
      </div>
    </Card>
  )
}

function SmallItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="rounded-md border bg-background/40 p-4">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
    </div>
  )
}

function WorkCard({
  title,
  subtitle,
  tags,
  href,
}: {
  title: string
  subtitle: string
  tags: string[]
  href: string
}) {
  return (
    <Card className="group p-5">
      <div className="flex h-full flex-col">
        <div className="text-sm text-muted-foreground">Case study</div>
        <div className="mt-1 text-lg font-medium">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Badge key={t} variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-6">
          <Button variant="ghost" className="px-0" asChild>
            <a href={href} className="gap-2">
              View case study <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="mt-auto pt-2" />
      </div>
    </Card>
  )
}
