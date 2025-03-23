"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Import images for the carousel
import Screenshot826 from "/public/Screenshot (826).png";
import Screenshot827 from "/public/Screenshot (827).png";
import Screenshot831 from "/public/Screenshot (828).png";
import Screenshot832 from "/public/Screenshot (829).png";
import Screenshot833 from "/public/Screenshot (830).png";
import Screenshot834 from "/public/Screenshot (826).png";

// Slide data with images & descriptions
const slides = [
  {
    image: Screenshot826,
    title: "Business Growth Strategies",
    description: "Unlock your company's full potential with data-driven insights and strategic planning.",
  },
  {
    image: Screenshot827,
    title: "Industry 4.0 Transformation",
    description: "Embrace digital transformation with AI, IoT, and cloud technologies to stay ahead in manufacturing.",
  },
  {
    image: Screenshot831,
    title: "Automotive Innovations",
    description: "Discover the latest trends in automotive engineering and sustainable vehicle design.",
  },
  {
    image: Screenshot832,
    title: "Heavy Machinery Solutions",
    description: "Enhance efficiency and safety in industrial heavy machinery operations with cutting-edge technology.",
  },
  {
    image: Screenshot833,
    title: "Aerospace Engineering",
    description: "Revolutionizing aerospace with next-gen materials and AI-powered simulations.",
  },
  {
    image: Screenshot834,
    title: "Smart Manufacturing",
    description: "Leverage automation and robotics to optimize production processes and reduce costs.",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      {/* Full-width Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
        spaceBetween={0}
        slidesPerView={1}
        className="absolute inset-0 w-full h-full z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover w-full h-full"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex flex-col items-start justify-center text-center px-6">
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-6">{slide.description}</p>
              <Link href="#" className="btn-primary flex items-center">
                Discover more <ArrowRight className="h-6 w-5 ml-2" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
