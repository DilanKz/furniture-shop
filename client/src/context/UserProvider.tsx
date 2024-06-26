import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface User {
    name: string;
    email: string;
}

interface UserContextProps {
    user: any;
    setUser: Dispatch<SetStateAction<any>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<any>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
