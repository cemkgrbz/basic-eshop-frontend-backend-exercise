import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import {FiUsers, FiLogOut} from 'react-icons/fi';
import {FaProductHunt} from 'react-icons/fa';
import { useContext } from 'react';
import { AppContext } from './Context';



function Header() {

  const {dispatchState} = useContext(AppContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatchState({
            type: 'logout'
        })

        navigate('/login')
    }

  return (
    <div className="text-white flex gap-6 justify-center items-center h-[5rem] bg-slate-600">
      <Link to={"/"}><AiOutlineHome /></Link>
      <Link to='/dashboard'><FiUsers className='cursor-pointer hover:text-red-500'/></Link>
      <Link to={"/categories"}><div>Categories</div></Link>
      <Link to={"/dashboard/products"}><FaProductHunt className='cursor-pointer hover:text-red-500'/></Link>
      <FiLogOut 
            className='cursor-pointer hover:text-red-500'
            onClick={handleLogout}    
        />
    </div>
  );
}

export default Header;