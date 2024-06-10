// AuthContext.js
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadTokenFromCookies } from '../store/authSlice';

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTokenFromCookies());
    }, [dispatch]);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
