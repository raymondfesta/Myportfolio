interface TrustAndControlProps {
  visualUrl?: string
  safeguards: string[]
}

export function TrustAndControl({ visualUrl, safeguards }: TrustAndControlProps) {
  return (
    <section id="trust" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">Trust, Safeguards, and Control</h3>
      </div>

      {/* Guardrails / control flow visual */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Trust and control" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Guardrails / Control Flow</span>
        )}
      </div>

      {/* Safeguards list */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <ul className="space-y-3">
          {safeguards.map((safeguard, index) => (
            <li key={index} className="text-muted-foreground flex gap-3">
              <span className="text-foreground mt-1.5 shrink-0">·</span>
              <span>{safeguard}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
