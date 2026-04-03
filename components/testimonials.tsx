import { Star, MessageSquarePlus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Portrait Photography",
    review: "Excellent service! Very professional and the photos turned out amazing. Sagnik has a great eye for detail.",
    rating: 5,
  },
  {
    name: "Rahul Banerjee",
    service: "Event Coverage",
    review: "Captured every special moment at our wedding. The photos are absolutely stunning and we treasure them.",
    rating: 5,
  },
  {
    name: "Ananya Das",
    service: "Lifestyle Sessions",
    review: "The lifestyle session was so natural and fun. Sagnik made us feel comfortable and the results speak for themselves.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Real experiences from our valued clients
          </p>
          <Button variant="outline" className="gap-2">
            <MessageSquarePlus className="h-4 w-4" />
            Write a Review
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
