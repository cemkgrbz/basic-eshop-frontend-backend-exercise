import { useContext } from 'react';
import {MdDeleteForever} from 'react-icons/md'
import { AppContext } from './Context';
import axios from 'axios';

function CartCard({product}) {

    const {state, dispatchState} = useContext(AppContext)

    const handleDelete = async (productId) => {

        const response = await axios.post('/users/removefromcart', {
            _id: state.user._id,
            productId
        })
        console.log("🚀 ~ file: CartCard.js:16 ~ handleDelete ~ response", response)

        if (response.data.success) {
            dispatchState(
                {
                    type: "deleteFromCart",
                    payload: response.data.cart
                }
            )
        }
    }

    
    return ( 
        <div className="flex items-center justify-center p-4 gap-4">        
            <span>{product.name}</span>
            <span>{product.price}</span> 
        <img className='w-[50px] h-[50px] rounded-full object-cover'
         src={`/images/${product.image}`} alt=""/>
            <MdDeleteForever className='hover:text-red-500 hover:cursor-pointer'
                onClick={() => handleDelete(product._id)}
                />

                </div>
     );
}

export default CartCard;