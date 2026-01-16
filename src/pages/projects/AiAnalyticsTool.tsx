declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Lightbox } from "@/components/ui/lightbox"
import { Separator } from "@/components/ui/separator"
import { useInView } from "@/hooks/use-in-view"
import heroScreen from "@/assets/hero-screen-ai-analytics-tool.png"
import discoverAiTool from "@/assets/discover_ai_tool.png"
import screenDesign3 from "@/assets/screen-design-3.png"
import screenGuidedInterface from "@/assets/screen_guided_interface.png"
import systemArchitecture from "@/assets/system-architecture.png"
import conversationApproach from "@/assets/conversation_approach.png"

interface AiAnalyticsToolProps {
  onBack?: () => void
}

export function AiAnalyticsTool({}: AiAnalyticsToolProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const problemSection = useInView<HTMLElement>({ threshold: 0.2 })
  const solutionSection = useInView<HTMLElement>({ threshold: 0.2 })
  const artifactsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const decisionsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const ctaSection = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <div className="fixed inset-0 top-16 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center snap-start py-16 gap-12"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), #006CE0",
        }}
      >
        <div className="max-w-7xl w-full px-6 mx-auto">
          <div
            className="w-fit max-w-full mx-auto rounded-lg overflow-hidden animate-fade-in-up shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] transition-shadow duration-200"
          >
            <img
              src={heroScreen}
              alt="AI Analytics Tool hero"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
              onClick={() => setLightboxSrc(heroScreen)}
            />
          </div>
        </div>

        <div className="max-w-[750px] w-full px-6 flex flex-col gap-8 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#FFFFFF" }}>
              Project Summary
            </h2>
            <p className="text-white/80 leading-relaxed">
              An AI-powered conversational analytics tool that enables stakeholders to
              explore console usage data and generate insight summaries using natural
              language. The tool eliminates the need for SQL queries or technical expertise.
            </p>
          </div>

          <Separator className="bg-white/20" />

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Core Skill
              </span>
              <span className="text-white/80">
                AI Agent Architecture & Interface Design
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Role
              </span>
              <span className="text-white/80">
                Product Designer & Developer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        ref={problemSection.ref}
        className="min-h-screen w-full flex items-center justify-center snap-start py-24"
      >
        <div className="max-w-7xl w-full px-6 flex flex-col items-center gap-12">
          {/* Section Header */}
          <div
            className={`max-w-[750px] w-full flex flex-col items-center gap-2 transition-all duration-[1500ms] ease-out ${
              problemSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Discovery
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              What I learned about users, their challenges, and the opportunity space.
            </p>
          </div>

          {/* Image Canvas */}
          <div
            className={`w-fit max-w-full mx-auto rounded-lg overflow-hidden transition-all duration-[1500ms] ease-out delay-100 shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] ${
              problemSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={discoverAiTool}
              alt="Discovery visualization"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
              onClick={() => setLightboxSrc(discoverAiTool)}
            />
          </div>

          {/* Problem Content */}
          <div className="max-w-[750px] mx-auto w-full flex flex-col gap-6">
            <div
              className={`flex flex-col gap-2 transition-all duration-[1500ms] ease-out delay-200 ${
                problemSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Data insights were locked behind technical barriers and knowledge gaps
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Non-technical stakeholders needed console usage data to inform decisions, but couldn't formulate the right questions because they didn't know what data existed or how to ask for it.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className={`w-full transition-all duration-[1500ms] ease-out delay-300 ${
                problemSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">SQL expertise required</AccordionTrigger>
                <AccordionContent>
                  Existing tools demanded technical knowledge and deep familiarity with complex database schemas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Multi-day bottlenecks</AccordionTrigger>
                <AccordionContent>
                  Requests routed through data engineering delayed insights by days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={solutionSection.ref}
        className="min-h-screen w-full flex items-center justify-center snap-start py-24 bg-muted/30"
      >
        <div className="max-w-7xl w-full px-6 flex flex-col items-center gap-12">
          {/* Section Header */}
          <div
            className={`max-w-[750px] w-full flex flex-col items-center gap-2 transition-all duration-[1500ms] ease-out ${
              solutionSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Design Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              How I translated insights into a solution through design and development.
            </p>
          </div>

          {/* Image Canvas */}
          <div
            className={`w-fit max-w-full mx-auto rounded-lg overflow-hidden transition-all duration-[1500ms] ease-out delay-100 shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] ${
              solutionSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={conversationApproach}
              alt="Before and after comparison showing complex SQL statements transformed into conversational discovery"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
              onClick={() => setLightboxSrc(conversationApproach)}
            />
          </div>

          {/* Solution Content */}
          <div className="max-w-[750px] mx-auto w-full flex flex-col gap-6">
            <div
              className={`flex flex-col gap-2 transition-all duration-[1500ms] ease-out delay-200 ${
                solutionSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Conversational AI that helps users discover what to ask, not just answer what they already know
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Rather than optimizing single-shot queries, I designed a multi-turn dialogue system that lets users progressively refine questions and uncover insights they wouldn't have known to ask for initially.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className={`w-full transition-all duration-[1500ms] ease-out delay-300 ${
                solutionSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base">Self-study analysis</AccordionTrigger>
                <AccordionContent>
                  Documented my own attempts using existing tools, mapping exact pain points and identifying which analyses were impossible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Semantic data modeling</AccordionTrigger>
                <AccordionContent>
                  Developed a proprietary 3-step process: discovery queries, semantic metadata mapping natural language to schema, and system prompt integration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">Full-stack implementation</AccordionTrigger>
                <AccordionContent>
                  Built a React application with Amazon Bedrock integration, maintaining conversation context across turns with self-correction capabilities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Project Artifacts Section */}
      <section
        ref={artifactsSection.ref}
        className="min-h-screen w-full snap-start py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight transition-all duration-[1500ms] ease-out ${
                artifactsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } text-foreground`}
            >
              What I Delivered
            </h2>
            <p
              className={`text-muted-foreground mt-2 max-w-[750px] transition-all duration-[1500ms] ease-out delay-100 ${
                artifactsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Key deliverables spanning interface design, user flows, and system architecture.
            </p>

            {/* Artifact Cards */}
            <div className="flex flex-col gap-24 mt-16 w-full">
              {/* Card 1: Primary Interface/Experience */}
              <div
                className={`flex flex-col items-center gap-8 transition-all duration-[1500ms] ease-out delay-200 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="w-fit max-w-full rounded-lg overflow-hidden shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] transition-shadow duration-200"
                >
                  <img
                    src={screenGuidedInterface}
                    alt="Guided Interface"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
                    onClick={() => setLightboxSrc(screenGuidedInterface)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Conversational Interface with Guided Discovery</h4>
                  <span className="text-muted-foreground text-sm">
                    The conversational experience with guided prompts enables users to start broad and progressively refine their questions. Context is maintained across turns, allowing natural exploration without repeating information.
                  </span>
                </div>
              </div>

              {/* Card 2: Key Workflow/Interaction */}
              <div
                className={`flex flex-col items-center gap-8 transition-all duration-[1500ms] ease-out delay-300 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="w-fit max-w-full rounded-lg overflow-hidden shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] transition-shadow duration-200"
                >
                  <img
                    src={screenDesign3}
                    alt="Key Workflow"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
                    onClick={() => setLightboxSrc(screenDesign3)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Intelligent Data Storytelling</h4>
                  <span className="text-muted-foreground text-sm">
                    Rather than raw tables, the system transforms query results into narrative summaries that identify patterns, trends, and actionable insights—highlighting what matters most and suggesting related explorations.
                  </span>
                </div>
              </div>

              {/* Card 3: System/Architecture/Detail */}
              <div
                className={`flex flex-col items-center gap-8 transition-all duration-[1500ms] ease-out delay-500 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-fit max-w-full">
                  <img
                    src={systemArchitecture}
                    alt="System Architecture"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
                    onClick={() => setLightboxSrc(systemArchitecture)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Semantic Data Model Architecture</h4>
                  <span className="text-muted-foreground text-sm">
                    The breakthrough innovation: A proprietary semantic data model that maps how users think about data (business terms) to how data is stored (technical database structures).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Decisions Section */}
      <section
        ref={decisionsSection.ref}
        className="min-h-screen w-full snap-start py-24"
        style={{ backgroundColor: "#151E33" }}
      >
        <div className="max-w-[750px] mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight transition-all duration-[1500ms] ease-out ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ color: "hsla(0, 0%, 100%, 1)" }}
            >
              Key Decisions
            </h2>
            <p
              className={`mt-2 transition-all duration-[1500ms] ease-out delay-100 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ color: "hsla(213, 27%, 84%, 1)" }}
            >
              These are the decisions I made that shaped the products experience.
            </p>
          </div>

          {/* Decision Items */}
          <div className="flex flex-col gap-16 mt-16">
            {/* Decision 1 */}
            <div
              className={`flex flex-col gap-4 p-6 transition-all duration-[1500ms] ease-out delay-200 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h3 className="text-xl font-semibold tracking-tight" style={{ color: "hsla(0, 0%, 100%, 1)" }}>
                Conversational experience over one-shot queries
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                Users couldn't formulate specific questions—they didn't know what data existed or
                how to ask for it. I designed a multi-turn dialogue letting users start broad and refine
                through follow-ups.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-1" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    One-shot systems fail when users can't ask the right questions upfront.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-1" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    4.2x more queries per session; users discovered insights they didn't know to ask for.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Decision 2 */}
            <div
              className={`flex flex-col gap-4 p-6 transition-all duration-[1500ms] ease-out delay-300 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h3 className="text-xl font-semibold tracking-tight" style={{ color: "hsla(0, 0%, 100%, 1)" }}>
                Semantic data model as translation layer
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                An AI-powered conversational analytics tool that enables
                stakeholders to explore console usage.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-2" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-2" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Decision 3 */}
            <div
              className={`flex flex-col gap-4 p-6 transition-all duration-[1500ms] ease-out delay-500 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.10)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              <h3 className="text-xl font-semibold tracking-tight" style={{ color: "hsla(0, 0%, 100%, 1)" }}>
                Data storytelling over raw results
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                Users wanted answers, not spreadsheets. I shifted focus to narrative summaries that identify patterns, explain significance, and suggest next steps.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-3" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-3" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSection.ref}
        className="h-screen w-full flex flex-col items-center justify-center snap-start bg-background"
      >
        <div
          className={`max-w-4xl w-full mx-auto px-6 py-16 flex flex-col items-center text-center gap-6 transition-all duration-[1500ms] ease-out ${
            ctaSection.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } rounded-xl bg-muted/50`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground">
            Let's talk about how I can help solve complex product challenges for your business.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Send a message</Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.Calendly?.initPopupWidget({ url: "https://calendly.com/raymond-festa/30min" })}
            >
              Schedule a call
            </Button>
          </div>
        </div>

        <div
          className={`flex items-center gap-4 mt-16 text-sm font-medium transition-all duration-[1500ms] ease-out delay-200 ${
            ctaSection.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <a href="/" className="hover:text-muted-foreground transition-colors">
            ← Back to portfolio
          </a>
          <span className="text-border">|</span>
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Next project →
          </a>
        </div>
      </section>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
