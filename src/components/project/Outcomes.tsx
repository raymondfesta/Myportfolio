interface OutcomesProps {
  visualUrl?: string
  bullets: string[]
}

export function Outcomes({ visualUrl, bullets }: OutcomesProps) {
  return (
    <section id="outcomes" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">Outcomes</h3>
      </div>

      {/* Before/after or impact visual */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Outcomes" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Before / After Impact Summary</span>
        )}
      </div>

      {/* Outcome bullets - prefer deltas */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <ul className="space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-foreground mt-1.5 shrink-0">·</span>
              <span className="font-medium">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
