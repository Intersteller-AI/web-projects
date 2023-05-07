import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Wrapper, CartItem } from "@/components";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/utils/api";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = useMemo(() => {
    return cartItems.reduce((total, val) => {
      return total + val.attributes.price;
    }, 0);
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest("/api/orders", {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.stripeSession.id,
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length > 0 && (
          <>
            {/* heading */}
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] font-semibold leading-tight">
                Shoping Cart
              </div>
            </div>
            {/* cart content */}
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* cart items */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems?.map((item, index) => (
                  <CartItem key={`cartitem_${index}`} data={item} />
                ))}
              </div>
              {/* summary */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-sm md:text-lg font-semibold text-black">
                      Subtotal
                    </div>
                    <div className="text-sm md:text-[16px] font-semibold text-black">
                      &#8377; {subTotal}
                    </div>
                  </div>
                  <div className="text-sm py-5 border-t mt-5">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>

                {/* BUTTON START */}
                <button
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                  onClick={handlePayment}
                >
                  {loading ? <img width={'20px'} height={'20px'} src={"/assets/loader2.svg"} alt="loader" /> : "Checkout"}
                </button>
                {/* BUTTON END */}
              </div>
            </div>
            {/* cart ended */}
          </>
        )}

        {cartItems.length < 1 && (
          <>
            {/* Empty cart content */}
            <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
              <Image
                src="/assets/empty-cart.jpg"
                width={500}
                height={500}
                alt="empty-cart"
                className="w-[300px] md:w-[400px]"
              />
              <span className="text-xl font-bold">your cart is empty</span>
              <span className="text-center mt-4">
                Looks like you have not added anything in your cart.
                <br />
                Go ahead and explore top categories.
              </span>
              <Link
                className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 mt-8 hover:opacity-75"
                href="/"
              >
                Continue Shopping
              </Link>
            </div>
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default Cart;
