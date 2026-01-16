interface ProjectHeroProps {
  headline: string
  subheadline: string
  visualUrl?: string
}

export function ProjectHero({ headline, subheadline, visualUrl }: ProjectHeroProps) {
  return (
    <section id="hero" className="pt-12 lg:pt-16 pb-16 lg:pb-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8 mb-12">
        <h1 className="mb-6 animate-fade-in-up">{headline}</h1>
        <h2 className="text-xl lg:text-2xl text-muted-foreground font-normal tracking-tight animate-fade-in-up animation-delay-100">
          {subheadline}
        </h2>
      </div>

      {/* Full-width hero visual */}
      <div className="w-full aspect-video bg-muted/30 border-y border-border/40 flex items-center justify-center animate-fade-in-up animation-delay-200">
        {visualUrl ? (
          <img src={visualUrl} alt={headline} className="w-full h-full object-cover" />
        ) : (
          <span className="text-muted-foreground text-sm">Hero Visual</span>
        )}
      </div>
    </section>
  )
}
