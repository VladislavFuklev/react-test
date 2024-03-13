import { Product } from './Product'

export interface TableState {
	currentPage: number
	searchTerm: string
	showDetails: boolean
	detailsProduct: Product | null
}