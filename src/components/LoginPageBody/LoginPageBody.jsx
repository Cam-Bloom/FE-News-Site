import "./LoginPageBody.css";
import { FiSend } from "react-icons/fi";
import { useState } from "react";


const LoginPageBody = () => {

	const [username, setUsername] = useState("");
	const [loginClassList, setLoginClassList] = useState(["LoginInput"]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username.length === 0) {
			setLoginClassList(["LoginInput", "invalid"]);
		} else {
			setLoginClassList(["LoginInput"]);
			setUsername("");
		}
	};

	return (
		<section className="LoginSection">
			<form className={loginClassList.join(" ")} onSubmit={handleSubmit}>
					<label htmlFor="comment">Enter Username</label>
					<input
						type="text"
						id="comment"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
							e.target.value.length === 0
								? setLoginClassList(["LoginInput"])
								: setLoginClassList(["activeInput", "LoginInput"]);
						}}
					/>
					<button className="commentButton">
						Login
					</button>
			</form>
		</section>
	);
};

export default LoginPageBody;
