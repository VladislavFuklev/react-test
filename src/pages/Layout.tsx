import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

interface ContextType {
    isLogin: boolean;
}

const MyContext = React.createContext<ContextType>({ isLogin: false });

export const Layout: FC = () => {
    const contextValue: ContextType = {
        isLogin: false
    };

    return (
        <MyContext.Provider value={contextValue}>
            <div className='min-h-screen bg-slate-900 text-white pb-20'>
                <div>
                    <Header />
                </div>
                <div className='container'>
                    <Outlet />
                </div>
            </div>
        </MyContext.Provider>
    );
};
