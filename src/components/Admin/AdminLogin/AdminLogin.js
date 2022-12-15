
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./AdminLogin.css"
import {  useNavigate } from 'react-router';

const AdminLogin = () => {
	const navigate = useNavigate()
	// let from = location.state?.from?.pathname || "/";
	const [open, setOpen] = useState(false)

	const emailRef = useRef('');
	const passwordRef = useRef('')

	const handleAdminLogin = (e) => {
		e.preventDefault()
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const adminInfo = { email, password }
		if (!email || !password) {
			return toast.error("Invalid Email or Password");
		}
		fetch(`http://localhost:5000/api/v1/developer/login`, {
			method: "POST",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(adminInfo)
		})
			.then(res => res.json())
			.then(data => {
				if (!data.status) {
					toast.error(data?.message);
				};
				if (data.status) {
					localStorage.setItem("activeToken", data.activeToken)
					toast.success("Welcome To Admin");
					navigate('/developer');
				}
			})

	}
	return (
		<div className="container">
			<div className="form-box shadow-lg border ">
				<div className="header-form">
					<h4 className="text-gray-600 text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
					<div className="image">
					</div>
				</div>
				<div className="body-form ">
					<form onSubmit={handleAdminLogin}>
						<div className=" flex items-center mb-6">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text h-[32px] border-none"><i className="fa fa-user"></i></span>
							</div>
							<input
								ref={emailRef}
								type="text"
								placeholder="Email"
								className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<div className=" flex items-center mb-6 ">
							<div className="input-group-prepend bg-gray-300 text-gray-800  px-3 py-1">
								<span className="input-group-text  h-[32px] border-none"><i className="fa fa-lock"></i></span>
							</div>
							<input
								ref={passwordRef}
								type="password"
								placeholder="Password"
								className=" border-l-0 bg-white text-gray-800 rounded-none input-border input-sm w-full max-w-xs" />
						</div>
						<p></p>
						<button
							disabled={!open}
							type="submit"
							value={"login"}
							className="submitBtn btn btn-md text-white btn-block ">LOGIN</button>

						<div className="message mt-3">
							<div className='flex items-center'>
								<input onClick={() => setOpen(!open)} className='w-4 h-4 mr-2 bg-white text-gray-900 border-2 border-gray-800' id='check' type="checkbox" /> <label htmlFor="check" className='text-gray-800 cursor-pointer'>Remember ME</label>
							</div>

							<div><Link className='text-gray-600'>Forgot your password</Link></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;