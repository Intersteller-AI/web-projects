import { Hero, ProductCard, Wrapper } from "@/components";
import { fetchFromApi } from "@/utils/api";

export default function Home({ products }) {
  // console.log(`this is client side`);
  // console.log(products?.data);

  return (
    <main>
      <Hero />
      {/* Heading and Paragraph */}
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 leading-tight font-semibold">
            Cusioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended streching of
            running.
          </div>
        </div>
        {/* products cards section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data.map((product, index) => (
            <ProductCard key={`procard_${product?.id}`} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  // console.log("this is server side");

  const products = await fetchFromApi("/api/products?populate=*");

  return {
    props: {
      products,
    }, // will be passed to the page component as props
  };
}
