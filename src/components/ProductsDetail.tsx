import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Product } from '../types/Product'
import Loader from './Loader'

export const ProductsDetail = () => {
	const { id } = useParams()
	const [details, setDetails] = useState<Product | null>(null)
	const [isLoad, setIsload] = useState<boolean>(true)
	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get<Product>(
					`https://fakestoreapi.com/products/${id}`
				)
				setDetails(response.data)
				setIsload(false)
			} catch (error) {
				console.log(error)
			}
		}
		fetchProduct()

		return () => {}
	}, [id])
	return (
		<div>
			<Link to={'/'} className='text-blue-500 hover:underline'>
				Назад
			</Link>

			{isLoad ? (
				<div>
					<Loader />
				</div>
			) : (
				<div className='mt-5'>
					<h2 className='text-2xl font-bold mb-2'>{details?.title}</h2>
					<p className='mb-4'>{details?.description}</p>
					<p className='mb-2'>Price: ${details?.price}</p>
					<p className='mb-2'>Category: {details?.category}</p>
					<img
						src={details?.image}
						alt={details?.title}
						className='w-64 rounded-lg shadow-md'
					/>
				</div>
			)}
		</div>
	)
}
