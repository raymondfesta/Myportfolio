import { ArrowLeft } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface ProjectSidebarProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
  onBack?: () => void
}

const navSections = [
  { id: "hero", label: "Hero" },
  { id: "snapshot", label: "Snapshot" },
  { id: "framing", label: "System Framing" },
  { id: "problem", label: "Problem" },
  { id: "strategy", label: "Strategy" },
  { id: "interaction", label: "Key Interaction" },
  { id: "mental-model", label: "Mental Model" },
  { id: "trust", label: "Trust & Control" },
  { id: "architecture", label: "Architecture" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
  { id: "insight", label: "Insight" },
]

export function ProjectSidebar({ activeSection, onNavigate, onBack }: ProjectSidebarProps) {
  return (
    <Sidebar>
      {onBack && (
        <SidebarHeader className="border-b border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={onBack} className="w-full">
                <ArrowLeft className="size-4" />
                <span>Back to Projects</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      )}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navSections.map((section) => (
                <SidebarMenuItem key={section.id}>
                  <SidebarMenuButton
                    isActive={activeSection === section.id}
                    onClick={() => onNavigate(section.id)}
                  >
                    <span>{section.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
