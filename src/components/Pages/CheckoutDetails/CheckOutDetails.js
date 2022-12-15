import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebaseAuth/firebase.init';

const CheckOutDetails = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [user, loading, error] = useAuthState(auth);
	// console.log(user);
	const onSubmit = async (products) => {
		const res = await axios.put('http://localhost:5000/api/v1/user-create/',products);
		if (!res) {
			toast.error('something went wrong')
		}else{
			toast.success('Order has been submitted')
		}
	}
	return (
		<div>
			<div className="w-full mx-auto lg:w-1/2 mt-6 pl-0 lg:pl-2">

				<div className="leading-loose">
					<form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
						<p className="text-lg text-gray-800 font-medium pb-1 text-center">user information</p>
						<p className="text-sm text-gray-800 font-medium pb-4 text-center">Make Sure Your Address and Other Information </p>
						{/* full name  */}
						<div className="">
							<label className="block text-sm text-gray-600" >Full Name</label>
							<input {...register("fullName", { required: true, minLength: 3})} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Full Name" />
							{errors.fullName?.type === "required" && <span className="label-text-alt capitalize text-red-600">Name is Required</span>}
							{errors.fullName?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">Name at lest 6 characters</span>}
						</div>
						{/* username */}
						<div className="mt-2">
							<label className="text-sm block text-gray-600" >User Name</label>
							<input readOnly  value={user?.displayName ? user.displayName :user?.email.slice(0,5)}{...register("username", { required: false })} className="w-full px-5  py-1  text-gray-700 bg-gray-200 rounded" type="text" placeholder="User Name" />
							{errors.username?.type === "required" && <span className="label-text-alt capitalize text-red-600">User Name is required</span>}
						</div>

						{/* email */}
						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Your Email</label>
							<input readOnly value={user?.email}  {...register("email", { required: false })} className="w-full  px-2 py-1 text-gray-700 bg-gray-200 rounded" type="email" placeholder="Your Email" />
							{errors.email?.type === "required" && <span className="label-text-alt capitalize text-red-600">Email is required</span>}
							{errors.email?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 4 characters</span>}
						</div>

						{/* phone number */}
						<div className="mt-2">
							<label className=" block text-sm text-gray-600" >Mobile Number</label>
							<input {...register("mobileNumber", { required: true })} className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Mobile Number" />
							{errors.mobileNumber?.type === "required" && <span className="label-text-alt capitalize text-red-600">Mobile Number is required</span>}
						</div>

						{/* address one */}
						<div className="mt-2 ">
							<label className="block text-sm text-gray-600" >Address 1</label>
							<input {...register("addressOne", { required: true, minLength: 3 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Address 1" />
							{errors.addressOne?.type === "required" && <span className="label-text-alt capitalize text-red-600">Address 1 required</span>}
							{errors.addressOne?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">Address 1 at lest 3 characters</span>}
						</div>
						{/* address two  */}
						<div className="mt-2 ">
							<label className="block text-sm text-gray-600" >Address 2 (optional)</label>
							<input {...register("addressTwo", { required: false, minLength: 3 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Address 2" />
							
							{errors.addressTwo?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">Address 2 at lest 3 characters</span>}
						</div>

						<div className="mt-6">
							<input type="submit" value="confirm to check out" className="px-4 py-1 cursor-pointer text-white font-semibold capitalize w-full bg-green-500 rounded" ></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CheckOutDetails;