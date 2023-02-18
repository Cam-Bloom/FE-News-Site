import { createContext, useEffect, useState } from "react"

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [loggedInUser, setLoggedInUser] = useState({});
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
    
      
    }, [loggedInUser])
    

return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser}}>
        {props.children}
    </UserContext.Provider>
    );
}