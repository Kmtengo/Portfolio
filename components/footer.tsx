"use client"

import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com", icon: Twitter },
  { label: "Email", href: "mailto:hello@qurlarmah.dev", icon: Mail },
]

const navLinks = [
  { label: "In Production", href: "#in-production" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Community", href: "#community" },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-20 md:py-28"
      style={{ backgroundColor: "#111112" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* CTA */}
          <div className="md:col-span-7">
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{ color: "#F1F5F9" }}
            >
              Let&apos;s build
              <br />
              <span style={{ color: "#5EEAD4" }}>something great.</span>
            </h2>
            <p
              className="font-sans text-lg max-w-md mb-8"
              style={{ color: "#94A3B8" }}
            >
              Open to collaborations, consulting, and new engineering
              challenges. Let&apos;s connect.
            </p>
            <a
              href="mailto:hello@qurlarmah.dev"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-display font-medium text-sm tracking-wide transition-all duration-200"
              style={{
                backgroundColor: "#008080",
                color: "#F1F5F9",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#5EEAD4"
                e.currentTarget.style.color = "#111112"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#008080"
                e.currentTarget.style.color = "#F1F5F9"
              }}
            >
              Get In Touch
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4
              className="font-display text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: "#F1F5F9" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#5EEAD4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F1F5F9")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <h4
              className="font-display text-xs font-bold uppercase tracking-wider mb-4"
              style={{ color: "#94A3B8" }}
            >
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-sans text-sm transition-colors duration-200"
                    style={{ color: "#F1F5F9" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#5EEAD4")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F1F5F9")
                    }
                  >
                    <link.icon size={16} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{ backgroundColor: "#008080" }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs" style={{ color: "#94A3B8" }}>
            &copy; {new Date().getFullYear()} Qurlarmah Moses. All rights
            reserved.
          </p>
          <p
            className="font-sans text-xs"
            style={{ color: "#94A3B8" }}
          >
            Designed &amp; Engineered by Qurlarmah Moses
          </p>
        </div>
      </div>
    </footer>
  )
}
