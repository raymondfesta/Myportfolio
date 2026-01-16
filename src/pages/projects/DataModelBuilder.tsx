declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

import { useState, useCallback } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Check } from "lucide-react"
import { Lightbox } from "@/components/ui/lightbox"
import { Separator } from "@/components/ui/separator"
import { useInView } from "@/hooks/use-in-view"
import dmbTemplateCreation from "@/assets/dmb_template_based_creation.png"
import dmbSchemaDetection from "@/assets/dmb_schema_detection.png"
import dmbDiscovery from "@/assets/dmb-discovery.png"
import dmbDesignApproach from "@/assets/dmb_design_approach.png"
import dmbSystemArchitecture from "@/assets/dmb_system_architecture.png"

interface DataModelBuilderProps {
  onBack?: () => void
}

export function DataModelBuilder({}: DataModelBuilderProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [contactPopoverOpen, setContactPopoverOpen] = useState(false)
  const problemSection = useInView<HTMLElement>({ threshold: 0.2 })
  const solutionSection = useInView<HTMLElement>({ threshold: 0.2 })
  const artifactsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const decisionsSection = useInView<HTMLElement>({ threshold: 0.1 })
  const ctaSection = useInView<HTMLElement>({ threshold: 0.3 })

  const handleContactClick = useCallback(() => {
    navigator.clipboard.writeText("raymond.festa2020@gmail.com")
    setContactPopoverOpen(true)
    setTimeout(() => setContactPopoverOpen(false), 2000)
  }, [])

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
              src={dmbSchemaDetection}
              alt="Data Model Builder hero"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer"
              onClick={() => setLightboxSrc(dmbSchemaDetection)}
            />
          </div>
        </div>

        <div className="max-w-[750px] w-full px-6 flex flex-col gap-8 animate-fade-in-up">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ color: "#FFFFFF" }}>
              Project Summary
            </h2>
            <p className="text-white/80 leading-relaxed">
              A visual design interface that simplifies Amazon Timestream data model creation.
              The tool compresses setup timelines from 90+ days to hours through template-based
              creation, auto schema detection, and visual relationship mapping.
            </p>
          </div>

          <Separator className="bg-white/20" />

          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Core Skill
              </span>
              <span className="text-white/80">
                Visual Interface Design & Developer Experience
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-white">
                Role
              </span>
              <span className="text-white/80">
                Lead Designer
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
            className={`w-fit max-w-full mx-auto bg-muted rounded-lg overflow-hidden transition-all duration-[1500ms] ease-out delay-100 shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] ${
              problemSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={dmbDiscovery}
              alt="Discovery visualization"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer "
              onClick={() => setLightboxSrc(dmbDiscovery)}
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
                Developers applied SQL mental models to schemaless architecture
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Developers with relational database experience instinctively applied SQL patterns
                to Timestream's schemaless time-series structure, creating inefficient schemas.
                Structural errors were only discovered after data ingestion, leading to costly restarts.
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
                <AccordionTrigger className="text-base">90+ day onboarding cycles</AccordionTrigger>
                <AccordionContent>
                  Extended implementation timelines with structural errors discovered only after data ingestion,
                  requiring costly restart cycles during POC phases.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Best practices buried in documentation</AccordionTrigger>
                <AccordionContent>
                  Template patterns and schema recommendations existed but were inaccessible to new users
                  who needed guidance most during initial setup.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">Low workflow completion rates</AccordionTrigger>
                <AccordionContent>
                  Critical workflows like Batch Load and Scheduled Queries had significant drop-off,
                  indicating fundamental adoption barriers.
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
            className={`w-fit max-w-full mx-auto bg-muted rounded-lg overflow-hidden transition-all duration-[1500ms] ease-out delay-100 shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] ${
              solutionSection.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={dmbDesignApproach}
              alt="Design approach visualization"
              className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer "
              onClick={() => setLightboxSrc(dmbDesignApproach)}
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
                Bridge mental models through visual building
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Rather than more documentation or tutorials, I designed a visual builder that
                meets users where they are—leveraging their existing SQL knowledge while guiding
                them toward schemaless best practices through interaction.
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
                <AccordionTrigger className="text-base">Research & Discovery</AccordionTrigger>
                <AccordionContent>
                  Analyzed support tickets, consulted Solution Architects with direct customer access,
                  and mapped the typical 90+ day onboarding journey to identify friction points.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base">Iterative prototyping</AccordionTrigger>
                <AccordionContent>
                  Created prototype templates with auto-detection features and progressive disclosure
                  patterns. Tested with real use cases across IoT, DevOps, and application metrics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base">Engineering collaboration</AccordionTrigger>
                <AccordionContent>
                  Worked closely with service and console engineers to balance design integrity
                  with technical constraints, optimizing rendering for complex schemas.
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
              Three core capabilities that transformed the data modeling experience.
            </p>

            {/* Artifact Cards */}
            <div className="flex flex-col gap-24 mt-16 w-full">
              {/* Card 1: Template-Based Creation */}
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
                    src={dmbTemplateCreation}
                    alt="Template-Based Creation"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer "
                    onClick={() => setLightboxSrc(dmbTemplateCreation)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Template-Based Creation</h4>
                  <span className="text-muted-foreground text-sm">
                    Pre-configured templates organized by use case—IoT, DevOps, application metrics—provide
                    validated starting points that follow Timestream best practices, eliminating guesswork for new users.
                  </span>
                </div>
              </div>

              {/* Card 2: Auto Schema Detection */}
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
                    src={dmbSchemaDetection}
                    alt="Auto Schema Detection"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer "
                    onClick={() => setLightboxSrc(dmbSchemaDetection)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Auto Schema Detection</h4>
                  <span className="text-muted-foreground text-sm">
                    Upload sample data and the system automatically analyzes structure, populating correct
                    fields and eliminating guesswork around dimensional vs. measure categorization.
                  </span>
                </div>
              </div>

              {/* Card 3: Visual Relationship Mapping */}
              <div
                className={`flex flex-col items-center gap-8 transition-all duration-[1500ms] ease-out delay-500 ${
                  artifactsSection.isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="w-fit max-w-full rounded-lg overflow-hidden shadow-[0_1px_4px_-1px_rgba(14,14,17,0.08),0_8px_16px_-8px_rgba(14,14,17,0.12)] hover:shadow-[0_1px_8px_-2px_rgba(14,14,17,0.10),0_16px_28px_-10px_rgba(14,14,17,0.16)] transition-shadow duration-200">
                  <img
                    src={dmbSystemArchitecture}
                    alt="Visual Relationship Mapping"
                    className="max-w-full max-h-[60vh] w-auto h-auto block cursor-pointer "
                    onClick={() => setLightboxSrc(dmbSystemArchitecture)}
                  />
                </div>
                <div className="flex flex-col gap-1 max-w-[750px] text-left">
                  <h4 className="text-lg font-semibold tracking-tight text-foreground">Visual Mappings Parsed to API Format</h4>
                  <span className="text-muted-foreground text-sm">
                    I designed the system architecture to automatically parse mappings from the Visual Builder component
                    into the required API format. Using a table as the base component made the mapping configuration
                    straightforward to implement and maintain.
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
              These are the decisions I made that shaped the product's experience.
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
                Visual builder over documentation
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                Users don't read documentation when they're stuck—they need guidance embedded directly
                in the workflow. The visual builder provides in-context learning while users complete real tasks.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-1" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Documentation-first approaches failed because users needed immediate, contextual guidance—not
                    reference material to read separately.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-1" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    51% completion rate for new customers within their first 7 days—users successfully created
                    data models on their first attempt.
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
                Template-first approach
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                Starting from a blank canvas overwhelms users who don't yet understand the domain.
                Templates provide validated starting points that encode best practices.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-2" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Lower barrier to entry than blank canvas; users modify working examples rather than
                    building from scratch with incomplete knowledge.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-2" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Enabled first-attempt successful data imports via Batch Load—the key onboarding workflow
                    that previously had significant drop-off.
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
                Progressive disclosure for complexity
              </h3>
              <p className="leading-relaxed" style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                Complex schemas with dozens of columns overwhelm users. Progressive disclosure reveals
                details on demand while keeping the default view scannable.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="why-3" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Why it mattered</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Visual clutter destroys comprehension. Users needed to see relationships at a glance
                    while retaining access to detailed configuration.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="impact-3" style={{ borderColor: "hsla(0, 0%, 100%, 0.1)" }}>
                  <AccordionTrigger className="text-sm" style={{ color: "hsla(0, 0%, 100%, 1)" }}>Impact</AccordionTrigger>
                  <AccordionContent style={{ color: "hsla(213, 27%, 84%, 1)" }}>
                    Real-time validation prevented query inefficiencies before data ingestion,
                    eliminating the costly restart cycles that plagued the 90+ day onboarding.
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
            <Popover open={contactPopoverOpen} onOpenChange={setContactPopoverOpen}>
              <PopoverTrigger asChild>
                <Button size="lg" onClick={handleContactClick}>Send a message</Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto px-3 py-2">
                <p className="text-sm text-green-600 flex items-center gap-1.5">
                  <Check className="h-4 w-4" />
                  Email copied to clipboard
                </p>
              </PopoverContent>
            </Popover>
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
          <a href="/projects/ai-analytics-tool" className="hover:text-muted-foreground transition-colors">
            Next project →
          </a>
        </div>
      </section>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
