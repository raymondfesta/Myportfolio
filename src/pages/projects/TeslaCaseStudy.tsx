import slide1 from "@/assets/case-study-tesla-slides/1.png"
import slide2 from "@/assets/case-study-tesla-slides/2.png"
import slide3 from "@/assets/case-study-tesla-slides/3.png"
import slide4 from "@/assets/case-study-tesla-slides/4.png"
import slide5 from "@/assets/case-study-tesla-slides/5.png"
import slide6 from "@/assets/case-study-tesla-slides/6.png"
import slide7 from "@/assets/case-study-tesla-slides/7.png"
import slide8 from "@/assets/case-study-tesla-slides/8.png"
import slide9 from "@/assets/case-study-tesla-slides/9.png"
import slide10 from "@/assets/case-study-tesla-slides/10.png"
import slide11 from "@/assets/case-study-tesla-slides/11.png"
import slide12 from "@/assets/case-study-tesla-slides/12.png"
import slide13 from "@/assets/case-study-tesla-slides/13.png"
import slide14 from "@/assets/case-study-tesla-slides/14.png"
import slide15 from "@/assets/case-study-tesla-slides/15.png"
import slide16 from "@/assets/case-study-tesla-slides/16.png"
import slide17 from "@/assets/case-study-tesla-slides/17.png"
import slide18 from "@/assets/case-study-tesla-slides/18.png"
import slide19 from "@/assets/case-study-tesla-slides/19.png"
import slide20 from "@/assets/case-study-tesla-slides/20.png"
import slide21 from "@/assets/case-study-tesla-slides/21.png"
import slide22 from "@/assets/case-study-tesla-slides/22.png"
import slide23 from "@/assets/case-study-tesla-slides/23.png"
import slide24 from "@/assets/case-study-tesla-slides/24.png"

const slides = [
  slide1, slide2, slide3, slide4, slide5, slide6,
  slide7, slide8, slide9, slide10, slide11, slide12,
  slide13, slide14, slide15, slide16, slide17, slide18,
  slide19, slide20, slide21, slide22, slide23, slide24,
]

interface TeslaCaseStudyProps {
  onBack?: () => void
}

export function TeslaCaseStudy({ onBack }: TeslaCaseStudyProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <button
          onClick={onBack}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          ← Back
        </button>
      </div>
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pb-16 space-y-4">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        ))}
      </div>
    </div>
  )
}
