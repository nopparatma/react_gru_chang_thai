import React from "react";

type ProductItem = {
  name: string;
  image: string;
};

function ProductItem(props: ProductItem) {
  return (
    <>
      <div className="bg-green-950 h-[400px] flex">
        <div className="flex-grow relative">
          <img
            src={props.image}
            alt="Image"
            className="w-full h-full object-cover"
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
