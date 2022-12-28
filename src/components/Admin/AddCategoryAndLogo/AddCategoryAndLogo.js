import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../../../urlConfig';

const AddCategoryAndLogo = () => {

	const [facebook, setfacebook] = useState("");
	const [instagram, setinstagram] = useState("");
	const [youtube, setyoutube] = useState("");
	const [twitter, settwitter] = useState("");
	const [linkedin, setlinkedin] = useState("");
	const [whatsApp, setwhatsApp] = useState("");

	const handleHome = (e) => {
		e.preventDefault()
		const homeData = {
			facebook,
			instagram,
			youtube,
			twitter,
			linkedin,
			whatsApp,
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(homeData)
		};
		fetch(`${api}/social-links`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error(" Add failed")
				} else {
					toast.success(" Add successful");
				}
			});

	}

	return (
		<div>
			<div className="p-10 bg-white border rounded shadow-xl"  >
				<p className="text-lg text-gray-800 font-medium pb-1 text-center"> Social Link Add</p>
				<p className="text-sm text-red-500 font-medium pb-4 text-center">Please use link only</p>
				<form className='p-10 border' onSubmit={handleHome}>
					<h1 className=' mt- text-center font-bold capitalize text-gray-900 text-xl'>Social Links</h1>

					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Facebook</label>
						<input onChange={(e) => setfacebook(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Facebook" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Instagram </label>
						<input onChange={(e) => setinstagram(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Instagram" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Youtube </label>
						<input onChange={(e) => setyoutube(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Youtube" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Twitter </label>
						<input onChange={(e) => settwitter(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Bed" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >LinkeDin </label>
						<input onChange={(e) => setlinkedin(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="LinkeDin" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >WhatsApp </label>
						<input onChange={(e) => setwhatsApp(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="WhatsApp" />
					</div>

					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Save Links" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
						<div className="mt-6">
							<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</div>

				</form>

			</div>
		</div>
	);
};

export default AddCategoryAndLogo;