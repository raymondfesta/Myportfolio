declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useInView } from "@/hooks/use-in-view"
import placeholderScreen from "@/assets/placeholder_screen.png"

interface TemplateCaseStudyProps {
  onBack?: () => void
}

export function TemplateCaseStudy({}: TemplateCaseStudyProps) {
  const contentSection = useInView<HTMLElement>({ threshold: 0.3 })
  const problemSection = useInView<HTMLElement>({ threshold: 0.2 })
  const solutionSection = useInView<HTMLElement>({ threshold: 0.2 })
  const artifactsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const decisionsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const ctaSection = useInView<HTMLElement>({ threshold: 0.3 })

  return (
    <div className="fixed inset-0 top-16 overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center snap-start"
        style={{ backgroundColor: "hsl(0, 0%, 80%)" }}
      >
        <div className="max-w-7xl w-full px-6 mx-auto">
          <div
            className="aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden animate-fade-in-up"
            style={{
              boxShadow:
                "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
            }}
          >
            <img
              src={placeholderScreen}
              alt="Project hero"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section
        ref={contentSection.ref}
        className="h-screen w-full flex items-center justify-center snap-start"
      >
        <div className="max-w-[750px] w-full px-6 flex flex-col gap-8">
          <div
            className={`flex flex-col gap-2 transition-all duration-[1500ms] ease-out ${
              contentSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Project Summary
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              An AI-powered conversational analytics tool that enables stakeholders to
              explore console usage data and generate insight summaries using natural
              language. The tool eliminates the need for SQL queries or technical expertise.
            </p>
          </div>

          <Separator
            className={`transition-all duration-[1500ms] ease-out delay-100 ${
              contentSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          />

          <div
            className={`grid grid-cols-2 gap-8 transition-all duration-[1500ms] ease-out delay-200 ${
              contentSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Core Skill
              </span>
              <span className="text-muted-foreground">
                AI Agent Architecture & Interface Design
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Role
              </span>
              <span className="text-muted-foreground">
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Discovery
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              What I learned about users, their challenges, and the opportunity space.
            </p>
          </div>

          {/* Image Canvas */}
          <div
            className={`aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-out delay-100 ${
              problemSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              boxShadow:
                "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
            }}
          >
            <img
              src={placeholderScreen}
              alt="Discovery visualization"
              className="w-full h-full object-contain"
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
              <h3 className="text-2xl font-bold tracking-tight">
                The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An AI-powered conversational analytics tool that enables
                stakeholders to explore console usage
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
                <AccordionTrigger className="text-sm">Name</AccordionTrigger>
                <AccordionContent>
                  Accordion content goes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm">Name</AccordionTrigger>
                <AccordionContent>
                  Accordion content goes here.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        ref={solutionSection.ref}
        className="min-h-screen w-full flex items-center justify-center snap-start py-24"
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Design Approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              How I translated insights into a solution through design and development.
            </p>
          </div>

          {/* Image Canvas */}
          <div
            className={`aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-out delay-100 ${
              solutionSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              boxShadow:
                "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
            }}
          >
            <img
              src={placeholderScreen}
              alt="Design approach visualization"
              className="w-full h-full object-contain"
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
              <h3 className="text-2xl font-bold tracking-tight">
                The Solution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An AI-powered conversational analytics tool that enables
                stakeholders to explore console usage
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
                <AccordionTrigger className="text-sm">Name</AccordionTrigger>
                <AccordionContent>
                  Accordion content goes here.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm">Name</AccordionTrigger>
                <AccordionContent>
                  Accordion content goes here.
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
          <Separator
            className={`max-w-[750px] mx-auto transition-all duration-[1500ms] ease-out ${
              artifactsSection.isInView
                ? "opacity-100"
                : "opacity-0"
            }`}
          />

          <div className="pt-12 flex flex-col items-center text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight transition-all duration-[1500ms] ease-out ${
                artifactsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Project Artifacts
            </h2>
            <p
              className={`text-muted-foreground mt-2 max-w-[750px] transition-all duration-[1500ms] ease-out delay-100 ${
                artifactsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              The key interfaces, user journeys and system architecture designs.
            </p>

            {/* Artifact Cards */}
            <div className="flex flex-col gap-24 mt-16 w-full">
              {/* Card 1: Primary Interface/Experience */}
              <div
                className={`flex flex-col items-center gap-4 transition-all duration-[1500ms] ease-out delay-200 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
                  }}
                >
                  <img
                    src={placeholderScreen}
                    alt="Primary Interface"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold">Primary Interface/Experience</span>
                  <span className="text-muted-foreground text-sm">
                    What this shows - 1 sentence description of what it is and key design decision
                  </span>
                </div>
              </div>

              {/* Card 2: Key Workflow/Interaction */}
              <div
                className={`flex flex-col items-center gap-4 transition-all duration-[1500ms] ease-out delay-300 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
                  }}
                >
                  <img
                    src={placeholderScreen}
                    alt="Key Workflow"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold">Key Workflow/Interaction</span>
                  <span className="text-muted-foreground text-sm">
                    What this shows - 1 sentence
                  </span>
                </div>
              </div>

              {/* Card 3: System/Architecture/Detail */}
              <div
                className={`flex flex-col items-center gap-4 transition-all duration-[1500ms] ease-out delay-500 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div
                  className="aspect-[16/9] w-auto max-w-full max-h-[60vh] mx-auto rounded-lg flex items-center justify-center overflow-hidden"
                  style={{
                    boxShadow:
                      "0 1px 8px -2px rgba(14, 14, 17, 0.10), 0 16px 28px -10px rgba(14, 14, 17, 0.16)",
                  }}
                >
                  <img
                    src={placeholderScreen}
                    alt="System Architecture"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold">System/Architecture/Detail</span>
                  <span className="text-muted-foreground text-sm">
                    What this shows - 1 sentence
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
      >
        <div className="max-w-[750px] mx-auto px-6">
          <Separator
            className={`transition-all duration-[1500ms] ease-out ${
              decisionsSection.isInView ? "opacity-100" : "opacity-0"
            }`}
          />

          <div className="pt-12 flex flex-col items-center text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold tracking-tight transition-all duration-[1500ms] ease-out ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Key Decisions
            </h2>
            <p
              className={`text-muted-foreground mt-2 transition-all duration-[1500ms] ease-out delay-100 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              These are the decisions I made that shaped the products experience.
            </p>
          </div>

          {/* Decision Items */}
          <div className="flex flex-col gap-16 mt-16">
            {/* Decision 1 */}
            <div
              className={`flex flex-col gap-4 transition-all duration-[1500ms] ease-out delay-200 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                Conversational experience over one-shot queries
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Users couldn't formulate specific questions—they didn't know what data existed or
                how to ask for it. I designed a multi-turn dialogue letting users start broad and refine
                through follow-ups.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-1">
                  <AccordionTrigger className="text-sm">Why it mattered</AccordionTrigger>
                  <AccordionContent>
                    One-shot systems fail when users can't ask the right questions upfront.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-1">
                  <AccordionTrigger className="text-sm">Impact</AccordionTrigger>
                  <AccordionContent>
                    4.2x more queries per session; users discovered insights they didn't know to ask for.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Decision 2 */}
            <div
              className={`flex flex-col gap-4 transition-all duration-[1500ms] ease-out delay-300 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                Decision 2
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An AI-powered conversational analytics tool that enables
                stakeholders to explore console usage.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-2">
                  <AccordionTrigger className="text-sm">Why it mattered</AccordionTrigger>
                  <AccordionContent>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-2">
                  <AccordionTrigger className="text-sm">Impact</AccordionTrigger>
                  <AccordionContent>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Decision 3 */}
            <div
              className={`flex flex-col gap-4 transition-all duration-[1500ms] ease-out delay-500 ${
                decisionsSection.isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h3 className="text-xl font-semibold tracking-tight">
                Decision 3
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                An AI-powered conversational analytics tool that enables
                stakeholders to explore console usage.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-3">
                  <AccordionTrigger className="text-sm">Why it mattered</AccordionTrigger>
                  <AccordionContent>
                    Accordion content goes here.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-3">
                  <AccordionTrigger className="text-sm">Impact</AccordionTrigger>
                  <AccordionContent>
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
        className="h-screen w-full flex flex-col items-center justify-center snap-start"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div
          className={`max-w-[750px] w-full mx-auto px-6 py-16 flex flex-col items-center text-center gap-6 transition-all duration-[1500ms] ease-out ${
            ctaSection.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ borderRadius: "12px", backgroundColor: "#F8FAFC" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
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
    </div>
  )
}
