'use client'
import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { useEffect, useRef, useState } from "react"

export default function Home() {
   const sliderImages = [
    "/hero.png",
    "/07.jpg",
    "/04.jpg",
    "/06.jpg",
    "/03.jpg",
  ]
  const [currentSlide, setCurrentSlide] = useState(0)
  const aboutRef = useRef<HTMLDivElement>(null)

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [sliderImages.length])

  // Scroll to About section
  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative w-full h-screen ">
        <div className="absolute inset-0 z-0 transition-all duration-700">
          <Image
            src={sliderImages[currentSlide]}
            alt="Luxury Hotel"
            fill
            className="object-cover opacity-70 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>

        {/* Navigation */}
        <div className="relative z-50 flex items-center justify-between w-full px-6 py-6 md:px-12">
          <div className="text-white font-bold tracking-wider text-xl">Delos Reyes Palm Springs</div>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center text-white">
              <Phone className="w-4 h-4 mr-2" />
              <span>+183229719349</span>
            </div>
            <a
  href="https://www.booking.com/hotel/us/cambridge-inn.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKKxp3CBsACAdICJDI4YjExZTM2LTQyN2YtNDRhNy1iYzc2LWQ2MDI0YzYwZWY1MtgCBeACAQ&sid=55b6502435b2d97c4ba08b2070c38491&aid=304142&ucfs=1&arphpl=1"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-2 rounded-md font-medium transition"
>
  Book Now <ChevronRight className="w-4 h-4" />
