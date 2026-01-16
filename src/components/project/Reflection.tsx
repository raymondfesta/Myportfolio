import { useState } from "react"
import { Button } from "@/components/ui/button"

interface ReflectionProps {
  changed: string[]
  learned: string[]
  wouldEvolve: string[]
}

export function Reflection({ changed, learned, wouldEvolve }: ReflectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="reflection" className="py-12 lg:py-20 bg-muted/20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h3>Reflection</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-muted-foreground"
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>

        {isExpanded && (
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h4 className="text-lg font-semibold mb-4">What Changed</h4>
              <ul className="space-y-2">
                {changed.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex gap-3">
                    <span className="text-foreground mt-1.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">What I Learned</h4>
              <ul className="space-y-2">
                {learned.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex gap-3">
                    <span className="text-foreground mt-1.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">What Would Evolve</h4>
              <ul className="space-y-2">
                {wouldEvolve.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex gap-3">
                    <span className="text-foreground mt-1.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
