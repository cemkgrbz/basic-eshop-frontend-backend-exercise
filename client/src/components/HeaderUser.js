import {Link} from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
import {CiLogin} from 'react-icons/ci'
import { useContext } from 'react'
import { AppContext } from './Context'
import Logo from '../images/big-cat.png'



function HeaderUser() {

    const {state} = useContext(AppContext)

    return (  <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 mt-[20px] min-w-[80%]">

    <h1 className="w-3/12">

         <Link to="/"><img src={Logo} className='w-[50px] h-[50px] object-contain' /></Link>
    </h1>


    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">

            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
            <Link to='/'>Products</Link>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              Categories
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              Contact
            </li>
        </ul>
    </nav>


    <div className="w-3/12 flex justify-end gap-5 items-center">
        <Link to='/cart'><BsCart2 className="text-[2rem] hover:text-green-500 duration-200 cursor-pointer"/>
        <span>{state.user?.cart?.length}</span>
        </Link>
        <Link to='/login'><CiLogin className="text-[2rem] hover:text-green-500 duration-200 cursor-pointer"/></Link>
    </div>
</header> );
}

export default HeaderUser;