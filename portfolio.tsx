import Image from "next/image"
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { portfolioSettings } from "./config/portfolio-settings"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Banner Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Banner Profile Photo */}
          <div className="relative w-32 h-32 mx-auto mb-8">
            <Image
              src={portfolioSettings.bannerProfileImage || "/placeholder.svg"}
              alt="Profile Photo"
              width={128}
              height={128}
              className="w-full h-full object-cover rounded-full grayscale border-2 border-gray-700"
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">{portfolioSettings.name}</h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">{portfolioSettings.title}</p>
            <div className="w-16 h-px bg-white mx-auto" />
          </div>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">{portfolioSettings.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black transition-colors bg-transparent"
            >
              View My Work
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-900 transition-colors">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Display Banner Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={portfolioSettings.displayBannerImage || "/placeholder.svg"}
              alt="Display Banner"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* About Info */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-light">About</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {portfolioSettings.aboutText.map((paragraph, index) => (
                  <p key={index} className="text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4" />
                  <span>{portfolioSettings.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>{portfolioSettings.email}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center pt-4">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href={portfolioSettings.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href={portfolioSettings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href={portfolioSettings.socialLinks.email}>
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                  asChild
                >
                  <a href={portfolioSettings.socialLinks.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-8">
              <h3 className="text-2xl font-light text-center">Skills</h3>
              <div className="grid md:grid-cols-2 gap-12 max-w-2xl mx-auto">
                <div className="space-y-4 text-center">
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Frontend</h4>
                  <div className="space-y-3 text-gray-300">
                    {portfolioSettings.skills.frontend.map((skill, index) => (
                      <div key={index} className="text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 text-center">
                  <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider">Backend</h4>
                  <div className="space-y-3 text-gray-300">
                    {portfolioSettings.skills.backend.map((skill, index) => (
                      <div key={index} className="text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            <h2 className="text-3xl font-light text-center">Selected Work</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioSettings.projects.map((project, index) => (
                <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                  <CardContent className="p-6 space-y-4">
                    <div className="aspect-video bg-gray-800 rounded-md overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 border-t border-gray-800">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-light">{portfolioSettings.contactTitle}</h2>
          <p className="text-gray-400 leading-relaxed">{portfolioSettings.contactDescription}</p>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-colors bg-transparent"
            asChild
          >
            <a href={portfolioSettings.socialLinks.email}>Get In Touch</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>{portfolioSettings.footerText}</p>
        </div>
      </footer>
    </div>
  )
}
