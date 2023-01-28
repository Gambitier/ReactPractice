import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import axios from 'axios';
interface ILogin {
	email: string;
	password: string;
}
function App() {
	const [login, setLogin] = useState<ILogin>({
		email: '',
		password: '',
	});

	const [responseData, setResponseData] = useState<any>({});

	const onchangeLogin = (e: any) => {
		if (e.target.name == 'email') {
			console.log(e.target.value);
			setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		} else {
			// alert('Please enter valid email');
		}
		if (e.target.name == 'password' && e.target.value !== '') {
			setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		}
	};
	const callGetApi = () => {
		const config = {
			headers: {
				Authorization: `Bearer ${localStorage.token}`,
			},
		};
		axios
			.get(`https://5b50-52-39-39-191.ngrok.io/v1/application/list`, config)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	const createLoginAccount = () => {
		let payload = {
			emailId: login.email,
			password: login.password,
		};

		axios
			.post(
				`https://5b50-52-39-39-191.ngrok.io/v1/authentication/login`,
				payload
			)
			.then((res: any) => {
				localStorage.setItem('token', res?.data?.data?.authtoken);
				console.log(localStorage.token);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="App">
			<label id="icon" htmlFor="name">
				Email : <i className="fas fa-envelope"></i>
			</label>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Please enter your email"
				required
				onChange={(e: any) => onchangeLogin(e)}
			/>
			<br></br>
			<label id="icon" htmlFor="name">
				Password : <i className="fas fa-unlock-alt"></i>
			</label>
			<input
				type="password"
				name="password"
				id="name"
				placeholder="Password"
				required
				onChange={(e: any) => onchangeLogin(e)}
			/>
			<br></br>
			<button
				type="submit"
				className="registerbtn"
				onClick={createLoginAccount}
			>
				Register
			</button>
			<button type="submit" className="registerbtn" onClick={callGetApi}>
				CallGetApi
			</button>
		</div>
	);
}

export default App;
