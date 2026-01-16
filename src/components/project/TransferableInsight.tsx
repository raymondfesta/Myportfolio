interface TransferableInsightProps {
  statement: string
  supporting: string[]
}

export function TransferableInsight({ statement, supporting }: TransferableInsightProps) {
  return (
    <section id="insight" className="py-12 lg:py-20">
      <div className="max-w-[780px] mx-auto px-6 lg:px-8">
        <h3 className="mb-8">Transferable Insight</h3>

        {/* Bold principle statement */}
        <p className="text-xl lg:text-2xl font-semibold mb-6 leading-tight">{statement}</p>

        {/* Supporting lines */}
        <div className="space-y-3">
          {supporting.map((line, index) => (
            <p key={index} className="text-muted-foreground leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
