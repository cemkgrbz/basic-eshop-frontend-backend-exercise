import { useContext } from "react";
import { AppContext } from "./Context";
import axios from 'axios'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'



function CardBuyers({product}) {

	const {state, dispatchState} = useContext(AppContext)

	const handleAdd = async () => {

		if (!state.user._id) {
			alert('You must log in first')
			return
		}

		const response = await axios.post('/users/addtocart',
		{
			_id: state.user._id,
			product: product._id
		})
		console.log("🚀 ~ handleAdd ~ response", response)

		if (response.data.success) dispatchState({

			type: 'addToCart',
			payload: response.data.cart
		})
	}

	const handleAddToWishlist = async () => {

		if (!state.user._id) return alert('You must be logged in to use the wishlist feature')

		const response = await axios.post('/users/wishlist/add', {
			user: state.user._id,
			product: product._id
		})
		console.log("🚀 ~ handleWishlist ~ response", response)

		if (response.data.success) dispatchState({
			type: 'addToWishlist',
			payload: product._id
		})
	}

	const handleRemoveFromWishlist = async () => {

		if (!state.user._id) return alert('You must be logged in to use the wishlist feature')

		const response = await axios.post('/users/wishlist/delete', {
			user: state.user._id,
			product: product._id
		})
		console.log("🚀 ~ handleWishlist ~ response", response)

		if (response.data.success) dispatchState({
			type: 'deleteFromWishlist',
			payload: response.data.wishlist
		})
	}
	
    return ( 

<div className="max-w-2xl mx-auto">


	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img className="rounded-t-lg p-8" src={`/images/${product.image}`} alt="product image" />
        </a>
			<div className="px-5 pb-5">
			<div className='flex justify-between items-center mb-4'>

				<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{product.name}</h3>
				{
					state.user?.wishlist?.includes(product._id) ?

					<AiFillHeart 
						className='text-[2rem] text-red-500 
						cursor-pointer hover:text-slate-700'
						onClick={handleRemoveFromWishlist}
					/>
					:
					<AiOutlineHeart 
						className='text-[2rem] text-red-500 
						cursor-pointer hover:text-slate-700'
						onClick={handleAddToWishlist}
					/>
				}
				</div>		
				<div className="flex items-center justify-between">
					<span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}€</span>

					

					<button
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
						onClick={handleAdd}>Add
						to cart</button>
				</div>
			</div>
	</div>
</div>
     );
}

export default CardBuyers;