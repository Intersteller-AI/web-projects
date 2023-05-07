import React from "react";
import { Wrapper, ProductDetailsCarousal, RelatedProducts } from "@/components";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchFromApi } from "@/utils/api";
import { getDiscount } from "@/utils/helper";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SizeSelector = ({ size, unavailable = false, onClick, classes }) => (
  <div
    onClick={onClick}
    className={`border rounded-md text-center py-3 font-medium ${
      unavailable
        ? "cursor-not-allowed bg-black/[0.1] opacity-50"
        : "hover:border-black cursor-pointer"
    } ${classes}`}
  >
    {size}
  </div>
);

const ProductDetails = ({ product, products }) => {
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);

  const productDetails = product?.data?.[0].attributes;

  const notify = () => {
    toast.success("Successfully added to your cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row px-10 gap-[50px] lg:gap-[100px]">
          {/* left */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousal images={productDetails?.images} />
          </div>
          {/* right */}
          <div className="flex-[1] py-3">
            {/* Product Title */}
            <div className="text-[30px] font-semibold mb-2">
              {productDetails.name}
            </div>
            {/* Product Subtitle */}
            <div className="text-lg font-semibold mb-5">
              {productDetails.subtitle}
            </div>
            {/* Product Price */}
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : &#8377;{productDetails?.price}
              </p>
              {productDetails.original_price && (
                <>
                  <p className="text-base  font-medium line-through">
                    &#8377;{productDetails.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscount(
                      productDetails.original_price,
                      productDetails.price
                    )}
                    % off
                  </p>
                </>
              )}
            </div>
            <div className="text-sm font-medium text-black/[0.5]">
              Incl. of taxes
            </div>
            <div className="text-sm font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              {/* Heading */}
              <div className="flex justify-between mb-2">
                <div className="text-sm font-medium text-black/[0.5]">
                  Select Size
                </div>
                <div className="text-sm font-medium text-black/[0.5]">
                  Select Guides
                </div>
              </div>
              {/* SIZE SELECTION */}
              <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                {productDetails.size.data.map((sizeAtt, index) => (
                  <SizeSelector
                    key={`size_${index}`}
                    size={sizeAtt.size}
                    unavailable={!sizeAtt.enabled}
                    onClick={() => {
                      if (sizeAtt.enabled) {
                        setSelectedSize(sizeAtt.size);
                        setShowError(false);
                      }
                    }}
                    classes={`${
                      selectedSize === sizeAtt.size ? "border-black" : ""
                    }`}
                  />
                ))}
              </div>
              {showError && (
                <div className="text-red-600 my-3">
                  Size selection is required
                </div>
              )}
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 md:mt-6"
                onClick={() => {
                  if (!selectedSize) {
                    setShowError(true);
                    document.getElementById("sizesGrid").scrollIntoView({
                      block: "center",
                      behavior: "smooth",
                    });
                  } else {
                    dispatch(
                      addToCart({
                        ...product?.data?.[0],
                        selectedSize,
                        oneQuantityPrice: productDetails.price,
                      })
                    );
                    notify();
                  }
                }}
              >
                Add to Cart
              </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <ReactMarkdown>{productDetails.description}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchFromApi("/api/products?populate=*");

  const paths = products.data.map((product) => ({
    params: {
      slug: product.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params: { slug } }) {
  const product = await fetchFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
