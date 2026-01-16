import { Card, CardContent } from "@/components/ui/card"

interface ProjectMetaProps {
  role: string
  systemType: string
  users: string
  timeline: string
  keyConstraint: string
  outcome: string
}

export function ProjectMeta({
  role,
  systemType,
  users,
  timeline,
  keyConstraint,
  outcome,
}: ProjectMetaProps) {
  const metaItems = [
    { label: "Role", value: role },
    { label: "System Type", value: systemType },
    { label: "Users", value: users },
    { label: "Timeline", value: timeline },
    { label: "Key Constraint", value: keyConstraint },
    { label: "Outcome", value: outcome },
  ]

  return (
    <section id="snapshot" className="max-w-[780px] mx-auto px-6 lg:px-8 py-12 lg:py-16">
      <Card className="border-border/40">
        <CardContent className="p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {metaItems.map((item) => (
              <div key={item.label}>
                <dt className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  {item.label}
                </dt>
                <dd className="text-sm font-medium">{item.value}</dd>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
