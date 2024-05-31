import React, { createContext, useState, useContext, useEffect } from "react";
import useFetch from "@/hooks/use-fetch";

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const { data, error, loading, success, fetchData } = useFetch();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchData('/api/userProfileData');
    }, []);

    useEffect(() => {
        if (success) {
            setUser(data);
        }
    }, [data, success]);

    return (
        <AuthContext.Provider value={{ user, error, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
