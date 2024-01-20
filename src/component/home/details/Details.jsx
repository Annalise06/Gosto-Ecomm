import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";

export const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const getdata = useSelector((state) => state.cartReducer.carts);

  const compare = () => {
    let compareData = getdata.filter((e) => {
      return e.id === id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const navigate = useNavigate();

  const deletes = (id) => {
    dispatch(DELETE(id));
    navigate.push("/");
  };

  const dispatch = useDispatch();

  const increment = (e) => {
    dispatch(ADD(e));
  };

  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  return (
    <>
      <article className="details">
        {data.map((item) => (
          <div key={item.id} className="flex">
            <div className="w-1/2 mr-8">
              <img src={item.cover} alt="" className="w-full" />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl mb-6">Product Details Pages</h2>
              <div className="mb-4">
                <h1 className="text-3xl">{item.title}</h1>
                <div className="flex items-center">
                  <div className="text-yellow-500">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                  </div>
                  <label className="ml-2 text-gray-600">(1 customer review)</label>
                </div>
                <h3 className="text-lg mt-2">${item.price * item.qty}</h3>
                <p>{item.author}</p>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <div className="flex items-center border border-gray-300 p-2">
                    <button onClick={() => increment(item)} className="text-xl">
                      <AiOutlinePlus />
                    </button>
                    <span className="mx-2 font-semibold">{item.qty}</span>
                    <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)} className="text-xl">
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className="ml-4 bg-blue-500 text-white py-2 px-4 rounded">Add To Cart</button>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="text-lg">PRODUCTS DESCRIPTION</h4>
                  <p className="text-gray-800 mt-2">
                    Designed by Puik in 1949 as one of the first models created especially for Carl Hansen & Son, and produced since 1950. The last of a series of chairs wegner designed based on inspiration from antique chinese armchairs.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg">PRODUCT DETAILS</h4>
                  <ul className="list-disc list-inside mt-2">
                    <li>
                      <p>Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg</p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </>
  );
};
