import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import {FiUsers} from 'react-icons/fi';
import {FaProductHunt} from 'react-icons/fa';



function Header() {
  return (
    <div className="text-white flex gap-6 justify-center items-center h-[5rem] bg-slate-600">
      <Link to={"/"}><AiOutlineHome /></Link>
      <Link to='/dashboard'><FiUsers className='cursor-pointer hover:text-red-500'/></Link>
      <Link to={"/categories"}><div>Categories</div></Link>
      <Link to={"/dashboard/products"}><FaProductHunt className='cursor-pointer hover:text-red-500'/></Link>
    </div>
  );
}

export default Header;