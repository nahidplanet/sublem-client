import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';


const AllFreeUpdate = ({ updateFree, setUpdateFree ,refetch}) => {

	const nameRef = useRef('');
	const codeRef = useRef('');
	const sortDescriptionRef = useRef('');
	const longDescriptionRef = useRef('');
	const priceRef = useRef('');
	const discountRef = useRef('');
	const colorRef = useRef('');
	const featureRef = useRef('');
	const categoryRef = useRef('');
	const typeRef = useRef('');
	const productImagePathRef1 = useRef('');
	const productImagePathRef2 = useRef('');
	const productImagePathRef3 = useRef('');
	const productImagePathRef4 = useRef('');
	const productImagePathRef5 = useRef('');

	const handleUpdateFreeProduct = (e) => {
		e.preventDefault()
		const name = nameRef.current.value;
		const code = codeRef.current.value;
		const sortDescription = sortDescriptionRef.current.value;
		const longDescription = longDescriptionRef.current.value;
		const price = priceRef.current.value;
		const discount = discountRef.current.value;
		const color = colorRef.current.value;
		const feature = featureRef.current.value;
		const category = categoryRef.current.value;
		const type = typeRef.current.value;

		const productImagePath1 = productImagePathRef1.current.value;
		const productImagePath2 = productImagePathRef2.current.value;
		const productImagePath3 = productImagePathRef3.current.value;
		const productImagePath4 = productImagePathRef4.current.value;
		const productImagePath5 = productImagePathRef5.current.value;
		const productImage = [
			{ productImagePath: productImagePath1 },
			{ productImagePath: productImagePath2 },
			{ productImagePath: productImagePath3 },
			{ productImagePath: productImagePath4 },
			{ productImagePath: productImagePath5 },
		]
		const status = "free";

		const formData = { name, code, sortDescription, longDescription, price, discount, color, feature, category, type, productImage }
		const requestOptions = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`,
				"content-type": "application/json"
			},
			body: JSON.stringify(formData)
		};
		fetch(`http://localhost:5000/api/v1/free?id=${updateFree._id}`, requestOptions)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Product upload failed")
				} else {
					toast.success("Product upload successful");
					refetch()
					setUpdateFree(null);

				}
			})

	}

	return (
		<div>
			<input type="checkbox" id="updateFreeModal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle ">
				<div className="modal-box rounded-lg m-0 p-0 bg-gray-200 text-gray-900 border shadow-lg">
					<label htmlFor="updateFreeModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<form className="p-10 bg-white rounded shadow-xl" onSubmit={handleUpdateFreeProduct} >
						<p className="text-lg text-gray-800 font-medium pb-1 text-center">Update Product</p>
						<p className="text-sm text-red-500 font-medium pb-4 text-center">Please use image link only</p>
						<div className="">
							<label className="block text-sm text-gray-600" >Product Name</label>
							<input ref={nameRef} required className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Product Name" />

						</div>

						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Unique Code</label>
							<input ref={codeRef} required className="w-full  px-2 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Unique Code" />
						</div>


						<div className="mt-2">
							<label className=" block text-sm text-gray-600" >Sort Description</label>
							<input ref={sortDescriptionRef} required className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Sort Description" />
						</div>


						<div className="mt-2">
							<label className="text-sm block text-gray-600" >Long Description</label>
							<input ref={longDescriptionRef} required className="w-full px-5  py-4  text-gray-700 bg-gray-200 rounded" type="text" placeholder="Long Description" />
						</div>

						<div className="inline-block mt-2 w-1/2 pr-1">
							<label className="block text-sm text-gray-600" >Price</label>
							<input ref={priceRef} required className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Price" />
						</div>

						<div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
							<label className="block text-sm text-gray-600" >Discount</label>
							<input ref={discountRef} required className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Discount" />
						</div>

						<div className="">
							<label className="block text-sm text-gray-600" >Select Category</label>
							<select
								className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
								ref={categoryRef} required>
								<option value="arabic">Arabic Furniture</option>
								<option value="home">Home Furniture</option>
								<option value="office">Office Furniture</option>
								<option value="service">Service</option>
							</select>
						</div>
						<div className="">
							<label className="block text-sm text-gray-600" >Product Type</label>
							<select
								className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-none"
								ref={typeRef} required>
								<option value="sofa">Sofa</option>
								<option value="bed">Bed</option>
								<option value="carpet">Carpet</option>
								<option value="mattress">Bed Mattress</option>
								<option value="curtain">Curtain</option>
								<option value="wallpaper">Wallpaper</option>
								<option value="cabinets">Cabinets Design</option>
								<option value="gypsum">Gypsum Design</option>
								<option value="panting">Wall Painting</option>
							</select>
						</div>


						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Feature (optional)</label>
							<input ref={featureRef} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" />
						</div>

						<div className="w-full grid  grid-cols-1">
							<div className=" mt-2  ">
								<label className="block text-sm text-gray-600" >Color (optional) </label>
								<input ref={colorRef} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="color" placeholder="Color" />
							</div>
						</div>

						<div className=" mt-2 ">
							<label className="block text-sm text-gray-600" >Image 1 </label>
							<input ref={productImagePathRef1} required className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Image 1" />
						</div>
						<div className=" mt-2 ">
							<label className="block text-sm text-gray-600" >Image 2 </label>
							<input ref={productImagePathRef2} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Image 2" />
						</div>
						<div className=" mt-2 ">
							<label className="block text-sm text-gray-600" >Image 3 </label>
							<input ref={productImagePathRef3} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Image 3" />
						</div>
						<div className=" mt-2 ">
							<label className="block text-sm text-gray-600" >Image 4 </label>
							<input ref={productImagePathRef4} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Image 4" />
						</div>
						<div className=" mt-2 ">
							<label className="block text-sm text-gray-600" >Image 5 </label>
							<input ref={productImagePathRef5} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Image 5" />
						</div>

						<div className="mt-6">
							<input type="submit" value="Publish" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AllFreeUpdate;