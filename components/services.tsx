import Link from "next/link"
import { Camera, Calendar, Heart, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Camera,
    title: "Portrait Photography",
    description: "Capture your personality with professional portrait sessions. Perfect for personal branding, family photos, and professional headshots.",
    priceKolkata: "2,999",
    priceOutside: "3,499",
    features: [
      "Professional lighting",
      "Multiple poses",
      "Edited high-res images",
      "Personal consultation",
    ],
  },
  {
    icon: Calendar,
    title: "Event Coverage",
    description: "Comprehensive coverage of your special events. From weddings to corporate events, we capture every moment that matters.",
    priceKolkata: "7,999",
    priceOutside: "9,999",
    features: [
      "Full event coverage",
      "Candid moments",
      "Group photos",
      "Same-day highlights",
    ],
  },
  {
    icon: Heart,
    title: "Lifestyle Sessions",
    description: "Tell your story through authentic lifestyle photography. Capturing genuine moments in natural settings.",
    priceKolkata: "7,999",
    priceOutside: "9,999",
    features: [
      "Natural settings",
      "Authentic moments",
      "Story-driven approach",
      "Lifestyle consultation",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            What We Offer
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional photography services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="relative overflow-hidden">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription className="text-sm">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold">
                      &#8377;{service.priceKolkata}
                    </span>
                    <span className="text-sm text-muted-foreground">(Kolkata)</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    &#8377;{service.priceOutside} outside Kolkata
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full" asChild>
                  <Link href="#booking">Book Now</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
