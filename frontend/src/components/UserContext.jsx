import React, {createContext, useState, useContext} from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = (userData) => {
        setUser(userData)
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = { user, login, logout }

    console.log('Context Value:', contextValue)

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    return useContext(UserContext)
}

export { UserProvider, useUserContext }
