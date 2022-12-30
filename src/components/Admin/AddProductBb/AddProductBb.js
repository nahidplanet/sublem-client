import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { api } from "../../../urlConfig";


const AddProductBb = () => {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const onSubmit = async (products) => {
		const productImage = [
			{ productImagePath: products.image1 = undefined },
			{ productImagePath: products.image2 = undefined },
			{ productImagePath: products.image3 = undefined },
			{ productImagePath: products.image4 = undefined },
			{ productImagePath: products.image5 = undefined },
		];
		const status = "free";
		const {name,code,sortDescription,longDescription,price,discount,category,type,color,feature}=products
		const formData = {name,code,sortDescription,longDescription,price,discount,category,type,color,feature,productImage,status:status}

		const requestOptions = {
			method: 'POST',
			headers:{
				"authorization":`Bearer ${localStorage.getItem('activeToken')}`,
				"content-type":"application/json"
			},
			body: JSON.stringify(formData)
		};
		fetch(`${api}/free`, requestOptions)
			.then(response => response.json())
			.then(data => {
				if (!data.status) {
					toast.error("Product upload failed")
				} else {
					toast.success("Product upload successful");
					reset();

				}
			})

	}
	return (
		<div className="w-full mx-auto lg:w-1/2 mt-6 pl-0 lg:pl-2">

			<div className="leading-loose">
				<form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
					<p className="text-lg text-gray-800 font-medium pb-1 text-center">Add New Product</p>
					<p className="text-sm text-red-500 font-medium pb-4 text-center">Please Use Image link only</p>
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
						<input {...register("discount", { required: true,  })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Discount" />
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
						<input {...register("feature", { required: false, minLength: 3 })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" />
						{errors.feature?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
						{errors.feature?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
					</div>

					<div className="w-full grid  grid-cols-1">
					<div className="inline-block mt-2  ">
						<label className="block text-sm text-gray-600" >Color (optional) </label>
						<input {...register("color", { required: false, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="color" placeholder="Color" />
						{errors.color?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						{errors.color?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
					</div>
					</div>

						<p className="text-sm block text-red-600 text-center" >Required all image</p>
					<div className="mt-2">
						<label className="text-sm block text-gray-600" >Product Images 1 Required (600x450)</label>
						<input  type="text" {...register("image1", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
						{errors.image1?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
					</div>
					<div className="mt-2">
						<label className="text-sm block text-gray-600" >Product Images 2 (optional 600x450)</label>
						<input  type="text" {...register("image2", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
						{errors.image2?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
					</div>
					<div className="mt-2">
						<label className="text-sm block text-gray-600" >Product Images 3 (optional 600x450)</label>
						<input  type="text" {...register("image3", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
						{errors.image3?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
					</div>
					<div className="mt-2">
						<label className="text-sm block text-gray-600" >Product Images 4 (optional 600x450)</label>
						<input  type="text" {...register("image4", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
						{errors.image4?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
					</div>
					<div className="mt-2">
						<label className="text-sm block text-gray-600" >Product Images 5 (optional 600x450)</label>
						<input  type="text" {...register("image5", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
						{errors.image5?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
					</div>

					<div className="mt-6">
						<input type="submit" value="Publish" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddProductBb;