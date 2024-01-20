import React, {useState} from 'react';
import { BiSearch } from 'react-icons/bi';
import SearchItems from './SearchItems';
import { products } from '../../assests/data/data';


const Hero = () => {

  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) =>{
    setValue(key);
    console.log("serach", key);
  }

  return (
    <div className="mx-5">
      <section
        className="mx-auto md:pt-44 pt-36 text-center relative"
        style={{
          backgroundImage: "url(/bg-dot.png)",
        }}
      >
        <h1 className="text-xl md:text-4xl font-medium ">
          Over <span className="text-orange-500">6500</span> Curated Design{" "}
          <br /> Resources,{" "}
          <span className="text-orange-500">Graphic & Website </span>Templates
        </h1>

        <p className="text-sm text-gray-400 mt-5">
          High-quality Design Themes for personal or commercial use contains 6k+
          items in 100 categories.
        </p>

        <div className="flex justify-center">
          <div className="flex justify-center items-center bg-white shadow-lg mt-8 md:py-3 py-1 px-3 rounded-full text-sm">
            <span className="relative md:text-base text-xs after:w-[1.5px] md:after:h-[25px] after:h-[18px] after:bg-gray-400 after:content-[''] after:absolute after:top-0 after:ml-2">
              All Categories
            </span>{" "}
            <input
              type="text"
              placeholder="Search Products.."
              className="md:ml-6 ml-2 lg:w-[600px] md:w-[500px] w-[200px] px-2 py-2 outline-none rounded-2xl"
              onChange={onChange}
              value={value}
            />
            <button onClick={() => onSearch(value)} className="md:bg-gray-200 md:p-2 md:focus:bg-gray-300 rounded-full">
              <BiSearch size={25} className="md:text-gray-800" />
            </button>
          </div>
        </div>
        <SearchItems product={products} value={value} onSearch={onSearch} />
        <p className="text-gray-500 text-sm mt-7">
          Examples: Mockup, PSD, Theme Design, Image…
        </p>
      </section>
    </div>
  );
}

export default Hero;