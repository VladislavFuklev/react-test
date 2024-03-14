import { Link } from 'react-router-dom'

export const ErrorPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center gap-10 bg-slate-900 text-white'>
			<p>Error page</p>

			<Link to={'/'}>
				{' '}
				<button className='btn flex gap-5 items-center bg-red-900 p-2 rounded mr-2'>
					Назад
				</button>
			</Link>
		</div>
	)
}
