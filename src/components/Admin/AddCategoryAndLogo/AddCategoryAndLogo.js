import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

const AddCategoryAndLogo = () => {
	const [mainLogo, setMainLogo] = useState("");
	const [mobileLogo, setMobileLogo] = useState("");

	const [homeCategory, setHomeCategory] = useState("");
	const [homeSofa, setHomeSofa] = useState("");
	const [homeBed, setHomeBed] = useState("");
	const [homeMattress, setHomeMattress] = useState("");
	const [homeCarpet, setHomeCarpet] = useState("");
	const [homeCurtain, setHomeCurtain] = useState("");
	const [homeWallpaper, setHomeWallpaper] = useState("");

	const [arabicCategory, setArabicCategory] = useState("");
	const [arabicSofa, setArabicSofa] = useState("");
	const [arabicBed, setArabicBed] = useState("");
	const [arabicMattress, setArabicMattress] = useState("");
	const [arabicCarpet, setArabicCarpet] = useState("");
	const [arabicCurtain, setArabicCurtain] = useState("");
	const [arabicWallpaper, setArabicWallpaper] = useState("")

	const [officeCategory, setOfficeCategory] = useState("");
	const [officeSofa, setOfficeSofa] = useState("");
	const [officeCarpet, setOfficeCarpet] = useState("");
	const [officeCurtain, setOfficeCurtain] = useState("");
	const [officeWallpaper, setOfficeWallpaper] = useState("")

	const [serviceCategory, setServiceCategory] = useState("");
	const [CabinetDesign, setServiceCabinet] = useState("");
	const [WallPainting, setServiceWallPanting] = useState("");
	const [gypsumDesign, setServiceGypsumDesign] = useState("");


	const handleLogo = (e) => {
		e.preventDefault()
		const logoData = {
			mainLogo,
			mobileLogo
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(logoData)
		};
		fetch(`http://localhost:5000/api/v1/category-and-logo`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Logo Add failed")
				} else {
					toast.success("Logo Add successful");
				}
			});

	}
	const handleHome = (e) => {
		e.preventDefault()
		const homeData = {
			homeCategory,
			homeSofa,
			homeBed,
			homeMattress,
			homeCarpet,
			homeCurtain,
			homeWallpaper,
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(homeData)
		};
		fetch(`http://localhost:5000/api/v1/category-and-logo`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Logo Add failed")
				} else {
					toast.success("Logo Add successful");
				}
			});

	}
	const handleOffice = (e) => {
		e.preventDefault()
		const officeData = {
			officeCategory,
			officeSofa,
			officeCarpet,
			officeCurtain,
			officeWallpaper,
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(officeData)
		};
		fetch(`http://localhost:5000/api/v1/category-and-logo`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Logo Add failed")
				} else {
					toast.success("Logo Add successful");
				}
			});

	}
	const handleArabic = (e) => {
		e.preventDefault()
		const arabicData = {
			arabicCategory,
			arabicSofa,
			arabicBed,
			arabicMattress,
			arabicCarpet,
			arabicCurtain,
			arabicWallpaper,
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(arabicData)
		};
		fetch(`http://localhost:5000/api/v1/category-and-logo`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Logo Add failed")
				} else {
					toast.success("Logo Add successful");
				}
			});

	}
	const handleService = (e) => {
		e.preventDefault()
		const serviceData = {
			serviceCategory,
			CabinetDesign,
			WallPainting,
			gypsumDesign,
		}
		const data = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(serviceData)
		};
		fetch(`http://localhost:5000/api/v1/category-and-logo`, data)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Logo Add failed")
				} else {
					toast.success("Logo Add successful");
				}
			});

	}


	return (
		<div>
			<div className="p-10 bg-white border rounded shadow-xl"  >
				<p className="text-lg text-gray-800 font-medium pb-1 text-center"> Category And Logo </p>
				<p className="text-sm text-red-500 font-medium pb-4 text-center">Please use image link only</p>


				{/* logo area  */}
				<form className='p-10 border' onSubmit={handleLogo}>
					<h1 className='text-center font-bold capitalize text-gray-900 text-xl'>logo</h1>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Main Logo (190x60)</label>
						<input onChange={(e) => setMainLogo(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Main Logo" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Mobile Logo (55x55)</label>
						<input onChange={(e) => setMobileLogo(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Mobile Logo" />
					</div>
					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Logo" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
						<div className="mt-6">
							<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</div>
				</form>



				{/* home category  */}
				<form className='p-10 border' onSubmit={handleHome}>
					<h1 className=' mt- text-center font-bold capitalize text-gray-900 text-xl'>Home Category</h1>

					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Category (1024x500)</label>
						<input onChange={(e) => setHomeCategory(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Category" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Sofa (1024x500)</label>
						<input onChange={(e) => setHomeSofa(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Sofa" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Carpet (1024x500)</label>
						<input onChange={(e) => setHomeCarpet(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Carpet" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Bed (1024x500)</label>
						<input onChange={(e) => setHomeBed(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Bed" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Curtain (1024x500)</label>
						<input onChange={(e) => setHomeCurtain(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Curtain" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Mattress (1024x500)</label>
						<input onChange={(e) => setHomeMattress(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Mattress" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Home Wallpaper (1024x500)</label>
						<input onChange={(e) => setHomeWallpaper(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Home Wallpaper" />
					</div>
					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Home Category" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
						<div className="mt-6">
							<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</div>

				</form>




				{/* arabic category  */}
				<form className='p-10 border' onSubmit={handleArabic}>
					<h1 className=' mt- text-center font-bold capitalize text-gray-900 text-xl'>Arabic Category</h1>

					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Category (1024x500)</label>
						<input onChange={(e) => setArabicCategory(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Category" />
					</div>


					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Sofa (1024x500)</label>
						<input onChange={(e) => setArabicSofa(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Sofa" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Carpet (1024x500)</label>
						<input onChange={(e) => setArabicCarpet(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Carpet" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Bed (1024x500)</label>
						<input onChange={(e) => setArabicBed(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Bed" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Curtain (1024x500)</label>
						<input onChange={(e) => setArabicCurtain(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Curtain" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Mattress (1024x500)</label>
						<input onChange={(e) => setArabicMattress(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Mattress" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Arabic Wallpaper (1024x500)</label>
						<input onChange={(e) => setArabicWallpaper(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Arabic Wallpaper" />
					</div>
					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Arabic Category" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
						<div className="mt-6">
							<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</div>
				</form>




				{/* Office Category  */}
				<form className='p-10 border' onSubmit={handleOffice}>
					<h1 className=' mt- text-center font-bold capitalize text-gray-900 text-xl'>Office Category</h1>

					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Office Category (1024x500)</label>
						<input onChange={(e) => setOfficeCategory(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Office Category" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Office Sofa (1024x500)</label>
						<input onChange={(e) => setOfficeSofa(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Office Sofa" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Office Carpet (1024x500)</label>
						<input onChange={(e) => setOfficeCarpet(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Office Carpet" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Office Curtain (1024x500)</label>
						<input onChange={(e) => setOfficeCurtain(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Office Curtain" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Office Wallpaper (1024x500)</label>
						<input onChange={(e) => setOfficeWallpaper(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Office Wallpaper" />
					</div>
					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Office Category" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
						<div className="mt-6">
							<input type="reset" value="Reset" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</div>
				</form>



				{/* service  */}
				<form className='p-10 border' onSubmit={handleService}>
					<h1 className=' mt- text-center font-bold capitalize text-gray-900 text-xl'>Service Category</h1>

					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Service Category(1024x500)</label>
						<input onChange={(e) => setServiceCategory(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Service Category" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Cabinet Design (1024x500)</label>
						<input onChange={(e) => setServiceCabinet(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Cabinet Design" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600" >Gypsum Design(1024x500)</label>
						<input onChange={(e) => setServiceGypsumDesign(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Gypsum Design" />
					</div>
					<div className="mt-3">
						<label className="block text-sm text-gray-600">Wall Painting (1024x500)</label>
						<input onChange={(e) => setServiceWallPanting(e.target.value)} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
							type="text"
							placeholder="Wall Painting" />
					</div>
					<div className='flex justify-start items-center'>
						<div className="mt-6 mr-6">
							<input type="submit" value="Service" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
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