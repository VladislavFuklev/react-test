import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '../pages/Layout'
import { Home } from '../pages/Home'
import { ErrorPage } from '../pages/ErrorPage'
import { Auth } from '../pages/Auth'
import { ProductsDetail } from '../components/ProductsDetail'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'auth',
				element: <Auth />,
			},
			{
				path: 'product/:id',
				element: <ProductsDetail />,
			},
			
		],
	},
])
