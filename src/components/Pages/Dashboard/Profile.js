import React from 'react';
import { useQuery } from 'react-query';
import axiosInst from '../../axios';
import Loader from '../../Shared/Loader';
import PageTitle from '../../Shared/PageTitle';

const Profile = () => {
	const { isLoading, data: userInfo, refetch } = useQuery(
		['userProfile'], () => axiosInst.get('/all-users/dashboard').then(data => data)
	)
	if (isLoading) {
		return <Loader></Loader>
	}
	const user = userInfo?.data?.user
	return (
		<div className='text-black grid grid-cols-8 bg-gray w-full'>

			<div><PageTitle title={"Profile"}></PageTitle></div>
			<div className='col-span-8 md:col-span-6'>
				<div className="mt-20 card  bg-white  shadow-xl w-full border">
					<div className="card-body ">
						<h1 className='text-center mb-5 text-2xl md:text-4xl capitalize'>Profile Info</h1>
						<table className='text-left md:text-center '>
								<tr className='border-b'>
									<thead><th className='p-5'>Full Name</th></thead>
									<td >{user?.fullName}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>User Name</th></thead>
									<td >{user?.username}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>Email</th></thead>
									<td >{user?.email}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>Contact Number</th></thead>
									<td >{user?.mobileNumber}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>Address 1</th></thead>
									<td >{user?.addressOne}</td>
								</tr>
								<tr className='border-b'>
									<thead><th className='p-5'>Address 2</th></thead>
									<td >{user?.addressTwo}</td>
								</tr>
						</table>
					</div>
				</div>
			</div>
			<div></div>
		</div>
	);
};

export default Profile;