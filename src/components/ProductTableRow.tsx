import React from 'react'
import useAuth from '../hooks/useAuth'
import { Product } from '../types/Product'

interface ProductTableRowProps {
	product: Product
	onProductNameClick: (productId: number) => void
}

export const ProductTableRow: React.FC<ProductTableRowProps> = ({
	product,
	onProductNameClick,
}) => {
	const { authenticated } = useAuth()

	return (
		<tr key={product.id}>
			<td className='px-4 py-2 text-white'>{product.id}</td>
			<td className='px-4 text-center py-2'>
				<span
					onClick={() => authenticated && onProductNameClick(product.id)}
					className={`cursor-pointer ${
						authenticated ? 'hover:text-blue-500' : ''
					}`}
				>
					{product.title}
				</span>
			</td>
			<td className='px-4 py-2 text-white'>{product.price} $</td>
			<td className='px-4 py-2 text-right'>
				<div className='flex justify-end'>
					<img src={product.image} alt={product.title} className='w-16 h-16' />
				</div>
			</td>
		</tr>
	)
}
