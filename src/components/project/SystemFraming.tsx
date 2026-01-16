interface SystemFramingProps {
  title: string
  visualUrl?: string
  framingStatement: string
}

export function SystemFraming({ title, visualUrl, framingStatement }: SystemFramingProps) {
  return (
    <section id="framing" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-8">
        <h3 className="mb-8">{title}</h3>
      </div>

      {/* Visual first */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center mb-8">
        {visualUrl ? (
          <img src={visualUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">System Diagram</span>
        )}
      </div>

      {/* One sentence only */}
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <p className="text-lg font-medium text-center">{framingStatement}</p>
      </div>
    </section>
  )
}
