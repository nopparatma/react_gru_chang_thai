"use client";
import { useEffect, useState } from "react";
import ProductItem from "@/components/ProductItem";
import { ourBestSellers, ourBestSellersDetail } from "@/constants/constants";
import { mockContentItems } from "@/mocks/mock";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

export default function Products() {
  const t = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!isHovered && !isScrolling) {
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isHovered, isScrolling]);

  useEffect(() => {
    if (!api) return;

    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    api.on("scroll", handleScroll);

    return () => {
      api.off("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [api]);

  return (
    <div className="my-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-4 mb-12">
        <p className="text-4xl text-gold-gradient font-bold">
          {t(ourBestSellers)}
        </p>
        <p className="text-white text-center">{t(ourBestSellersDetail)}</p>
      </div>

      <div
        className="w-full px-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {mockContentItems.map((item, index) => (
              <CarouselItem
                key={index}
                className="basis-2/3 md:basis-1/3 lg:basis-1/5"
              >
                <ProductItem {...item} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
