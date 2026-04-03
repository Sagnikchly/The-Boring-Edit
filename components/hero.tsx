import Link from "next/link"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
          Professional Photography
        </p>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6 text-balance">
          Capturing Stories
          <br />
          <span className="text-muted-foreground">Through The Boring Edit</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
          Professional photography for portraits, events, and lifestyle moments in Kolkata, India.
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-1 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">5.0 from our clients</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#booking">Book a Session</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
