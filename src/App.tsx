declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

import { useState, useEffect, useCallback } from "react"
import { Routes, Route, useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { User, Eye, ShieldCheck, RefreshCw, Check, Menu } from "lucide-react"
import { ProjectShowcase } from "./components/ProjectShowcase"
import { Button } from "./components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "./components/ui/popover"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "./components/ui/sheet"
import { TemplateCaseStudy } from "./pages/TemplateCaseStudy"
import { AiAnalyticsTool } from "./pages/projects/AiAnalyticsTool"
import { DataModelBuilder } from "./pages/projects/DataModelBuilder"
import { TeslaCaseStudy } from "./pages/projects/TeslaCaseStudy"
import { FinanceApp } from "./pages/projects/FinanceApp"
import "./App.css"

type Section = "work" | "about" | "services" | "contact"

function App() {
  const [activeSection, setActiveSection] = useState<Section>("work")
  const navigate = useNavigate()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const isProjectPage = location.pathname.startsWith("/projects")
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme")
    return saved === "dark"
  })
  const [contactPopoverOpen, setContactPopoverOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleContactClick = useCallback(() => {
    navigator.clipboard.writeText("raymond.festa2020@gmail.com")
    setContactPopoverOpen(true)
    setTimeout(() => setContactPopoverOpen(false), 2000)
  }, [])

  // Read section from URL params on home page
  useEffect(() => {
    if (!isProjectPage) {
      const section = searchParams.get("section") as Section | null
      if (section && ["work", "about", "services", "contact"].includes(section)) {
        setActiveSection(section)
      }
    }
  }, [searchParams, isProjectPage])

  // Apply dark mode class to document
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      root.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [isDark])

  // Reset scroll on route change (instant, no animation)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [location.pathname])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleNavClick = (section: Section) => {
    if (isProjectPage) {
      navigate(`/?section=${section}`)
    } else if (section === "work" || section === "about") {
      scrollToSection(section)
    } else {
      setActiveSection(section)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo / Name */}
              <button
                onClick={() => navigate("/")}
                className="text-base font-semibold tracking-tight hover:opacity-60 transition-opacity"
              >
                RF Design
              </button>

              {/* Desktop Navigation & Theme Toggle */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 hover:opacity-60 transition-opacity rounded-md"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  )}
                </button>

                <div className="h-4 w-px bg-border/60"></div>
                <button
                  onClick={() => handleNavClick("work")}
                  className={`text-sm font-medium transition-opacity ${
                    activeSection === "work" && !isProjectPage ? "text-foreground" : "text-muted-foreground hover:opacity-70"
                  }`}
                >
                  Work
                </button>
                <button
                  onClick={() => handleNavClick("about")}
                  className={`text-sm font-medium transition-opacity ${
                    activeSection === "about" && !isProjectPage ? "text-foreground" : "text-muted-foreground hover:opacity-70"
                  }`}
                >
                  About
                </button>
                <Popover open={contactPopoverOpen} onOpenChange={setContactPopoverOpen}>
                  <PopoverTrigger asChild>
                    <button
                      onClick={handleContactClick}
                      className="text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity"
                    >
                      Contact
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto px-3 py-2">
                    <p className="text-sm text-green-600 flex items-center gap-1.5">
                      <Check className="h-4 w-4" />
                      Email copied to clipboard
                    </p>
                  </PopoverContent>
                </Popover>
                <a
                  href="https://www.linkedin.com/in/raymondcfesta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:opacity-70 transition-opacity"
                >
                  LinkedIn
                </a>
              </div>

              {/* Mobile Navigation */}
              <div className="flex md:hidden items-center gap-2">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 hover:opacity-60 transition-opacity rounded-md"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m4.93 4.93 1.41 1.41" />
                      <path d="m17.66 17.66 1.41 1.41" />
                      <path d="M2 12h2" />
                      <path d="M20 12h2" />
                      <path d="m6.34 17.66-1.41 1.41" />
                      <path d="m19.07 4.93-1.41 1.41" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                    </svg>
                  )}
                </button>
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <button
                      className="p-2 hover:opacity-60 transition-opacity rounded-md"
                      aria-label="Open menu"
                    >
                      <Menu className="h-5 w-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:w-[320px] p-0">
                    <SheetHeader className="px-6 pt-6 pb-4 border-b border-border/40">
                      <SheetTitle className="text-left text-lg font-semibold tracking-tight">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col px-6 py-6">
                      <button
                        onClick={() => {
                          handleNavClick("work")
                          setMobileMenuOpen(false)
                        }}
                        className="py-4 text-lg font-medium text-left hover:opacity-60 transition-opacity border-b border-border/40"
                      >
                        Work
                      </button>
                      <button
                        onClick={() => {
                          handleNavClick("about")
                          setMobileMenuOpen(false)
                        }}
                        className="py-4 text-lg font-medium text-left hover:opacity-60 transition-opacity border-b border-border/40"
                      >
                        About
                      </button>
                      <button
                        onClick={() => {
                          handleContactClick()
                          setMobileMenuOpen(false)
                        }}
                        className="py-4 text-lg font-medium text-left hover:opacity-60 transition-opacity border-b border-border/40"
                      >
                        Contact
                      </button>
                      <a
                        href="https://www.linkedin.com/in/raymondcfesta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 text-lg font-medium hover:opacity-60 transition-opacity"
                      >
                        LinkedIn
                      </a>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </nav>
        </header>

      {/* Main Content */}
      <main className={`flex-1 ${isProjectPage ? "" : "pt-16"}`}>
        <Routes>
          <Route path="/projects/ai-analytics-tool" element={<AiAnalyticsTool onBack={() => navigate("/")} />} />
          <Route path="/projects/data-model-builder" element={<DataModelBuilder onBack={() => navigate("/")} />} />
          <Route path="/projects/tesla-case-study" element={<TeslaCaseStudy onBack={() => navigate("/")} />} />
          <Route path="/projects/finance-app" element={<FinanceApp onBack={() => navigate("/")} />} />
          <Route path="/projects/:id" element={<TemplateCaseStudy onBack={() => navigate("/")} />} />
          <Route path="/" element={
            <>
              {/* Hero Section */}
            <section className="flex items-center justify-center min-h-[100vh]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-7xl mx-auto">
            <h1 className="text-9x1 mb-8 animate-fade-in-up">
              I design how intelligent systems think with humans.
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Product designer focused on human-AI interaction, decision systems, and making complex technology usable, trustworthy, and effective.
            </p>
            <div className="flex gap-4 animate-fade-in-up animation-delay-300">
              <Button size="lg" onClick={() => scrollToSection("work")}>View Work</Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.Calendly?.initPopupWidget({ url: "https://calendly.com/raymond-festa/30min" })}
              >
                Schedule a call
              </Button>
            </div>
            </div>
          </div>
        </section>

        {/* Design Principles Section */}
        <section className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <h2 className="text-center mb-12 animate-fade-in-up">How I Design Intelligent Systems</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-minimal bg-secondary animate-fade-in-up animation-delay-100">
              <User className="text-primary mb-4" size={24} />
              <h5 className="mb-2">Design for Human Judgment</h5>
              <p className="text-muted-foreground text-sm">
                I design intelligent systems to support human reasoning, not replace it. AI should narrow ambiguity, surface insight, and leave final decisions in human hands.
              </p>
            </div>
            <div className="card-minimal bg-secondary animate-fade-in-up animation-delay-200">
              <Eye className="text-primary mb-4" size={24} />
              <h5 className="mb-2">Make System Thinking Visible</h5>
              <p className="text-muted-foreground text-sm">
                People trust systems they can understand. I design interfaces that reveal how outcomes are produced, so users can reason with the system rather than blindly accept results.
              </p>
            </div>
            <div className="card-minimal bg-secondary animate-fade-in-up animation-delay-300">
              <ShieldCheck className="text-primary mb-4" size={24} />
              <h5 className="mb-2">Constrain Intelligence Deliberately</h5>
              <p className="text-muted-foreground text-sm">
                Unbounded intelligence erodes trust. I treat constraints, limits, and fallbacks as core design tools that make AI systems reliable in real-world use.
              </p>
            </div>
            <div className="card-minimal bg-secondary animate-fade-in-up animation-delay-400">
              <RefreshCw className="text-primary mb-4" size={24} />
              <h5 className="mb-2">Design for Iteration</h5>
              <p className="text-muted-foreground text-sm">
                People discover what they need through interaction. I design systems that support exploration, feedback, and refinement instead of requiring perfect questions upfront.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
          <div className="mb-12 animate-fade-in-up">
            <h2 className="mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of recent projects showcasing thoughtful design solutions
              and creative problem-solving.
            </p>
          </div>
          <ProjectShowcase onProjectClick={(id) => {
                if (id === "1") navigate("/projects/ai-analytics-tool")
                else if (id === "2") navigate("/projects/data-model-builder")
                else if (id === "3") navigate("/projects/tesla-case-study")
                else if (id === "7") navigate("/projects/finance-app")
                else navigate(`/projects/${id}`)
              }} limit={4} />
        </section>

        {/* About Me Section */}
        <section id="about" className="min-h-screen flex flex-col justify-center bg-secondary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-[280px_1fr] gap-12 lg:gap-24 animate-fade-in-up">
              <div>
                <h2 className="mb-3">About Me</h2>
                <div className="w-12 h-1 bg-primary rounded-full"></div>
              </div>
              <div className="space-y-6">
                <h3>
                  I design intelligent systems that help people make better decisions.
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-none">
                  My work focuses on products where complexity is unavoidable and outcomes matter, especially at the intersection of AI, data, and human judgment. Rather than simplifying problems away, I design interfaces and systems that make complexity understandable, navigable, and trustworthy.
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-none">
                  I work across system architecture, interaction design, and engineering collaboration to shape how software reasons and how people stay in control of it.
                </p>
                <Button
                  className="mt-2"
                  onClick={() => window.Calendly?.initPopupWidget({ url: "https://calendly.com/raymond-festa/30min" })}
                >
                  Let's connect
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        {activeSection === "about" && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-3xl animate-fade-in-up">
              <h2 className="mb-8">About</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I specialize in making technical systems intuitive without losing their power. My focus areas include complex enterprise applications, data platforms and analytical tools, and operational systems.
                </p>
                <p>
                  I work across the full product scope: system architecture, APIs, interface design, prototyping, and engineering collaboration.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
            <div className="max-w-3xl animate-fade-in-up">
              <h2 className="mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Interested in working together? Let's connect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.Calendly?.initPopupWidget({ url: "https://calendly.com/raymond-festa/30min" })}
                    className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
                  >
                    Schedule a call
                  </button>
                  <a
                    href="https://www.linkedin.com/in/raymondcfesta/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
            </>
          } />
        </Routes>
      </main>

    </div>
  )
}

export default App
