interface KeyInteractionProps {
  visualUrl?: string
  callouts?: string[]
}

export function KeyInteraction({ visualUrl, callouts }: KeyInteractionProps) {
  return (
    <section id="interaction" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">Moment of Intelligence</h3>
      </div>

      {/* Annotated UI visual - most important section */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Key interaction" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Annotated UI / Interaction Visual</span>
        )}
      </div>

      {/* Optional callouts - phrases only */}
      {callouts && callouts.length > 0 && (
        <div className="max-w-[780px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {callouts.map((callout, index) => (
              <div key={index} className="text-sm">
                <span className="font-medium">{callout}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
