import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import heroAiAnalytics from "@/assets/card_hero_ai_tool.png"
import heroDataModelBuilder from "@/assets/card_hero_data_model_builder.png"
import heroTeslaEnergy from "@/assets/card_tesla_energy.png"
import heroFinanceApp from "@/assets/card_hero_finance_app.png"

interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  year: string
  imageUrl?: string
  comingSoon?: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "Conversational AI Analytics Tool",
    description: "An AI-powered conversational tool that lets stakeholders explore console usage data and generate insights through natural language, eliminating the need for SQL expertise.",
    tags: ["AI", "Analytics", "NLP"],
    year: "2024",
    imageUrl: heroAiAnalytics,
  },
  {
    id: "3",
    title: "Energy Station Monitoring Dashboard",
    description: "An interactive dashboard that adapts to user roles and surfaces AI-driven recommendations by analyzing real-time battery telemetry data. Built for scale and responsive across devices.",
    tags: ["Dashboard", "AI", "IoT"],
    year: "2024",
    imageUrl: heroTeslaEnergy,
  },
  {
    id: "7",
    title: "AI-Powered Money Management Platform",
    description: "Native iOS app providing automated wealth management for professionals earning $150-200K. Full-stack design and development: SwiftUI interface, financial allocation algorithm, banking integration, and comprehensive design system.",
    tags: ["AI", "Fintech", "Product Strategy", "Native iOS"],
    year: "2024",
    imageUrl: heroFinanceApp,
    comingSoon: true,
  },
  {
    id: "2",
    title: "Visual Data Model Builder",
    description: "A visual design interface that simplifies Amazon Timestream data model creation. The tool compresses setup timelines from 90+ days to hours through template-based creation, auto schema detection, and visual relationship mapping.",
    tags: ["AWS", "Data", "Tool"],
    year: "2024",
    imageUrl: heroDataModelBuilder,
  },
  {
    id: "4",
    title: "Coding Agent Prompt Generator",
    description: "Structured templates with quality scoring for generating effective AI coding prompts.",
    tags: ["AI", "Dev Tools", "Prompts"],
    year: "2024",
  },
  {
    id: "5",
    title: "Alpine Bikes",
    description: "Custom bike design and manufacturing platform for personalized cycling experiences.",
    tags: ["E-commerce", "Manufacturing"],
    year: "2021",
  },
  {
    id: "6",
    title: "Autonomous Aircraft Mission Planner",
    description: "Geospatial mission planning with 3D visualization for autonomous aircraft operations.",
    tags: ["Aerospace", "3D", "Mapping"],
    year: "2024",
  },
]

interface ProjectShowcaseProps {
  onProjectClick?: (projectId: string) => void
  limit?: number
}

export function ProjectShowcase({ onProjectClick, limit }: ProjectShowcaseProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {displayedProjects.map((project, index) => (
        <Card
          key={project.id}
          onClick={() => !project.comingSoon && onProjectClick?.(project.id)}
          className={`group border-border/40 hover:border-foreground/20 transition-all duration-300 overflow-hidden animate-fade-in-up ${project.comingSoon ? "cursor-default" : "cursor-pointer"}`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Project Image */}
          <div className="-mt-6 aspect-video bg-muted/30 border-b border-border/40 overflow-hidden relative">
            {project.imageUrl ? (
              <img src={project.imageUrl} alt={project.title} className="block w-full h-full object-cover" />
            ) : (
              <span className="text-muted-foreground text-sm">Project Image</span>
            )}
            {project.comingSoon && (
              <Badge className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-medium">
                Coming Soon
              </Badge>
            )}
          </div>

          <CardContent className="p-6">
            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-muted-foreground transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="text-xs font-normal bg-muted/50 hover:bg-muted/70 border-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
