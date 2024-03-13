import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Product } from '../types/Product'
import { TableState } from '../types/TableState'
import Pagination from './Pagination'
import { ProductTableHeader } from './ProductTableHeader'
import { ProductTableRow } from './ProductTableRow'
import { SearchInput } from './SearchInput'

interface ProductTableProps {
	products: Product[]
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
	const [state, setState] = useState<TableState>({
		currentPage: 0,
		searchTerm: '',
		showDetails: false,
		detailsProduct: null,
	})
	const itemsPerPage = 5
	const navigate = useNavigate()

	const handlePageChange = (selectedPage: { selected: number }) => {
		setState(prevState => ({
			...prevState,
			currentPage: selectedPage.selected,
		}))
	}

	const handleSearchTermChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const { value } = event.target
		setState(prevState => ({
			...prevState,
			searchTerm: value,
			currentPage: 0,
		}))
	}

	const fetchProductDetails = async (productId: number) => {
		navigate(`product/${productId}`)
	}

	const handleProductNameClick = (productId: number) => {
		fetchProductDetails(productId)
	}

	const filteredProducts = products.filter(product =>
		product.title.toLowerCase().includes(state.searchTerm.toLowerCase())
	)

	const offset = state.currentPage * itemsPerPage
	const currentPageData = filteredProducts.slice(offset, offset + itemsPerPage)

	return (
		<div className='bg-slate-800 px-4 py-3 mt-4 rounded-md'>
			{!state.showDetails && (
				<SearchInput
					searchTerm={state.searchTerm}
					onSearchTermChange={handleSearchTermChange}
				/>
			)}

			<table className='w-full'>
				<ProductTableHeader />

				<tbody>
					{currentPageData.map((product: Product) => (
						<ProductTableRow
							key={product.id}
							product={product}
							onProductNameClick={handleProductNameClick}
						/>
					))}
				</tbody>
			</table>

			<Pagination
				pageCount={Math.ceil(filteredProducts.length / itemsPerPage)}
				onPageChange={handlePageChange}
			/>
		</div>
	)
}
