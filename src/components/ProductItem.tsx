import React from "react";
import Image from "next/image";

type ProductItem = {
  name: string;
  imageUrl: string;
};

function ProductItem(props: ProductItem) {
  return (
    <>
      <div className=" h-[400px] flex">
        <div className="flex-grow relative">
          <div className="w-full h-full flex flex-col pb-5">
            <div className="h-full relative">
              <Image
                src={props.imageUrl}
                alt="Image"
                layout="fill"
                objectFit="cover"
                className="border-gold-gradient"
              />
            </div>
          </div>
          <div className="absolute bottom-0 w-full flex justify-center px-4">
            <p className="button-gold-gradient w-full text-center">
              {props.name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
