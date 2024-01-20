import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { customer } from "../../assests/data/data";
import Heading from "../../common/Heading";

const Testimonial = () => {
  return (
    <>
      <section className="md:px-20 px-5 py-32">
        <div className="flex justify-center text-center">
          <Heading
            title="Choose The Plans"
            desc="Meet our newbies! The latest templates uploaded to the marketplace."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {customer.map((items) => (
            <div className="mt-16 relative" key={items.id}>
              <div className="flex justify-center">
                <button className="absolute w-14 h-14 rounded-full bg-white text-blue-700 flex justify-center pt-5 shadow-lg shadow-gray-400 top-[-2.5em] hover:transition hover:ease-in-out hover:duration-700 hover:bg-orange-400 hover:text-white">
                  <ImQuotesRight />
                </button>
              </div>

              <div className="bg-white px-8 pt-10 pb-5 text-center rounded-lg shadow-md shadow-gray-200">
                <p className="italic">"{items.desc}"</p>
                <h3 className="text-lg font-semibold py-3">{items.name}</h3>
                <span>{items.post}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonial;
