import { FC } from 'react'
import { FaHome, FaSignOutAlt } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export const Header: FC = () => {
	const { authenticated, setAuthenticated } = useAuth()
	const navigate = useNavigate()

	const handleAuth = () => {
		setAuthenticated(false)
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
				<button className='button bg-blue-900 ml-auto'>
					<Link to={'/auth'}><span>Вхід</span></Link>
				</button>
			)}
		</header>
	)
}
