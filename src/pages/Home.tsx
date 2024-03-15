import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../components/Loader'
import { ProductTable } from '../components/ProductTable'
import useAuth from '../hooks/useAuth'
import { Product } from '../types/Product'
import { HomeState } from '../types/HomeState'



export const Home: FC = () => {
	const { authenticated } = useAuth()
	const navigate = useNavigate()
	const [state, setState] = useState<HomeState>({
		isLoading: false,
		products: [],
	})

	useEffect(() => {
		authenticated ? fetchProducts() : navigate('/auth')
	}, [])

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
				<ProductTable products={state.products} />
		)}
</div>
	)
}
