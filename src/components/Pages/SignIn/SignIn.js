import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './SignIn.css'
import auth from '../../../firebaseAuth/firebase.init';
import google from '../../../assets/icon/google.svg'
import facebook from '../../../assets/icon/facebookSocial.svg'
import { useRef } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useEffect } from 'react';


const SignIn = () => {
	const [open, setOpen] = useState(false)
	let navigate = useNavigate();
	let location = useLocation();
	const [user] = useAuthState(auth);


	// from input value 
	const emailRef = useRef('');
	const passwordRef = useRef('')

	// for firebase auth
	const [signInWithGoogle, xuser, loading, error] = useSignInWithGoogle(auth);
	let from = location?.state?.from?.pathname || "/";


	const email = user?.email;
	const username = user?.displayName;
	const data = { email, username }
	// 'authorization': `Bearer ${localStorage.getItem('activeToken')}`,


	const handleGoogleSignIn = async () => {
		await signInWithGoogle();
		const res = await axios.post(`http://localhost:5000/api/v1/create-user`, data);
		if (res?.data?.status) {
			toast.success(res?.data?.message);
			localStorage.setItem("activeToken", res?.data?.activeToken);
			navigate(from, { replace: true });
		}
	}

if (user) {
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
						<form>
							<div className=" flex items-center mb-6">
								<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
									<span className="input-group-text h-[32px] border-none"><i className="fa fa-user"></i></span>
								</div>
								<input ref={emailRef} type="text" placeholder="Email" className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
							</div>
							<div className=" flex items-center mb-2 ">
								<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
									<span className="input-group-text  h-[32px] border-none"><i className="fa fa-lock"></i></span>
								</div>
								<input ref={passwordRef} type="password" placeholder="Password" className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
							</div>

							<button disabled={!open} type="submit" value={"login"} className="submitBtn btn btn-md text-white btn-block ">LOGIN</button>
							<p className='text-gray-700 text-sm'>Already have an account? <Link className='underline text-green-500' to={'/singup'}>Sign Up</Link></p>
							<div className="message mt-3">
								<div className='flex items-center'>
									<input onClick={() => setOpen(!open)} className='w-4 h-4 mr-2 bg-white text-gray-900 border-2 border-gray-800' id='check' type="checkbox" /> <label htmlFor="check" className='text-gray-800 cursor-pointer'>Remember ME</label>
								</div>

								<div><Link className='text-gray-600'>Forgot your password</Link></div>
							</div>
						</form>
						<div className='flex gap-5 items-center justify-center my-3'>
							<button onClick={handleGoogleSignIn} className='w-8 h-8 m-0'><img src={google} alt="google" /></button>
							<button className='w-8 h-8 m-0'><img src={facebook} alt="facebook" /></button>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default SignIn;