"use client";
import ProductItem from "@/components/ProductItem";
import { ourBestSellers, ourBestSellersDetail } from "@/constants/constants";
import { mockContentItems } from "@/mocks/mock";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Products() {
  const t = useTranslations();

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 mb-12">
        <p className="text-4xl text-gold-gradient font-bold">
          {t(ourBestSellers)}
        </p>
        <p className="text-white text-center">{t(ourBestSellersDetail)}</p>
      </div>

      <div className="w-full px-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={20}
          centeredSlides={false}
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          allowTouchMove={false}
          effect="slide"
          grabCursor={false}
          className="w-full products-swiper"
        >
          {mockContentItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="w-[280px]">
                <ProductItem
                  name={item.name}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  price={item.price}
                  originalPrice={item.originalPrice}
                  rating={item.rating}
                  reviewCount={item.reviewCount}
                  discount={item.discount}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
