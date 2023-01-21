import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import { api } from '../../../urlConfig';
import PageTitle from '../../Shared/PageTitle';
import "./AdminLogin.css"



const SignIn = () => {


	const navigate = useNavigate()
	const [isSignedIn, setIsSignedIn] = useState(false);

	const clientId = '625485533795-l18f07it1fdssjfhqoeenq788vpgq1q1.apps.googleusercontent.com'

	const responseGoogle = (response) => {
		const email = response?.profileObj?.email;
		console.log(email);
		const username = response?.profileObj?.name
		const sortName = response?.profileObj?.givenName
		const image = response?.profileObj?.imageUrl

		const setAuth = { e: email, u: username, s: sortName, url: image, };

		if (!response?.profileObj?.email) {
			navigate("/developer/admin-login")
		} else {
			axios.post(`${api}/create-user`, { email, username }).then(res => {
				if (res?.data?.status) {
					localStorage.setItem("activeToken", res?.data?.activeToken);
					setIsSignedIn(true)
				}
			}).catch(navigate("/developer/admin-login"))
			localStorage.setItem("Auth_credentials", JSON.stringify(setAuth));
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
		navigate("/developer/")
		window.location.reload()
	}
	return (
		<div>
			<PageTitle title={"login"}></PageTitle>
			<div className="container">
				<div className="form-box shadow-lg border ">
					<div className="header-form mt-10">
						<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
						<div className="image">
						</div>
					</div>
					<div className="body-form mt-17 ">
						<div >
							<GoogleLogin className='w-full text-center'
								clientId={clientId}
								buttonText="Login"
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