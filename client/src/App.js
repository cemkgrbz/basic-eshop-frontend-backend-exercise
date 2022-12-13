import React from "react";
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";

function App() {
  return (
    <div className="text-white flex gap-6 justify-center items-center h-[5rem] bg-slate-600">
      <Link to={"/"}><AiOutlineHome /></Link>
      <Link to={"/login"}><div>Login</div></Link>
      <Link to={"/register"}><div>Register</div></Link>
    </div>
  );
}

export default App;
