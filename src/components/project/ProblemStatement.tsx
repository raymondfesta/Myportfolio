interface ProblemStatementProps {
  visualUrl?: string
  framingSentence: string
  bullets: string[]
}

export function ProblemStatement({ visualUrl, framingSentence, bullets }: ProblemStatementProps) {
  return (
    <section id="problem" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">The Problem</h3>
      </div>

      {/* Visual first */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Problem context" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Failure Mode / Before State</span>
        )}
      </div>

      {/* Framing + bullets */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <p className="text-lg font-semibold mb-6">{framingSentence}</p>
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-muted-foreground flex gap-3">
              <span className="text-foreground mt-1.5 shrink-0">·</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
