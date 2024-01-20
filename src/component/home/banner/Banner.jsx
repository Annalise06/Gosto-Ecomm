import React from "react";
import { banner } from "../../assests/data/data";

const Banner = () => {
  return (
    <>
      <section className="pt-14">
        <div className="lg:grid lg:grid-cols-2 lg:mx-20 mx-5 lg:gap-10">
          {banner.map((items) => (
            <div className="post" key={items.id}>
              <div className="relative">
                <div className="mb-4 lg:mb-0">
                  <img src={items.cover} alt="" />
                </div>
                <div className="absolute top-0 text-sm left-0 lg:pt-5 pt-2 pl-5 w-[100%] h-[100%] lg:text-xl font-semibold text-gray-100 lg:leading-8 tracking-widest">
                  <h2 className="">{items.title1}</h2>
                  <h2 className="">{items.title2}</h2>
                  <p className="lg:text-sm text-xs font-normal text-gray-200 lg:pt-4 pt-2">{items.desc}</p>
                  <button className="text-xs bg-red-400 hover:bg-red-500 lg:mt-6 px-7 lg:py-2 py-1 rounded-2xl mt-2">SHOP NOW</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Banner;
