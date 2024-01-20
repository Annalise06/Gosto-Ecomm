import React from "react";
import { price } from "../../assests/data/data";
import Heading from "../../common/Heading";

const Price = () => {
  return (
    <>
      <section className="bg-[#0a2b52] text-white py-16 lg:mt-28 mt-20">
        <div className="flex justify-center text-center leading-8 tracking-wider">
          <Heading
            title="Choose The Plans"
            desc="Meet our newbies! The latest templates uploaded to the marketplace."
          />
        </div>

        <div className="lg:grid lg:grid-cols-3 gap-7 max-w-[80%] m-auto mt-5">
          {price.map((item) => (
            <div
              className="p-10 mb-5 lg:mb-0 rounded-xl bg-[#0a2b52] hover:bg-[#0a2b59] relative overflow-hidden even:before:content-[attr(before)] before:bg-[#bd3f99] before:px-10 before:top-4 before:absolute before:left-[170px] lg:before:left-[210px] before:mt-1 before:font-medium before:uppercase before:transform before:rotate-[35deg]"
              key={item.id}
              before="Popular"
            >
              <h3 className="text-2xl">{item.name}</h3>
              <h1 className="text-4xl">
                <span className="relative text-sm top-[-1.5em]">$</span>
                {item.price}
                <label className="text-sm text-gray-400" htmlFor="">
                  /user per month
                </label>
              </h1>
              <p className="text-gray-400 pt-3 text-sm pb-7">{item.desc}</p>
              <button className="bg-gradient-to-tr from-red-600 to-orange-400 hover:bg-gradient-to-tr hover:from-red-600 to hover:to-orange-500 py-2 px-10 rounded-3xl text-slate-200 shadow-sm hover:shadow-none shadow-slate-600">
                GET STARTED
              </button>

              <ul className="pt-10">
                {item.list.map((lists) => (
                  <li className="flex pb-5 gap-2">
                    <i className="pt-1">{lists.icon}</i>
                    <span>{lists.para}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Price;
