import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import Loader from '../components/Loader'
import { ProductTable } from '../components/ProductTable'
import useAuth from '../hooks/useAuth'
import { Product } from '../types/Product'

interface HomeState {
	isLoading: boolean
	products: Product[]
}

export const Home: FC = () => {
	const { authenticated, user } = useAuth()
	const [state, setState] = useState<HomeState>({
		isLoading: false,
		products: [],
	})

	useEffect(() => {
		console.log(user);
		
    if (authenticated) {
        fetchProducts();
    }
}, [authenticated]);

	const fetchProducts = async () => {
		try {
			setState({ ...state, isLoading: true })
			const response = await axios.get<Product[]>(
				'https://fakestoreapi.com/products'
			)
			setState({ isLoading: false, products: response.data })
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			{state.isLoading ? (
				<Loader />
			) : (
				<>
					{state.products.length > 0 || authenticated ? (
						<ProductTable products={state.products} />
					) : (
						<p>Необходима авторизация</p>
					)}
				</>
			)}
		</div>
	)
}
