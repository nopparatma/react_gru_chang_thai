import React from "react";
import Image from "next/image";

type ProductItem = {
  name: string;
  image: string;
};

function ProductItem(props: ProductItem) {
  return (
    <>
      <div className="bg-green-950 h-[400px] flex">
        <div className="flex-grow relative">
          <Image
            src={props.image}
            alt="Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 w-full flex justify-center">
            <p className="text-gold-gradient p-4">Your text here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
