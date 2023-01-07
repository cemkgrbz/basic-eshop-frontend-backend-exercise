import {Link} from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
import {CiLogin} from 'react-icons/ci'
import { useContext } from 'react'
import { AppContext } from './Context'
import Logo from '../images/big-cat.png'



function HeaderUser() {

    const {state} = useContext(AppContext)

    return (  <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

    <h1 className="w-3/12">

         <Link to="/"><img src={Logo} className='w-[50px] h-[50px] object-contain' /></Link>
    </h1>


    <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active">
              <a href="">Accueil</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Produits</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Collections</a>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer">
              <a href="">Contact</a>
            </li>
        </ul>
    </nav>


    <div className="w-3/12 flex justify-end">
        <Link to='/cart'><BsCart2 className='cursor-pointer'/>
        <span>{state.user?.cart?.length}</span>
        </Link>
        <Link to='/login'><CiLogin /></Link>
    </div>
</header> );
}

export default HeaderUser;