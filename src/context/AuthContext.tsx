import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types/User'



interface AuthContextType {
    user: User | null;
    authenticated: boolean;
    setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    authenticated: false,
    setAuthenticated: () => {},
    setUser: () => {},
});

interface AuthProviderProps {
    children?: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ user, authenticated, setAuthenticated, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};
