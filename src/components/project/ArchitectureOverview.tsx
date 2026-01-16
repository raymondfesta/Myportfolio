interface ArchitectureOverviewProps {
  visualUrl?: string
  takeaway: string
}

export function ArchitectureOverview({ visualUrl, takeaway }: ArchitectureOverviewProps) {
  return (
    <section id="architecture" className="py-12 lg:py-20 bg-muted/20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">Architecture as UX Leverage</h3>
      </div>

      {/* Conceptual architecture diagram */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt="Architecture" className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Conceptual Architecture Diagram</span>
        )}
      </div>

      {/* One-sentence takeaway */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <p className="text-lg font-medium text-center">{takeaway}</p>
      </div>
    </section>
  )
}
