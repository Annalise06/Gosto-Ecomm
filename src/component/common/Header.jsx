import React, { useState, useEffect } from "react";
import { Drawer } from "antd";
import { Link } from 'react-router-dom';
import Logo from "./Logo";
import carting from "../assests/images/cart.png"
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineDelete 
} from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import { IoPersonOutline, IoHeartOutline } from "react-icons/io5";
import { navlist } from "../assests/data/data";
import { connect, useDispatch, useSelector } from "react-redux"
import { DELETE } from "../../controller/action"




const Header = () => {
  //scroll navbar
  window.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    });
  });
  
  //menubar
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  // cartopen and close
  const [cartList, setCartList] = useState(false);
  const handleClose = () => {
    setCartList(!cartList);
  };
  const items = ['Item 1', 'Item 2', 'Item 3'];
  

  // cart add in shop
  const getdata = useSelector((state) => state.cartReducer.carts);
  // console.log(getdata);

  // delete cart
  const dispatch = useDispatch();
  const delet = (id) => {
    dispatch(DELETE(id));
  };

  // total price
  const [price, setPrice] = useState(0);
  // console.log(price);

  const totals = () => {
    let price = 0;
    getdata.map((e, i) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totals()
  }, [totals]);

  // const handleCloses = () => {
  //   setCartList(null);
  // };

  return (
    <div class="header">
      <header className="fixed top-0 left-0 right-0 bg-gray-100 z-10 shadow-md">
        <Drawer
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
        >
          <div className="w-[93%] pt-6 pl-2.5 default_cursor_cs">
            <div className="flex justify-between py-2">
              <Logo />
              <div onClick={onClose}>
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="center">
            <ul>
              {navlist.map((nav, i) => (
                <li key={i}>
                  <Link to={nav.path}>{nav.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
        {/* nav */}
        <nav className="mx-4 flex justify-between md:gap-5 md:flex md:justify-between">
          <div className="md:hidden flex " onClick={showDrawer}>
            <AiOutlineMenu className="mt-4" size={25} />
          </div>

          <div className="flex lg:gap-16 md:gap-10 mx-3 py-5">
            <div>
              <Logo />
            </div>
            <div className="">
              <ul className="md:flex md:text-sm hidden gap-10 uppercase font-semibold">
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-5">
            <div className=" hidden lg:flex lg:mt-3 lg:relative px-5 mb-3 rounded-2xl bg-white">
              <input
                type="text"
                placeholder="Search products.."
                className="border-none outline-none"
              />
              <BiSearch
                className="absoloute ml-2 mt-3 text-gray-500"
                size={20}
              />
            </div>
            <IoPersonOutline className="hidden lg:flex mt-4 pt-1" size={25} />
            <IoHeartOutline className="hidden lg:flex mt-4 pt-1" size={25} />
          </div>
          <div className="mt-3 mb-3 bg-gradient-to-tr from-red-600 to-orange-400 px-4 pt-2 rounded-2xl">
            <button
              className="flex md:gap-2 gap-1 text-gray-200"
              onClick={() => setCartList(!cartList)}
            >
              <BiShoppingBag size={20} />{" "}
              <span className="md:font-semibold">My Cart</span>
              <span>({getdata.length})</span>
            </button>

            {/* showCart */}
            <div className={cartList ? "bg-white absolute mt-7 right-5 shadow-md border border-gray-200 rounded-md z-50 " : "hidden"}>
                {getdata.length ? (
                  <section className={`px-5 py-10 text-gray-500 ${getdata.length > 1 ? 'max-h-80 overflow-y-scroll scrollbar-hide' : ''}`}>
                    <div className='flex justify-between pb-2 border-b-2 border-gray-300'>
                      <h3 className="font-bold text-gray-900 font-mono text-xl">Photo</h3>
                      <p>Product Name</p>
                    </div>
                     {getdata.map((e) => ( 
                      <div className='flex gap-12 pt-5 '>
                        <div className='details_content_img'>
                          <Link to={`/cart/${e.id}`} onClick={handleClose}>
                            <img className="w-20 object-cover rounded-full" src={e.cover} alt='' />
                          </Link>
                        </div>
                        <div className='details_content_detail'>
                          <div className='details_content_detail_price'>
                            <p>{e.title.slice(0,20)} ...</p>
                            <p>Price : ${e.price}</p>
                            <p>Quantity : {e.qty}</p>
                          </div>
                        </div>
                        <div className='text-orange-500'>
                          <i onClick={() => delet(e.id)}>
                            <AiOutlineDelete className="flex mt-12 cursor-pointer" size={25} />
                          </i>
                        </div>
                      </div>
                     ))}
                    <div className='pt-5 font-bold font-mono text-xl text-gray-900'>
                      <h4>Total : ${price}</h4>
                    </div>
                  </section>
                 ) : ( 
                  <div className='hidden justify-between items-center p-5 gap-52 text-gray-400 m-g20'>
                    <p>Your cart is empty</p>
                    <img className="w-12 h-12" src={carting} alt='' />
                  </div>
                 )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
const mapStateToProps = (state) => ({
  amount: state.amount
});

connect(mapStateToProps)(Header);


export default Header;