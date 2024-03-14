import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const useAuth = () => {
	const { user, setUser, authenticated, setAuthenticated } =
		useContext(AuthContext)
	return { user, setUser, authenticated, setAuthenticated }
}

export default useAuth
