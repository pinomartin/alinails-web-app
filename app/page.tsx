"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import ImageCarousel from "@/components/image-carousel";
import LanguageWrapper from "@/components/language-wrapper";
import LanguageSelector from "@/components/language-selector";
import MobileMenu from "@/components/mobile-menu";
import BookingForm from "@/components/booking-form";
import { useTranslation } from "@/hooks/use-translation";
import LOGO from "@/public/logo.jpg";
import HERO from "@/public/img/hero/hero.jpg";
import NAIL2 from "@/public/img/nails/02.jpg";
import NAIL3 from "@/public/img/nails/03.jpg";
import NAIL4 from "@/public/img/nails/04.jpg";
import NAIL5 from "@/public/img/nails/05.jpg";
import NAIL6 from "@/public/img/nails/06.jpg";
import NAIL7 from "@/public/img/nails/07.jpg";
import NAIL8 from "@/public/img/nails/08.jpg";
import NAIL9 from "@/public/img/nails/09.jpg";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <LanguageWrapper>
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white"
      >
        Skip to main content
      </a>
      <main className="min-h-screen bg-white" role="main" id="main-content">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/34655719145?text=${encodeURIComponent(
            t("whatsapp.message")
          )}`}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
          aria-label={t("whatsapp.contact")}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />

        {/* Header with Language Selector */}
        <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden rounded-full">
                <Image
                  src={LOGO}
                  alt="Ali Nails Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-xl font-bold text-pink-400 sm:text-2xl">
                Ali Nails
              </h1>
            </div>
            <nav className="hidden md:block" role="navigation" aria-label="Main navigation">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#about"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-400"
                  >
                    {t("nav.about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-400"
                  >
                    {t("nav.services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-400"
                  >
                    {t("nav.gallery")}
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-400"
                  >
                    {t("nav.testimonials")}
                  </a>
                </li>
                <li>
                  <a
                    href="#location"
                    className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-400"
                  >
                    {t("nav.location")}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <Button
                className="hidden bg-pink-400 text-white hover:bg-pink-500 md:block"
                onClick={() => {
                  const bookingForm = document.getElementById("booking-form");
                  if (bookingForm) {
                    bookingForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("nav.bookNow")}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image
            src={HERO}
            alt="https://unsplash.com/photos/persons-hand-on-white-textile-SyCC0GQi5S4?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
            fill
            className="object-cover brightness-75"
            priority
            sizes="100vw"
          />
          <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-6xl text-white">
              {t("hero.title")}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-white">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="bg-pink-400 text-white hover:bg-pink-500"
                onClick={() => {
                  const bookingForm = document.getElementById("booking-form");
                  if (bookingForm) {
                    bookingForm.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("hero.bookAppointment")}
              </Button>
              <Button
                variant="outline"
                className="border-pink-400 text-pink-400 hover:bg-pink-50"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {t("hero.viewServices")}
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  {t("about.title")}
                </h2>
                <div className="mx-auto h-1 w-20 bg-pink-400"></div>
              </div>
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="relative h-80 w-full overflow-hidden rounded-lg md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Alicia - Professional Nail and Lash Artist with over 10 years of experience"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                    {t("about.subtitle")}
                  </h3>
                  <p className="mb-4 text-gray-600">{t("about.paragraph1")}</p>
                  <p className="mb-6 text-gray-600">{t("about.paragraph2")}</p>
                  <p className="mb-6 text-gray-600">{t("about.paragraph3")}</p>
                  <p className="mb-6 text-gray-600">{t("about.paragraph4")}</p>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-pink-400">
                        20+
                      </span>
                      <span className="text-sm text-gray-500">
                        {t("about.stats.experience")}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-pink-400">
                        5k+
                      </span>
                      <span className="text-sm text-gray-500">
                        {t("about.stats.clients")}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-pink-400">
                        10+
                      </span>
                      <span className="text-sm text-gray-500">
                        {t("about.stats.services")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Gallery Section */}
        <GallerySection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Booking Form Section */}
        <section id="booking" className="py-16 bg-pink-50 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-800">
                  {t("form.title")}
                </h2>
                <p className="mx-auto max-w-2xl text-gray-600">
                  {t("form.subtitle")}
                </p>
                <div className="mx-auto mt-4 h-1 w-20 bg-pink-400"></div>
              </div>
              <BookingForm />
            </div>
          </div>
        </section>

        {/* Location Section */}
        <LocationSection />

        {/* Footer */}
        <Footer />
      </main>
    </LanguageWrapper>
  );
}

function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.items.manicure.title"),
      description: t("services.items.manicure.description"),
      price: t("services.items.manicure.price"),
      icon: "💅",
    },
    {
      title: t("services.items.gelPolish.title"),
      description: t("services.items.gelPolish.description"),
      price: t("services.items.gelPolish.price"),
      icon: "✨",
    },
    {
      title: t("services.items.acrylicNails.title"),
      description: t("services.items.acrylicNails.description"),
      price: t("services.items.acrylicNails.price"),
      icon: "💎",
    },
    {
      title: t("services.items.eyelashExtensions.title"),
      description: t("services.items.eyelashExtensions.description"),
      price: t("services.items.eyelashExtensions.price"),
      icon: "👁️",
    },
    {
      title: t("services.items.nailRemoval.title"),
      description: t("services.items.nailRemoval.description"),
      price: t("services.items.nailRemoval.price"),
      icon: "🌟",
    },
    {
      title: t("services.items.pedicure.title"),
      description: t("services.items.pedicure.description"),
      price: t("services.items.pedicure.price"),
      icon: "🦶🏼",
    },
  ];

  return (
    <section id="services" className="bg-blue-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {t("services.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("services.subtitle")}
            </p>
            <div className="mx-auto mt-4 h-1 w-20 bg-pink-400"></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const { t } = useTranslation();

  const galleryImages = [
    NAIL2,
    NAIL3,
    NAIL4,
    NAIL5,
    NAIL6,
    NAIL7,
    NAIL8,
    NAIL9,
  ];

  return (
    <section id="gallery" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {t("gallery.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("gallery.subtitle")}
            </p>
            <div className="mx-auto mt-4 h-1 w-20 bg-pink-400"></div>
          </div>
          <ImageCarousel images={galleryImages} />
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      key: "sarah",
      name: "Sarah M.",
      text: "Alicia is amazing! My nails have never looked better. The salon is clean, modern, and so relaxing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      key: "jessica",
      name: "Jessica T.",
      text: "I've been getting my lashes done here for months. The results are always perfect and last so long!",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1683817397904-d4465651a071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
    {
      key: "emma",
      name: "Emma L.",
      text: "Best nail salon in town! The attention to detail is incredible and the staff is so friendly.",
      rating: 5,
      image: "https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww",
    },
  ];

  return (
    <section id="testimonials" className="bg-pink-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {t("testimonials.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("testimonials.subtitle")}
            </p>
            <div className="mx-auto mt-4 h-1 w-20 bg-pink-400"></div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              {t("location.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              {t("location.subtitle")}
            </p>
            <div className="mx-auto mt-4 h-1 w-20 bg-pink-400"></div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <div className="h-80 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.9576247604544!2d-5.151799224137437!3d36.42772647237425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0cdf0f57937883%3A0x2a2c25cc0c522d55!2sAv.%20Espa%C3%B1a%2C%201%2C%2029680%20Estepona%2C%20M%C3%A1laga%2C%20Spain!5e0!3m2!1sen!2s!4v1709835144335!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-2xl font-semibold text-gray-800">
                    {t("location.contactInfo")}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="mr-3 h-5 w-5 text-pink-400" />
                      <span className="text-gray-600">
                        {t("location.address")}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-3 h-5 w-5 text-pink-400" />
                      <a
                        href="tel:+34655719145"
                        className="text-gray-600 hover:text-pink-400 transition-colors"
                      >
                        {t("location.phone")}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="mr-3 h-5 w-5 text-pink-400" />
                      <a
                        href="mailto:alicianails.es@gmail.com"
                        className="text-gray-600 hover:text-pink-400 transition-colors"
                      >
                        {t("location.email")}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-3 h-5 w-5 text-pink-400" />
                      <div className="text-gray-600">
                        <p>{t("location.hours.weekdays")}</p>
                        <p>{t("location.hours.sunday")}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="mt-6 w-full bg-pink-400 text-white hover:bg-pink-500"
                    onClick={() => {
                      const bookingForm =
                        document.getElementById("booking-form");
                      if (bookingForm) {
                        bookingForm.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {t("location.bookAppointment")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-pink-400">
                Ali Nails
              </h3>
              <p className="text-gray-400">{t("footer.slogan")}</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-pink-400"
                aria-label={t("footer.instagram")}
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-pink-400"
                aria-label={t("footer.facebook")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white transition-colors hover:bg-pink-400"
                aria-label={t("footer.twitter")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Ali Nails. {t("footer.rights")}
            </p>
            <p className="text-sm text-gray-400">
             <a target="_blank" href="https://clickandfix.netlify.app">Click & Fix</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
