
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'


const UpdateModal = ({ updateItem, refetch, setUpdateItem }) => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const onSubmit = async (products) => {
		let formData = new FormData();

		const img = products.productImage;
		Object.keys(img).forEach(function (key, index) {

			formData.append("productImage", img[key])
		});

		formData.append("name", products.name);
		formData.append("code", products.code);
		formData.append("sortDescription", products.sortDescription);
		formData.append("longDescription", products.longDescription);
		formData.append("price", products.price);
		formData.append("discount", products.discount);
		formData.append("category", products.category);
		formData.append("type", products.type);
		formData.append("quantity", products.quantity);
		formData.append("color", products.color);
		formData.append("feature", products.feature);

		const UPDATE_PRODUCT = {
			method: 'PUT',
			headers: {
				"authorization": `Bearer ${localStorage.getItem('accessToken')}`
			},
			body: formData
		};
		const url = `http://localhost:5000/api/v1/product/${updateItem._id}`;

		fetch(url, UPDATE_PRODUCT)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Product update failed")
				} else {
					toast.success("Product update successful");
					reset();
					refetch();
					setUpdateItem(null)


				}
			})
	}

	return (
		<div>
			<input type="checkbox" id="productUpdate" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle ">
				<div className="modal-box rounded-lg m-0 p-0 bg-gray-200 text-gray-900 border shadow-lg">
					<label htmlFor="productUpdate" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
					<form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
						<p className='text-center text-gray-800 font-bold text-xl capitalizes'>Update Product</p>

						<div className="">
							<label className="block text-sm text-gray-600" >Product Name</label>
							<input {...register("name", { required: true, minLength: 6 })} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Product Name" />
							{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
							{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
						</div>

						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Unique Code</label>
							<input {...register("code", { required: true, minLength: 4 })} className="w-full  px-2 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Unique Code" />
							{errors.code?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
							{errors.code?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 4 characters</span>}
						</div>


						<div className="mt-2">
							<label className=" block text-sm text-gray-600" >Sort Description</label>
							<input {...register("sortDescription", { required: true })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Sort Description" />
							{errors.sortDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						</div>


						<div className="mt-2">
							<label className="text-sm block text-gray-600" >Long Description</label>
							<input {...register("longDescription", { required: true })} className="w-full px-5  py-4  text-gray-700 bg-gray-200 rounded" type="text" placeholder="Long Description" />
							{errors.longDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}

						</div>

						<div className="inline-block mt-2 w-1/2 pr-1">
							<label className="block text-sm text-gray-600" >Price</label>
							<input {...register("price", { required: true, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Price" />
							{errors.price?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
							{errors.price?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
						</div>

						<div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
							<label className="block text-sm text-gray-600" >Discount</label>
							<input {...register("discount", { required: true, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Discount" />
							{errors.discount?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
							{errors.discount?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
						</div>

						<div className="">
							<label className="block text-sm text-gray-600" >Select Category</label>
							<select
								className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
								{...register("category", { required: true, })}>
								<option value="arabic">Arabic Furniture</option>
								<option value="home">Home Furniture</option>
								<option value="office">Office Furniture</option>
								<option value="service">Service</option>
							</select>
							{errors.category?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						</div>
						<div className="">
							<label className="block text-sm text-gray-600" >Product Type</label>
							<select
								className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-none"
								{...register("type", { required: true, })}>
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
							{errors.type?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						</div>


						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Feature (optional)</label>
							<input {...register("feature", { required: true, minLength: 3 })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" />
							{errors.feature?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
							{errors.feature?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
						</div>

						<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
							<div className="inline-block mt-2  ">
								<label className="block text-sm text-gray-600" >Color (optional) </label>
								<input {...register("color", { required: true, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Color" />
								{errors.color?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
								{errors.color?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
							</div>

							<div className="inline-block mt-2 ">
								<label className="block text-sm text-gray-600" >Quantity </label>
								<input {...register("quantity", { required: true, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Quantity" />
								{errors.quantity?.type === "required" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">This field is required</span>}
								{errors.quantity?.type === "minLength" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">at lest 1 characters</span>}
							</div>
						</div>

						<div className="mt-2">
							<label className="text-sm block text-gray-600" >Product Images</label>
							<input multiple type="file" {...register("productImage", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
							{errors.productImage?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						</div>

						<div className="mt-6">
							<input type="submit" value="Update" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UpdateModal;