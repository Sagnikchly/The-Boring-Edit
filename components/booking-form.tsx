"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    location: "",
    details: "",
  })

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                Book Now
              </p>
              <CardTitle className="text-3xl md:text-4xl font-serif font-medium">
                Reserve Your Session
              </CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24 hours
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Service Category *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="portrait">Portrait Photography</SelectItem>
                      <SelectItem value="event">Event Coverage</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle Sessions</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="service" value={formData.service || ""} />
                </div>

                <div className="space-y-2">
                  <Label>Location Type *</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(value) =>
                      setFormData({ ...formData, location: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="kolkata">Within Kolkata</SelectItem>
                      <SelectItem value="outside">Outside Kolkata</SelectItem>
                    </SelectContent>
                  </Select>
                  <input type="hidden" name="location" value={formData.location || ""} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Additional Details</Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Tell us more about your project..."
                    rows={4}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Book Now
                </Button>

              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
