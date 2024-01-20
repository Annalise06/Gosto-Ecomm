import React, { useState } from "react";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";
 

Modal.setAppElement("#root");

const ProductItem = ({ data }) => {
  
  const dispatch = useDispatch();

    const addToCart = (e) => {
      dispatch(ADD(e))
    }
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    console.log(image, "img");
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

 

  return (
    <>
      <div className="justify-center lg:grid lg:grid-cols-4 lg:gap-8 md:flex md:flex-wrap md:gap-7 grid grid-cols-2 gap-3 lg:mx-20 md:justify-center mt-10 mx-5">
        {data.map((items) => (
          <div className="cursor-pointer" key={items.id}>
            <div className="relative lg:w-[270px] md:w-[200px] w-[150px] ">
              <img
                className="relative rounded-xl"
                src={items.cover}
                alt="products"
              />
              <div className="absolute flex justify-center w-[100%] opacity-0 top-3 lg:mt-44 mt-24 ease-in duration-300 translate-y-0 hover:opacity-100 hover:easye-in hover:duration-300 hover:-translate-y-1/3">
                <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                  <FiShoppingBag size={20} onClick={() => addToCart(items)} />
                </button>
                <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                  <AiOutlineHeart size={20} />
                </button>
                <button className="m-2 hover:bg-orange-400 hover:text-white p-2 rounded-full bg-white">
                  <FiSearch size={20} onClick={() => openModal(items.cover)} />
                </button>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-semibold text-sm">{items.title}</h3>
              <p className="text-sm italic text-gray-400">{items.author}</p>
              <h4 className="font-semibold">Price: ${items.price}</h4>
            </div>
          </div>
        ))}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="rounded-lg p-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          overlayClassName="bg-black opacity-95 fixed top-0 left-0 w-full h-full mt-7"
        >
          <button
            className="absolute top-1 right-1 hover:bg-red-500 focus:bg-red-600 bg-white rounded-full font-extrabold "
            onClick={closeModal}
          >
            <AiOutlineClose className="text-black p-1 hover:text-white" size={30} />
          </button>
          <img className="w-[500px] rounded-lg" src={selectedImage} alt="product" />
        </Modal>
      </div>
    </>
  );
};

export default ProductItem;
