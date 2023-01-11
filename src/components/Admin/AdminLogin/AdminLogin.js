import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../assets/icon/google.svg'
import useToken from '../../../hooks/useToken';
import PageTitle from '../../Shared/PageTitle';
import auth from '../../../firebaseAuth/firebase.init';


const AdminLogin = () => {
	
	const [user] = useAuthState(auth)
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	let navigate = useNavigate();
	const handleSingIn = ()=>{
		signInWithGoogle()
	}
	const [token] = useToken(user)
	if (token) {
		navigate("/developer/")
	}

	return (
		<div>
			<PageTitle title={" admin-login"}></PageTitle>
			<div className="container z-[100]">
				<div className="w-[380px] h-[450px] p-[20px] flex flex-col rounded-sm justify-center shadow-lg border bg-gray-50">
					<div className="header-form mt-10">
						<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
						<div className="image">
						</div>
					</div>
					<div className="body-form mt-17 ">
						<div></div>
						<div className='flex flex-col gap-5 items-center justify-center my-3 '>
							<div className='border w-full flex items-center rounded-md bg-[#007ACC] cursor-pointer hover:bg-[#1f00cc]' onClick={handleSingIn}>
								<button className='m-0 bg-white px-5 py-3' id='google'><img src={google} alt="google" /></button>
								<label className='text-white px-5 py-3 capitalize text-lg font-medium w-full cursor-pointer' htmlFor="google">SignIn with google</label>
							</div>
							
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;