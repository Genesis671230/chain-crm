import React from "react";
import { ShoppingBasket, Menu, Search, Copyright } from "@mui/icons-material";
import { BsBasket2 } from "react-icons/bs";
const Navbar = () => {
  return (
    <div className="flex px-6 py-4 bg-[#283848] justify-between w-full">
      <div className="flex items-center flex-col  ">
        <div className="flex justify-between gap-10 items-end">
          <div className="flex flex-col gap-2 ">
            <BsBasket2 sx={{fontSize:"30px"}} className='text-[40px] w-full'  />
          </div>
          <div>
            <Menu sx={{fontSize:"30px"}}   />
          </div>
        </div>
        <div className="w-full">

        <span className="text-xs text-start  mt-2 relative">Baskyt <span className="absolute -top-3 -right-3"><Copyright sx={{fontSize:"10px"}}/></span></span>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div>
          <Search />
        </div>
        <div className="flex items-center justify-center  rounded-full">
          <img
            src="https://source.unsplash.com/random/?sara"
            alt=""
            className="w-[40px] rounded-full h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
