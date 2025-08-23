"use client";

import React from "react";
import Image from "next/image";

interface Category {
  id: string;
  title: string;
  desc: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: "necklaces",
    title: "กำไร",
    desc: "necklacesPendantsDetail",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
    href: "/antique?category=necklaces",
  },
  {
    id: "rings",
    title: "สร้างคอ",
    desc: "ringsDetail",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=300&fit=crop",
    href: "/antique?category=rings",
  },
  {
    id: "accessories",
    title: "แหวน",
    desc: "accessoriesDetail",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop",
    href: "/antique?category=accessories",
  },
  {
    id: "earrings",
    title: "ปิ่น",
    desc: "earringsDetail",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop",
    href: "/antique?category=earrings",
  },
  {
    id: "pearls",
    title: "ต่างหู",
    desc: "pearlsDetail",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    href: "/antique?category=pearls",
  },
  {
    id: "accessories",
    title: "ผอบ",
    desc: "accessoriesDetail",
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=300&fit=crop",
    href: "/antique?category=accessories",
  },
];

function Categories() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.id} className="group cursor-pointer">
          <div className="relative overflow-hidden rounded-lg h-[500px]">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end p-4 transition-all duration-300 group-hover:-translate-y-16">
              <h3 className="text-white text-lg font-medium mb-2">
                {category.title}
              </h3>
              <button
                className="text-lg font-semibold text-amber-900 rounded-lg hover:scale-105 transition-all duration-300 border-2 border-transparent hidden group-hover:block group-hover:mt-8 group-hover:px-8 group-hover:py-4"
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
      ))}
    </div>
  );
}

export default Categories;
