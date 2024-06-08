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
            placeholder="empty"
            src={props.image}
            alt="Image"
            width={400}
            height={400}
            className="object-cover w-full h-full brightness-50"
          />
          <div className="absolute bottom-0 w-full flex justify-center">
            <p className="text-gold-gradient p-4">Product Code: {props.name}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
