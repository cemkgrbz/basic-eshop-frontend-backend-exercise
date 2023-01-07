import { useContext } from "react";
import { AppContext } from "./Context";
import axios from 'axios'


function CardBuyers({product}) {

	const {state, dispatchState} = useContext(AppContext)

	const handleAdd = async () => {

		if (!state.user._id) {
			alert('You must log in!')
			return
		}

		const response = await axios.post('/users/addtocart', 
		{
			_id: state.user._id,
			product: product
		}) 

		console.log("add to cart response", response)

		if (response.data.success) dispatchState({

			type: 'addToCart',
			payload: product
		})
	}

    return ( 

<div className="max-w-2xl mx-auto">


	<div className="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
		<a href="#">
			<img className="rounded-t-lg p-8" src={`/images/${product.image}`} alt="product image" />
        </a>
			<div className="px-5 pb-5">
				<a href="#">
					<h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{product.name}</h3>
				</a>
				
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