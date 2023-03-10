import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { api } from '../../../urlConfig';
import AddSliderSingle from './AddSliderSingle';

const AddSlider = () => {

	const nameRef = useRef('');
	const imageRef = useRef('');

	const getFacts = () => {
		const res = axios.get(`${api}/slider`).then((res) => {
			return res
		})
		return res;
	};
	const { data, isLoading,refetch } = useQuery(['Slider'], getFacts);
	const slider = data?.data?.slider;
	


	const handleSlider = (e) => {
		e.preventDefault()
		const name = nameRef.current.value;
		const image = imageRef.current.value;

		const sliderData = { name, image }
		const slider = {
			method: 'POST',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(sliderData)
		};
		fetch(`${api}/slider`, slider)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Slider Add failed")
				} else {
					refetch()
					toast.success("Slider Add successful");
				}
			});
	}

	const handleDeleteData =(id) =>{
		 axios.delete(`${api}/slider?id=${id}`).then((res) => {
			if (res?.data?.status) {
				refetch()
					toast.success("Slider Delete successful");
			}
		})
	}
	return (
		<>
		<div>
			<form className="p-10 bg-white border rounded shadow-xl" onSubmit={handleSlider} >
				<p className="text-lg text-gray-800 font-medium pb-1 text-center"> AddSlider </p>
				<p className="text-sm text-red-500 font-medium pb-4 text-center">Please use image link only</p>
				<div className="">
					<label className="block text-sm text-gray-600" >Product Name</label>
					<input ref={nameRef} required className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="slider Name" />
				</div>


				<div className=" mt-2 ">
					<label className="block text-sm text-gray-600" >Slider Image Link (1430x425)</label>
					<input ref={imageRef} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="slider Image Link" />
				</div>

				<div className='flex justify-start items-center'>
				<div className="mt-6 mr-6">
					<input type="submit" value="Publish" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
				</div>
				<div className="mt-6">
					<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
				</div>
				</div>
			</form>

			{/* category and log  */}
			
			
		</div>
		<div>
			<div className="overflow-x-auto w-full">
				<table className="table table-compact w-full">
					<thead>
						<tr>
							<th>
								Serial
							</th>
							<th>Name</th>
							<th>Image</th>
							<th>action</th>
						</tr>
					</thead>
					<tbody>
						{
							slider?.map((item, index) => <AddSliderSingle
							 key={item._id}
							  index={index} 
							  item={item} 
							  handleDeleteData={handleDeleteData}
							  ></AddSliderSingle>)
						}
					</tbody>

					<tfoot>

					</tfoot>

				</table>
			</div>
		</div>
		
		</>
	);
};

export default AddSlider;