import React from 'react';
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";


const SearchItems = ({ product, value, onSearch }) => {

   const dispatch = useDispatch();
   const addToCart = (e) => {
     dispatch(ADD(e));
   };

  return (
    <>
      {" "}
      <section className="p-0 lg:mx-10">
        <div className="grid grid-cols-3 mt-6 bg-white rounded-3xl w-[100%] pl-28">
          {product
            .filter((items) => {
              const searchkey = value.toLowerCase();
              const title = items.title.toLowerCase();

              return (
                searchkey && title.startsWith(searchkey) && title !== searchkey
              );
            })
            .slice(0, 10)
            .map((items) => (
              <div className="cursor-pointer pt-10" key={items.id}>
                <div className="relative lg:w-[270px] md:w-[200px] w-[150px] ">
                  <img
                    className="relative rounded-xl"
                    src={items.cover}
                    alt="products"
                  />
                  <div className="absolute flex justify-center w-[100%] opacity-0 top-3 mt-44 ease-in duration-300 translate-y-0 hover:opacity-100 hover:ease-in hover:duration-300 hover:-translate-y-1/3">
                    <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                      <FiShoppingBag size={20} />
                    </button>
                    <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                      <AiOutlineHeart size={20} />
                    </button>
                    <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                      <FiSearch size={20} />
                    </button>
                  </div>
                </div>
                <div className="w-[70%]">
                  <h3 className="font-semibold text-sm">{items.title}</h3>
                  <p className="text-sm italic text-gray-400">{items.author}</p>
                  <h4 className="font-semibold">Price: ${items.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default SearchItems;