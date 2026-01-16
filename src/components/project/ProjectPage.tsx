import { useState, useEffect } from "react"
import type { ProjectData } from "./types"
import { ProjectHero } from "./ProjectHero"
import { ProjectMeta } from "./ProjectMeta"
import { SystemFraming } from "./SystemFraming"
import { ProblemStatement } from "./ProblemStatement"
import { DesignStrategy } from "./DesignStrategy"
import { KeyInteraction } from "./KeyInteraction"
import { MentalModel } from "./MentalModel"
import { TrustAndControl } from "./TrustAndControl"
import { ArchitectureOverview } from "./ArchitectureOverview"
import { Outcomes } from "./Outcomes"
import { Reflection } from "./Reflection"
import { TransferableInsight } from "./TransferableInsight"
import { ProjectSidebar } from "./ProjectSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

interface ProjectPageProps {
  data: ProjectData
  onBack?: () => void
}

export function ProjectPage({ data, onBack }: ProjectPageProps) {
  const [activeSection, setActiveSection] = useState("")

  const sectionIds = [
    "hero",
    "snapshot",
    "framing",
    "problem",
    "strategy",
    "interaction",
    "mental-model",
    "trust",
    "architecture",
    "outcomes",
    "reflection",
    "insight",
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map((id) => ({
        id,
        element: document.getElementById(id),
      }))

      const current = sections.find((section) => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 200 && rect.bottom >= 200
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <SidebarProvider>
      <ProjectSidebar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onBack={onBack}
      />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur-xl px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <main className="flex-1">
        <ProjectHero
          headline={data.hero.headline}
          subheadline={data.hero.subheadline}
          visualUrl={data.hero.visualUrl}
        />

        <ProjectMeta
          role={data.meta.role}
          systemType={data.meta.systemType}
          users={data.meta.users}
          timeline={data.meta.timeline}
          keyConstraint={data.meta.keyConstraint}
          outcome={data.meta.outcome}
        />

        <SystemFraming
          title={data.systemFraming.title}
          visualUrl={data.systemFraming.visualUrl}
          framingStatement={data.systemFraming.framingStatement}
        />

        <ProblemStatement
          visualUrl={data.problem.visualUrl}
          framingSentence={data.problem.framingSentence}
          bullets={data.problem.bullets}
        />

        <DesignStrategy
          visualUrl={data.strategy.visualUrl}
          heading={data.strategy.heading}
          bullets={data.strategy.bullets}
        />

        <KeyInteraction
          visualUrl={data.keyInteraction.visualUrl}
          callouts={data.keyInteraction.callouts}
        />

        <MentalModel
          visualUrl={data.mentalModel.visualUrl}
          steps={data.mentalModel.steps}
        />

        <TrustAndControl
          visualUrl={data.trustAndControl.visualUrl}
          safeguards={data.trustAndControl.safeguards}
        />

        {data.architecture && (
          <ArchitectureOverview
            visualUrl={data.architecture.visualUrl}
            takeaway={data.architecture.takeaway}
          />
        )}

        <Outcomes
          visualUrl={data.outcomes.visualUrl}
          bullets={data.outcomes.bullets}
        />

        <Reflection
          changed={data.reflection.changed}
          learned={data.reflection.learned}
          wouldEvolve={data.reflection.wouldEvolve}
        />

        <TransferableInsight
          statement={data.transferableInsight.statement}
          supporting={data.transferableInsight.supporting}
        />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
