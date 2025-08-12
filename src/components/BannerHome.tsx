"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/BannerHome.css";

function BannerHome() {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef<any>(null);
  const images = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSlideChange = () => {
    // Add 'zoom-started' class to all slides that have been active
    if (swiperRef.current) {
      const slides = swiperRef.current.querySelectorAll(".swiper-slide");
      slides.forEach((slide: HTMLElement) => {
        const img = slide.querySelector("img");
        if (
          img &&
          (slide.classList.contains("swiper-slide-active") ||
            slide.classList.contains("swiper-slide-prev"))
        ) {
          img.classList.add("zoom-started");
        }
      });
    }
  };

  if (!mounted) {
    return <div className="h-screen"></div>;
  }

  return (
    <div
      className="h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #DEB887 75%, #F5DEB3 100%)",
      }}
    >
      {/* Background Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionStart={handleSlideChange}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="relative"
            style={{
              background:
                "linear-gradient(135deg, #8B4513 0%, #A0522D 25%, #CD853F 50%, #DEB887 75%, #F5DEB3 100%)",
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority={index === 0}
              sizes="100vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-transparent sm:bg-gradient-to-r sm:from-black/80 sm:via-black/0 sm:to-transparent z-40" />

      {/* Content Container */}
      <div
        className="absolute inset-0 h-full flex items-center justify-center sm:justify-start px-4 sm:px-8 lg:px-16"
        style={{ zIndex: 50 }}
      >
        {/* Content */}
        <div className="flex-1 max-w-2xl text-center sm:text-left">
          {/* Category Label */}
          <div className="mb-6">
            <span
              className="text-sm sm:text-base text-white font-medium tracking-wider uppercase"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              LUXURY NECKLACE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-8">
            <div
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-2 text-white"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              GRUCHANGTHAI
            </div>
            <div
              className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-white"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Anique
            </div>
          </h1>

          {/* Description */}
          <p
            className="text-white text-lg sm:text-xl mb-8 leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
          >
            Gold Jewelry
            <br />
            The Perfect Jewels For You.
          </p>

          {/* CTA Button */}
          <button
            className="px-8 py-4 text-lg font-semibold text-amber-900 rounded-lg hover:scale-105 transition-all duration-300 border-2 border-transparent"
            style={{
              background:
                "linear-gradient(135deg, #FFE55C 0%, #FFD700 25%, #DAA520 50%, #FFD700 75%, #FFEC8C 100%)",
              animation: "borderGlow 2s ease-in-out infinite",
              zIndex: 60,
            }}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
