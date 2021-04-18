import React, { useState } from "react";
import { Redirect } from "react-router-dom";

export const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	let myStorage = window.sessionStorage;

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			username: username,
			password: password
		};

		// fetch de LOGIN
		fetch("https://3000-harlequin-quail-6c3y17o5.ws-us03.gitpod.io/login/", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(result => {
				console.log(result.access_token);
				// añadir token a session
				sessionStorage.setItem("my_token", result.access_token);
				setAuth(true);
				console.log(myStorage);
				// let token = sessionStorage.getItem("my_token")
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputUsername1" className="form-label">
						Username
					</label>
					<input
						onChange={e => setUsername(e.target.value)}
						type="text"
						className="form-control"
						id="exampleInputUsername1"
						aria-describedby="usernamelHelp"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			{auth ? <Redirect to="/" /> : null}
		</div>
	);
};
