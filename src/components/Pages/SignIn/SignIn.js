import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../firebaseAuth/firebase.init';
import google from '../../../assets/icon/google.svg'
import facebook from '../../../assets/icon/facebookSocial.svg'
import useToken from '../../../hooks/useToken';
import PageTitle from '../../Shared/PageTitle';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import useLoadCart  from '../../../hooks/useLoadCart';


const SignIn = () => {
	const [user] = useAuthState(auth)
	const [signInWithGoogle, suser, loading, error] = useSignInWithGoogle(auth);
	const [signInWithFacebook, fuser, floading, ferror] = useSignInWithFacebook(auth);
	let navigate = useNavigate();

	const [token] = useToken(user)


	if (token) {
		navigate("/")
		window.location.reload()
		// toast.success("Login Successful")
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
						<div></div>
						<div className='flex flex-col gap-5 items-center justify-center my-3 '>
							<div className='border w-full flex items-center rounded-md bg-[#007ACC] cursor-pointer hover:bg-[#1f00cc]' onClick={() => signInWithGoogle()}>
								<button className='m-0 bg-white px-5 py-3' id='google'><img src={google} alt="google" /></button>
								<label className='text-white px-5 py-3 capitalize text-lg font-medium w-full cursor-pointer' htmlFor="google">SignIn with google</label>
							</div>
							<div className='border w-full flex items-center rounded-md bg-[#007ACC] cursor-pointer hover:bg-[#1f00cc]' onClick={() => signInWithFacebook()}>
								<button className='m-0 bg-white px-5 py-3'><img src={facebook} alt="facebook" /></button>
								<label className='text-white px-5 py-3 capitalize text-lg font-medium w-full cursor-pointer' htmlFor="google">SignIn with Facebook</label>
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