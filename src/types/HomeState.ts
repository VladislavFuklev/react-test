import { Product } from './Product'

export interface HomeState {
	isLoading: boolean
	products: Product[]
}