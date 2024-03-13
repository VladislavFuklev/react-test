import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

const useAuth = () => {
    const { authenticated, setAuthenticated } = useContext(AuthContext);
    return { authenticated, setAuthenticated };
};

export default useAuth;
