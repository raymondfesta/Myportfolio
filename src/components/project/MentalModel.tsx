interface MentalModelProps {
  visualUrl?: string
  steps: string[]
}

export function MentalModel({ visualUrl, steps }: MentalModelProps) {
  return (
    <section id="mental-model" className="py-12 lg:py-20 bg-muted/20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">How It Works for Humans</h3>
      </div>

      {/* Cognitive diagram - no UI screenshots */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Mental model" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Human → System → Feedback Loop</span>
        )}
      </div>

      {/* Mental model steps */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="text-muted-foreground font-medium shrink-0">{index + 1}.</span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
