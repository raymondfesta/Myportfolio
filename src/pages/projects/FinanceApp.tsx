import { useState } from "react"
import { Lightbox } from "@/components/ui/lightbox"
import welcomeScreen from "@/assets/1_weclomeScreen.png"
import allocationDetails from "@/assets/3.1_allocation-details-ai.png"
import myPlan from "@/assets/4_my_plan.png"

interface FinanceAppProps {
  onBack?: () => void
}

export function FinanceApp({}: FinanceAppProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const images = [
    { src: welcomeScreen, alt: "Welcome Screen" },
    { src: allocationDetails, alt: "Allocation Details with AI" },
    { src: myPlan, alt: "My Plan" },
  ]

  return (
    <div className="fixed inset-0 top-16 overflow-y-scroll">
      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col items-center justify-center py-16 gap-12"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2FBF9C",
        }}
      >
        {/* Images */}
        <div className="max-w-7xl w-full px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 animate-fade-in-up">
            {images.map((image, index) => (
              <div
                key={index}
                className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
                onClick={() => setLightboxSrc(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-h-[50vh] md:max-h-[60vh] w-auto object-contain rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="max-w-[750px] w-full px-6 flex flex-col gap-2 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            AI-Powered Money Management Platform
          </h2>
          <p className="text-white/80 leading-relaxed">
            Native iOS app providing automated wealth management for professionals earning $150-200K. Full-stack design and development: SwiftUI interface, financial allocation algorithm, banking integration, and comprehensive design system.
          </p>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 border-t border-border/40">
        <div className="w-full px-6 lg:px-8 flex justify-center">
          <p className="text-muted-foreground">
            Full case study coming soon.
          </p>
        </div>
      </section>

      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
