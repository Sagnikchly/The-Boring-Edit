"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { BookingForm } from "@/components/booking-form"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All")

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Portfolio activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <BookingForm />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
