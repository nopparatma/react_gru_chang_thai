"use client";
import ProductItem from "@/components/ProductItem";
import { ourBestSellers, ourBestSellersDetail } from "@/constants/constants";
import { mockContentItems } from "@/mocks/mock";
import { useTranslations } from "next-intl";

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
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-4">
          {mockContentItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-[280px]">
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
          ))}
        </div>
      </div>
    </div>
  );
}
