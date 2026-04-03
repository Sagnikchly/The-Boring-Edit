import Link from "next/link"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Meet Sagnik Chandra
            </h2>
          </div>

          <div className="prose prose-lg mx-auto text-center text-muted-foreground">
            <p className="mb-6">
              With over 5 years of experience in professional photography, I specialize 
              in creating timeless images that tell your unique story. My approach combines 
              artistic vision with technical expertise to deliver photographs that you&apos;ll 
              treasure for a lifetime.
            </p>
            <p className="mb-6">
              Based in Kolkata, India, I&apos;ve had the privilege of capturing countless 
              moments - from intimate portraits to grand celebrations. Each project is an 
              opportunity to connect with people and preserve their stories through my lens.
            </p>
            <p className="mb-8">
              At The Boring Edit, we believe that every photograph should evoke emotion 
              and capture the essence of the moment. Whether it&apos;s a personal portrait, 
              a special event, or lifestyle photography, we&apos;re dedicated to delivering 
              exceptional quality and service.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                5+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-serif font-medium text-foreground">
                500+
              </p>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center border-t pt-12">
            <h3 className="text-2xl md:text-3xl font-serif font-medium mb-4">
              From Moments to Memories
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Let&apos;s create something beautiful together. Book your photography session 
              today and preserve your special moments forever.
            </p>
            <Button size="lg" asChild>
              <Link href="#booking">Book Your Shoot Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
