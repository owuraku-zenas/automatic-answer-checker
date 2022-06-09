import { createContext, useState } from "react";


const AuthContext = createContext({})


export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [ score, setScore ] = useState({})

    return (
        <AuthContext.Provider value={{auth, setAuth, score, setScore}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;