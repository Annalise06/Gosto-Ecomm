import React from "react";
import { blog } from "../../assests/data/data";
import Heading from "../../common/Heading";

const Blog = () => {
  return (
    <>
      <section className="md:pb-10 mb-16 px-5">
        <div className="flex justify-center text-center font-semibold tracking-wider leading-8">
          <Heading
            title="LATEST BLOG POSTS"
            desc="Latest marketplace news, Success stories, and tutorials"
          />
        </div>

        <div className="grid grid-col-1 md:grid-cols-3 gap-7 md:mx-5 font-bold">
          {blog.slice(0, 3).map((items) => (
            <div className="pt-10" key={items.id}>
              <div className="relative">
                <div className="relative w-[100%] h-[100%]">
                  <img className="rounded-xl" src={items.cover} alt="" />
                </div>

                <div className="bg-black/50 z-[5] absolute top-0 left-0 w-[100%] h-[100%] px-7 pt-8 rounded-xl">
                  <button className="bg-gradient-to-tr from-red-600 to-orange-400 hover:bg-gradient-to-tr hover:from-red-600 shadow-sm hover:shadow-none shadow-slate-600 hover:to-orange-500 px-5 text-white py-1 rounded-2xl">
                    {items.category}
                  </button>
                  <p className="text-gray-300 text-sm pt-10 md:mt-20">
                    Post Date :{" "}
                    <span className="text-orange-400"> {items.date}</span>
                  </p>
                  <h3 className="text-white text-lg pt-2">{items.title.slice(0,35)}...</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
