import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const AllContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={AllContext}>
              {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;