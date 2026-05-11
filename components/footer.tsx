"use client"

import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react"

const pageLinks = [
  { label: "Home", href: "#hero" },
  { label: "In Production", href: "#in-production" },
  { label: "Projects", href: "#projects" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Kmtengo", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/qurlarmah", icon: Linkedin },
  { label: "X", href: "https://x.com/qurlarmah", icon: Twitter },
  { label: "Email", href: "mailto:hello@qurlarmah.dev", icon: Mail },
]

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: "#5EEAD4" }}>
      {/* Inner masked dark card */}
      <div
        className="mx-auto max-w-[1688px] px-4 pt-4 md:px-6 md:pt-6"
      >
        <div
          className="rounded-[2rem] px-8 py-16 md:rounded-[3rem] md:px-16 md:py-24"
          style={{ backgroundColor: "#111112" }}
        >
          {/* Headline */}
          <div className="mb-16 text-center md:mb-20">
            <h2 className="font-display text-4xl font-bold md:text-6xl lg:text-7xl">
              <span style={{ color: "#F1F5F9" }}>Always </span>
              <span style={{ color: "#5EEAD4" }}>Engineering</span>
              <br />
              <span style={{ color: "#F1F5F9" }}>The Future.</span>
            </h2>
          </div>

          {/* Footer Grid: Pages / Center brand / Social */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
            {/* Pages */}
            <div className="md:col-span-3">
              <h4
                className="mb-4 font-mono text-xs font-bold uppercase"
                style={{ color: "#94A3B8", letterSpacing: "0.2em" }}
              >
                Pages
              </h4>
              <ul className="space-y-3">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm transition-colors duration-200"
                      style={{ color: "#F1F5F9" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#5EEAD4" }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#F1F5F9" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: Business Enquiries CTA */}
            <div className="flex flex-col items-center justify-center md:col-span-6">
              <a
                href="mailto:hello@qurlarmah.dev"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-bold uppercase transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundColor: "#5EEAD4",
                  color: "#111112",
                  letterSpacing: "0.05em",
                }}
              >
                Business Enquiries
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Follow On */}
            <div className="md:col-span-3">
              <h4
                className="mb-4 font-mono text-xs font-bold uppercase"
                style={{ color: "#94A3B8", letterSpacing: "0.2em" }}
              >
                Follow On
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
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#5EEAD4" }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "#F1F5F9" }}
                    >
                      <link.icon size={16} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar — on accent background */}
      <div className="mx-auto flex max-w-[1688px] flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row md:px-16">
        <p className="font-sans text-xs" style={{ color: "#111112" }}>
          &copy; {new Date().getFullYear()} Qurlarmah Moses. All rights reserved.
        </p>
        <p className="font-sans text-xs" style={{ color: "#111112" }}>
          Designed &amp; Engineered by Qurlarmah Moses
        </p>
      </div>
    </footer>
  )
}
