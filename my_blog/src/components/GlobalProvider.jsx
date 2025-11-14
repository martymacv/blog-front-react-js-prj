import { createContext, useContext, useState } from "react"

const GlobalContext = createContext();

function GlobalProvider({ children }) {
    const [accessToken, setAccessToken] = useState("");
    const [logStatus, setLogStatus] = useState("logout");

    function handleAccess(token) {
        setAccessToken(token);
    }
    function handleLogStatus(status) {
        setLogStatus(status);
    }
    return (
        <GlobalContext.Provider
            value={{
                accessToken, logStatus,
                handleAccess, handleLogStatus
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;

export function useGlobalState() {
    const context = useContext(GlobalContext);
    return context;
}