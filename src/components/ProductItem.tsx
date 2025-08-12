import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

type ProductItem = {
  name: string;
  imageUrl: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
};

function ProductItem(props: ProductItem) {
  const t = useTranslations();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <div className="h-[450px] mb-4 rounded-lg shadow-lg overflow-hidden relative">
        {props.discount && (
          <div className="absolute top-3 left-3 z-10 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
            {props.discount}%
          </div>
        )}

        <div className="relative h-64">
          <Image
            src={props.imageUrl}
            alt={props.name}
            fill
            className="object-cover "
          />
        </div>

        <div className="p-4 flex flex-col justify-between h-[186px] text-center">
          <div>
            <p className="text-xs text-white uppercase tracking-wider mb-1">
              {t(props.category)}
            </p>
            <h3 className="text-sm font-medium text-white mb-2 line-clamp-2">
              {props.name}
            </h3>
            <div className="flex items-center justify-center mb-3">
              <div className="flex mr-2">{renderStars(props.rating)}</div>
              <span className="text-xs text-white">
                ({props.reviewCount} Reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white">
                {props.price} ฿
              </span>
              {props.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {props.originalPrice} ฿
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