</a>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 -mt-20">
          <h1 className="text-5xl md:text-6xl lg:text-6xl font-medium text-white max-w-4xl leading-tight">
            Enjoy a comfortable stay 
            <br/>with your family
          </h1>
          <p className="text-slate-300 mt-6 max-w-xl text-lg">Duis aute irure dolor in reprehenderit in voluptat.</p>
          <Link href="https://www.booking.com/hotel/us/cambridge-inn.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKKxp3CBsACAdICJDI4YjExZTM2LTQyN2YtNDRhNy1iYzc2LWQ2MDI0YzYwZWY1MtgCBeACAQ&sid=55b6502435b2d97c4ba08b2070c38491&aid=304142&ucfs=1&arphpl=1" target="_blank" rel="noopener noreferrer" className="mt-8">
            <Button
              className="border-white border-2 hover: bg-transparent rounded-full text-white px-8 py-3 text-lg"
            >
              BOOK NOW
            </Button>
          </Link>
          <div className="mt-12  gap-6 text-white">

            <p className="text-slate-300 mt-6 max-w-xl text-lg">
            HÔTEL DE   PREMIUM
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-white max-w-3xl leading-tight mt-6">
            "Your comfort is our main focus"
          </h2>
          </div>

          
  

          

          {/* Scroll Indicators */}
          <div className="absolute bottom-12 right-12 flex flex-col gap-4">
            <button
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 transition"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % sliderImages.length)}
              aria-label="Next Slide"
              type="button"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Scroll to About */}
            <button
              className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center text-white bg-black/30 hover:bg-black/50 transition"
              onClick={handleScrollToAbout}
              aria-label="Scroll Down"
              type="button"
            >
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">"Your comfort is our main focus"</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Experience unparalleled luxury and comfort in our meticulously designed spaces. Every detail has been
            carefully considered to ensure your stay exceeds expectations. From our world-class amenities to our
            personalized service, we create memories that last a lifetime.
          </p>
          <Link href="https://www.booking.com/hotel/us/cambridge-inn.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKKxp3CBsACAdICJDI4YjExZTM2LTQyN2YtNDRhNy1iYzc2LWQ2MDI0YzYwZWY1MtgCBeACAQ&sid=55b6502435b2d97c4ba08b2070c38491&aid=304142&ucfs=1&arphpl=1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3">Explore Rooms</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden h-64 relative">
            <Image src="/05.jpg" alt="Luxury Room" fill className="object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-64 relative mt-8">
            <Image src="/09.jpg" alt="Hotel Pool" fill className="object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-64 relative -mt-8">
            <Image src="/12.jpg" alt="Hotel Lobby" fill className="object-cover" />
          </div>
          <div className="rounded-lg overflow-hidden h-64 relative">
            <Image src="/04.jpg" alt="Hotel Spa" fill className="object-cover" />
          </div>
        </div>
      </section>
      

      {/* Facilities Section */}
      <section className="py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-800 mb-4">World-Class Facilities</h2>
      <p className="text-slate-600 text-lg max-w-2xl mx-auto">
        Indulge in our premium amenities designed to enhance your stay and create unforgettable experiences.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/03.jpg" alt="Pool" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Pool</h3>
        <p className="text-slate-600">
          Enjoy our stunning infinity pool with panoramic views and poolside service.
        </p>
      </div>

      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/08.jpg" alt="Garden" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Garden</h3>
        <p className="text-slate-600">
          Relax in our beautifully landscaped gardens, perfect for a peaceful stroll.
        </p>
      </div>

      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/05.jpg" alt="Lawn" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Lawn</h3>
        <p className="text-slate-600">
          Spacious green lawns ideal for events, gatherings, and outdoor fun.
        </p>
      </div>

      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/19.jpg" alt="Delux Bed" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Delux Bed</h3>
        <p className="text-slate-600">
          Experience ultimate comfort with our luxurious delux beds in every room.
        </p>
      </div>

      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/01.jpg" alt="Best Views" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Best Views</h3>
        <p className="text-slate-600">
          Wake up to breathtaking views from your room and around the hotel.
        </p>
      </div>

      <div className="text-center">
        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
          <Image src="/20.jpg" alt="Parking" fill className="object-cover" />
        </div>
        <h3 className="text-xl font-bold mb-2">Parking</h3>
        <p className="text-slate-600">
          Complimentary valet parking service with 24-hour security and car care.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Gallery Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience Our Hotel</h2>
            <p className="text-slate-600 text-lg">A visual journey through our luxurious spaces and amenities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/16.jpg"
                alt="Hotel Exterior"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/18.jpg"
                alt="Luxury Suite"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/22.jpg"
                alt="Restaurant Interior"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/03.jpg"
                alt="Pool Area"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/02.jpg"
                alt="Spa Treatment"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/11.jpg"
                alt="Conference Room"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/12.jpg"
                alt="Hotel Bar"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/14.jpg"
                alt="Ocean View"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">What Our Guests Say</h2>
            <p className="text-slate-600 text-lg">Hear from our satisfied guests about their exceptional experiences</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/guest-1.jpg" alt="Guest" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-slate-600 text-sm">Business Executive</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "Absolutely stunning hotel with impeccable service. The attention to detail and luxury amenities made
                  our stay unforgettable."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/guest-2.jpg" alt="Guest" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Chen</h4>
                    <p className="text-slate-600 text-sm">Travel Blogger</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "The perfect blend of luxury and comfort. Every staff member went above and beyond to ensure our
                  satisfaction."
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image src="/guest-3.jpg" alt="Guest" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold">Emma Rodriguez</h4>
                    <p className="text-slate-600 text-sm">Architect</p>
                  </div>
                </div>
                <p className="text-slate-600 italic">
                  "Beautiful architecture and design throughout. The spa treatments were divine and the dining
                  experience was exceptional."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for an Unforgettable Experience?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Book your stay now and enjoy exclusive benefits and special offers.
          </p>
          <Link href="https://www.booking.com/hotel/us/cambridge-inn.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKKxp3CBsACAdICJDI4YjExZTM2LTQyN2YtNDRhNy1iYzc2LWQ2MDI0YzYwZWY1MtgCBeACAQ&sid=55b6502435b2d97c4ba08b2070c38491&aid=304142&ucfs=1&arphpl=1" target="_blank" rel="noopener noreferrer">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              Book Now on Booking.com
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="py-12 border-b border-slate-800">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">HOTEL BOOKING</h3>
                <div className="text-slate-300">
                  <p>1277 South Palm Canyon Drive, Palm Springs, CA</p>
                  <p>Phone: +183229719349</p>
                  <p>Email: baldawa@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-6">NEWSLETTER</h3>
                <div className="flex gap-2 mb-4">
                  <Input placeholder="ENTER EMAIL" className="bg-slate-800 border-slate-700 text-white" />
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-slate-400 text-sm">Get promo codes, coupons and interesting news from us.</p>
              </div>
            </div>
          </div>

          <div className="py-8 flex flex-col md:flex-row justify-between items-center">
            

            <div className="flex items-center gap-6">
              <div className="text-sm text-slate-300">CALL +183229719349</div>
              <div className="flex gap-3">
                <Link href="#" className="text-slate-300 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-300 hover:text-white">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400">© Copyright by AllDesign-Studio - All right reserved.</div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <div className="text-xs text-slate-400 mr-4">PAYMENTS:</div>
              {["mastercard", "visa", "paypal", "apple-pay", "google-pay"].map((payment) => (
                <div key={payment} className="w-8 h-5 bg-white/10 rounded-sm flex items-center justify-center">
                  <div className="w-6 h-3 bg-white/20 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
