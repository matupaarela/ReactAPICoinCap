import { createContext } from "react";

const UserContext = createContext()

const UserContextProvier = ({ children }) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvier }