import { FC } from 'react'
import { FaHome, FaSignOutAlt } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Header: FC = () => {
	const { authenticated, setAuthenticated } = useAuth()
	const navigate = useNavigate()

	const handleAuth = () => {
		setAuthenticated(false)
		navigate('/')
	}

	return (
		<header className='flex items-center  p-4 shadow-sm bg-slate-800'>
			<Link to='/'>
				<FaHome size={20} />
			</Link>

			{authenticated && (
				<nav className='ml-auto mr-10'>
					<ul className='flex items-center gap-5 '>
						<li>
							<NavLink
								to={'/'}
								className={({ isActive }) =>
									isActive ? 'text-white' : 'text-white/50'
								}
							>
								Home
							</NavLink>
						</li>
					</ul>
				</nav>
			)}

			{authenticated ? (
				<button className='button bg-red-900' onClick={handleAuth}>
					<span>Вихід</span>
					<FaSignOutAlt />
				</button>
			) : (
				<Link
					to={'/auth'}
					className='py-2 text-white/50 hover:text-white ml-auto'
				>
					{''}
				</Link>
			)}
		</header>
	)
}
