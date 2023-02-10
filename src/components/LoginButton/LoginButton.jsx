import { RiUser3Line } from "react-icons/ri";

import "./LoginButton.css";

const LoginButton = () => {
	return (
		<div className="loginButton">
			<RiUser3Line className="loginIcon" />
			<p className="loginText">Login</p>
		</div>
	);
};

export default LoginButton;
