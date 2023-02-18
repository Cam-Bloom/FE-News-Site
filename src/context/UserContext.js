import { createContext, useEffect, useState } from "react";
import { fetchUserByUserId } from "../utils";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [loggedInUser, setLoggedInUser] = useState();
	const [userDetails, setUserDetails] = useState({});

	useEffect(() => {
		if (loggedInUser) {
			fetchUserByUserId(loggedInUser).then((res) => {
				setUserDetails(res.data.user);
			});
		}
	}, [loggedInUser]);

	return (
		<UserContext.Provider value={{ loggedInUser, setLoggedInUser, userDetails }}>
			{props.children}
		</UserContext.Provider>
	);
};
