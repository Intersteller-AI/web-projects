import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
  return (
    <div className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] border-t text-black bg-white">
      {data.map((item, index) => (
        <div key={`menu_${item.id}`} className="">
          {!!item?.subMenu ? (
            <div
              className="cursor-pointer flex flex-col relative py-4 px-5"
              onClick={() => setShowCatMenu(!showCatMenu)}
            >
              <div>
                {item.name}
                <BsChevronDown size={14} />
              </div>
              {showCatMenu && (
                <div className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                  {categories?.map(({attributes: categoriesData, id}, index) => (
                    <Link
                      key={`subMenu_${id}`}
                      href={`/category/${categoriesData?.slug}`}
                      onClick={() => {
                        setShowCatMenu(false);
                        setMobileMenu(false);
                      }}
                    >
                      <div className="py-4 px-8 border-t flex justify-between">
                        {categoriesData?.name}
                        <span className="opacity-50 text-sm">{`(${categoriesData.products.data.length})`}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="py-4 px-5 border-b">
              <Link href={item.url} onClick={() => setMobileMenu(false)}>
                {item.name}
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MobileMenu;
