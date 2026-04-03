"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = ["All", "Portrait", "Events", "Lifestyle"]

const portfolioItems = [
  {
    category: "Portrait",
    title: "Elegant woman posing in a dark jacket",
    image: "/portfolio/portrait-1.jpg",
  },
  {
    category: "Portrait",
    title: "Moody portrait of a woman surrounded by lush ferns",
    image: "/portfolio/portrait-2.jpg",
  },
  {
    category: "Events",
    title: "Couple dancing tango in a ballroom",
    image: "/portfolio/event-1.jpg",
  },
  {
    category: "Events",
    title: "Elegant lavender gown at an event",
    image: "/portfolio/event-2.jpg",
  },
  {
    category: "Lifestyle",
    title: "Reflection of a yellow taxi in rainy Kolkata",
    image: "/portfolio/lifestyle-1.jpg",
  },
  {
    category: "Lifestyle",
    title: "Yellow taxis and bustling street in Kolkata",
    image: "/portfolio/lifestyle-2.jpg",
  },
]

interface PortfolioProps {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function Portfolio({ activeFilter, setActiveFilter }: PortfolioProps) {
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of captured moments
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg bg-muted"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs rounded-full mb-2">
                  {item.category}
                </span>
                <p className="text-white text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
