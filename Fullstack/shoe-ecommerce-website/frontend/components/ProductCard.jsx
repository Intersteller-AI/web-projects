import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { getDiscount } from "@/utils/helper";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineCheck } from "react-icons/ai";

const ProductCard = ({ data: { attributes: productData, id } }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="transform relative overflow-hidden flex items-start bg-white duration-200 hover:scale-105 cursor-pointer">
      {/* <div className="w-full flex justify-end items-start p-4 absolute top-0 left-0 "> */}
      <button
        className={`${
          liked ? "wishlist-remove" : "wishlist-info"
        } absolute top-0 right-0 p-4 m-4 rounded-full ${
          liked ? "bg-green-400" : "bg-rose-500"
        } text-white text-lg flex items-center justify-center`}
        onClick={() => {
          setLiked(liked ? false : true);
        }}
      >
        {liked ? <AiOutlineCheck size={20} /> : <IoMdHeartEmpty size={20} />}
      </button>
      {/* </div> */}
      <Link href={`/product/${productData?.slug}`}>
        <Image
          width={500}
          height={500}
          src={productData?.thumbnail?.data.attributes.url}
          alt={productData?.name}
          priority
          className=""
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-semibold">{productData?.name}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 font-semibold">&#8377;{productData?.price}</p>
            {productData.original_price && (
              <>
                <p className="text-base font-medium line-through">
                  &#8377; {productData?.original_price}
                </p>
                <p className="ml-auto text-base font-medium text-green-500">
                  {getDiscount(productData.original_price, productData.price)}%
                  off
                </p>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
