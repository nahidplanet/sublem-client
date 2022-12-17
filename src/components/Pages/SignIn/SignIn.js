import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../firebaseAuth/firebase.init';
import google from '../../../assets/icon/google.svg'
import facebook from '../../../assets/icon/facebookSocial.svg'
import useToken from '../../../hooks/useToken';


const SignIn = () => {
	const [open, setOpen] = useState(false)
	const [user] = useAuthState(auth)
	const [signInWithGoogle, suser, loading, error] = useSignInWithGoogle(auth);
	const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
	let navigate = useNavigate();
	let location = useLocation();
	let from = location?.state?.from?.pathname || "/";

	const [token] = useToken(user)


	if (token) {
		console.log("ddddddddddddddd", token);
		navigate(from, { replace: true });
	}

	return (
		<div>
			<div className="container">
				<div className="form-box shadow-lg border ">
					<div className="header-form">
						<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
						<div className="image">
						</div>
					</div>
					<div className="body-form ">
						<div></div>
						<div className='flex flex-col gap-5 items-center justify-center my-3 '>
							<div className='border flex items-center rounded-md bg-[#007ACC] cursor-pointer hover:bg-[#1f00cc]' onClick={() => signInWithGoogle()}>
								<button className='m-0 bg-white px-5 py-3' id='google'><img src={google} alt="google" /></button>
								<label className='text-white px-5 py-3 capitalize text-lg font-semibold cursor-pointer' htmlFor="google">SignIn with google</label>
							</div>
							<div className='border flex items-center rounded-md bg-[#007ACC] cursor-pointer hover:bg-[#1f00cc]' onClick={() => signInWithFacebook()}>
								<button className='m-0 bg-white px-5 py-3'><img src={facebook} alt="facebook" /></button>
								<label className='text-white px-5 py-3 capitalize text-lg font-semibold cursor-pointer' htmlFor="google">SignIn with Facebook</label>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignIn;

{/* <Link to={'/developer'} className="text-black p-5">admin</Link> */ }