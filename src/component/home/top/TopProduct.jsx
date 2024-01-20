import React, { useState } from "react";
import { topProducts } from "../../assests/data/data";
import Heading from "../../common/Heading";
import ProductItem from "../Product/ProductItem";

const TopProduct = () => {
  const [data, setData] = useState(topProducts);
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [category, setCategory] = useState(allCategories);

  // // console.log(setData, "cartItems")
  // // console.log(setCategory)
  // // console.log(allCategories)

  const handleFilter = (category) => {
    const newItem = topProducts.filter((item) => item.category === category);
    setData(newItem);

    if (category === "all") {
      setData(topProducts);
      return;
    }
  };

  return (
    <>
      <section className="mt-20">
        <div className="">
          <div className="lg:flex lg:mx-20 text-center">
            <div className="lg:w-1/2 lg:text-left text-center lg:mx-0 mx-[20px] text-sm lg:text-normal">
              <Heading
                title="Top Selling Products"
                desc="Meet our newbies! The latest templates uploaded to the marketplace."
              />
            </div>

            <div className="lg:flex lg:justify-between flex justify-center flex-wrap lg:w-1/2 w-full grid-cols-2 top-0 mt-7 mb-3">
              {category.map((category) => (
                <button
                  className="bg-gradient-to-tr from-red-600 to-orange-400 hover:bg-gradient-to-tr hover:from-red-600 shadow-sm hover:shadow-none shadow-slate-600
                   hover:to-orange-500 lg:px-5 px-3 mx-1 mb-3 rounded-2xl py-1 lg:text-base text-xs text-slate-200"
                  onClick={() => handleFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <ProductItem data={data} />
        </div>
      </section>
    </>
  );
};

export default TopProduct;
