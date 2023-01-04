import {MdDeleteForever} from 'react-icons/md'
import {FiEdit} from 'react-icons/fi';
import { Link } from 'react-router-dom';


function ProductCardAdmin({product, handleDelete}) {

    
    return ( 
        <div className="flex items-center justify-center p-4 gap-4">        
            <span>{product.name}</span>
            <span>{product.price}</span> 
        <img className='w-[50px] h-[50px] rounded-full object-cover'
         src={`/images/${product.image}`} alt=""/>
            <MdDeleteForever className='hover:text-red-500 hover:cursor-pointer'
                onClick={() => handleDelete(product._id)}
                />
                <Link to={'/dashboard/products/edit/' + product._id}>
                    <FiEdit 
                        className='hover:text-red-500 hover:cursor-pointer'
                    />
                </Link>
                </div>
     );
}

export default ProductCardAdmin;