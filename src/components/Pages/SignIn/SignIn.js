import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'
import PageTitle from '../../Shared/PageTitle';
import { GoogleLogin, useGoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { api } from '../../../urlConfig';
import { toast } from 'react-toastify';



const SignIn = () => {


	const navigate = useNavigate()
	const [isSignedIn, setIsSignedIn] = useState(false);

	const clientId = '625485533795-l18f07it1fdssjfhqoeenq788vpgq1q1.apps.googleusercontent.com'

	const responseGoogle = (response) => {
		const email = response?.profileObj?.email;
		const username = response?.profileObj?.name
		const sortName = response?.profileObj?.givenName
		const image = response?.profileObj?.imageUrl
		const userData = { email, username }
		const setAuth = { e: email, u: username, s: sortName, url: image, };

		if (response?.profileObj?.email) {
			setTimeout(() => {
				fetch(`${api}/create-user`, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(userData)
				})
					.then(res => res.json())
					.then(data => {
						if (data.status) {
							localStorage.setItem("activeToken", data.activeToken);
							setIsSignedIn(true)
						}
					})
					.catch(error => {
						navigate("/login")
					})
				localStorage.setItem("Auth_credentials", JSON.stringify(setAuth));
			}, 100)
		} else {
			navigate("/login")
			toast.error("login Failed")
		}
	}

	useEffect(() => {
		function start() {
			gapi.client.init({
				clientId: clientId,
				scope: ""
			})
		};
		gapi.load('client:auth2', start)
	})

	if (isSignedIn) {
		navigate("/")
		window.location.reload()
	}
	return (
		<div>
			<PageTitle title={"login"}></PageTitle>
			<div className="container flex justify-center items-center">
				<div className="form-box shadow-lg border ">
					<div className="header-form mt-10">
						<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
						<div className="image">
						</div>
					</div>
					<div className="body-form mt-17 items-center ">
						<h1 className='text-xl capitalize text-gray-800 text-center font-bold'>Click below to login</h1>
						<div >
							<GoogleLogin className='w-full text-center text-black font-bold mx-auto'
								clientId={clientId}
								buttonText="Login With Google"
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}

							/>

						</div>


					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;