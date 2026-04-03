import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">The Boring Edit</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professional photography services in Kolkata, India. Capturing stories, 
              one frame at a time.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:hello@theboringedit.com"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Kolkata, West Bengal, India</li>
              <li>
                <Link
                  href="mailto:hello@theboringedit.com"
                  className="hover:text-foreground transition-colors"
                >
                  hello@theboringedit.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919876543210"
                  className="hover:text-foreground transition-colors"
                >
                  +91 98765 43210
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} The Boring Edit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
