// import React, { useRef } from 'react';

// const etccccccccccccccccccc = () => {
// 	const nameRef = useRef('');
// 	const codeRef = useRef('');
// 	const sortDescriptionRef = useRef('');
// 	const longDescriptionRef = useRef('');
// 	const priceRef = useRef('');
// 	const discountRef = useRef('');
// 	const colorRef = useRef('');
// 	const featureRef = useRef('');
// 	const categoryRef = useRef('');
// 	const typeRef = useRef('');
// 	const productImageRef = useRef('');
// 	const quantityRef = useRef('');
// 	const handlerAddProduct = (e) =>{

// 		e.preventdefault()
// 		const name = nameRef.current.value;
// 		const code = codeRef.current.value;
// 		const sortDescription = sortDescriptionRef.current.value;
// 		const longDescription = longDescriptionRef.current.value;
// 		const price = priceRef.current.value;
// 		const discount = discountRef.current.value;
// 		const color = colorRef.current.value;
// 		const feature = featureRef.current.value;
// 		const category = categoryRef.current.value;
// 		const type = typeRef.current.value;
// 		const productImage = productImageRef.current.value;
// 		const quantity = quantityRef.current.value;
// 		const formData = {name,code,sortDescription,longDescription,price,discount,color,feature,category,type,productImage,quantity}
// 	}
// 	return (
// 		<div>
			
// 		</div>
// 	);
// };

// export default etccccccccccccccccccc;












// import { useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
// import axiosInst from "../../axios";


// const AddProduct = () => {
// 	const { register, handleSubmit, formState: { errors } } = useForm();

// 	const handleProductAdd = async (products) => {

// 		let balerData = new FormData();
// 		// const img = products.productImage;
// 		// Object.keys(img).forEach(function (key, index) {
// 		// 	formData.append("productImage", img[key])
// 		// });

// 		balerData.append("name", products.name);
// 		balerData.append("code", products.code);
// 		balerData.append("sortDescription", products.sortDescription);
// 		balerData.append("longDescription", products.longDescription);
// 		balerData.append("price", products.price);
// 		balerData.append("discount", products.discount);
// 		balerData.append("category", products.category);
// 		balerData.append("type", products.type);
// 		balerData.append("quantity", products.quantity);
// 		balerData.append("color", products.color);
// 		balerData.append("feature", products.feature);

// 		console.log(new FormData());
// 		console.log(products);

// 		// const data = await axiosInst.post('/product', balerData).then(res => res.json())
// 		// console.log("the consoel is",data);
// 		// fetch("http://localhost:5000/api/v1/product", {
// 		// 	method: "POST",
// 		// 	headers: {
// 		// 		"content-type": "multipart/form-data",
// 		// 		"authorization": `Bearer ${localStorage.getItem('activeToken')}`
// 		// 	}, body: formData
// 		// }).then(res => res.json()).then(data => console.log(data))

// 	}

// 	return (
// 		<div className="w-full mx-auto lg:w-1/2 mt-6 pl-0 lg:pl-2">
// 			<div className="leading-loose">
// 				<form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit(handleProductAdd)} encType="multipart/form-data">
// 					<p className="text-lg text-gray-800 font-medium pb-1 text-center">Add New Product</p>
// 					<p className="text-sm text-gray-800 font-medium pb-4 text-center">Product details</p>
// 					<div className="">
// 						<label className="block text-sm text-gray-600" >Product Name</label>
// 						<input {...register("name", { required: true, minLength: 6 })} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Product Name" />
// 						{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
// 						{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
// 					</div>

// 					<div className="mt-2">
// 						<label className="block text-sm text-gray-600" >Unique Code</label>
// 						<input {...register("code", { required: true, minLength: 4 })} className="w-full  px-2 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Unique Code" />
// 						{errors.code?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
// 						{errors.code?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 4 characters</span>}
// 					</div>


// 					<div className="mt-2">
// 						<label className=" block text-sm text-gray-600" >Sort Description</label>
// 						<input {...register("sortDescription", { required: true })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Sort Description" />
// 						{errors.sortDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 					</div>


// 					<div className="mt-2">
// 						<label className="text-sm block text-gray-600" >Long Description</label>
// 						<input {...register("longDescription", { required: true })} className="w-full px-5  py-4  text-gray-700 bg-gray-200 rounded" type="text" placeholder="Long Description" />
// 						{errors.longDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}

// 					</div>

// 					<div className="inline-block mt-2 w-1/2 pr-1">
// 						<label className="block text-sm text-gray-600" >Price</label>
// 						<input {...register("price", { required: true, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Price" />
// 						{errors.price?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 						{errors.price?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
// 					</div>

// 					<div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
// 						<label className="block text-sm text-gray-600" >Discount</label>
// 						<input {...register("discount", { required: true, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Discount" />
// 						{errors.discount?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 						{errors.discount?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
// 					</div>

// 					<div className="">
// 						<label className="block text-sm text-gray-600" >Select Category</label>
// 						<select
// 							className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
// 							{...register("category", { required: true, })}>
// 							<option value="arabic">Arabic Furniture</option>
// 							<option value="home">Home Furniture</option>
// 							<option value="office">Office Furniture</option>
// 							<option value="service">Service</option>
// 						</select>
// 						{errors.category?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 					</div>
// 					<div className="">
// 						<label className="block text-sm text-gray-600" >Product Type</label>
// 						<select
// 							className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded-none"
// 							{...register("type", { required: true, })}>
// 							<option value="sofa">Sofa</option>
// 							<option value="bed">Bed</option>
// 							<option value="carpet">Carpet</option>
// 							<option value="mattress">Bed Mattress</option>
// 							<option value="curtain">Curtain</option>
// 							<option value="wallpaper">Wallpaper</option>
// 							<option value="cabinets">Cabinets Design</option>
// 							<option value="gypsum">Gypsum Design</option>
// 							<option value="panting">Wall Painting</option>
// 						</select>
// 						{errors.type?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 					</div>


// 					<div className="mt-2">
// 						<label className="block text-sm text-gray-600" >Feature (optional)</label>
// 						<input {...register("feature", { required: false, minLength: 3 })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" />
// 						{errors.feature?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
// 						{errors.feature?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
// 					</div>

// 					<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
// 						<div className="inline-block mt-2  ">
// 							<label className="block text-sm text-gray-600" >Color (optional) </label>
// 							<input {...register("color", { required: false, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Color" />
// 							{errors.color?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 							{errors.color?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
// 						</div>

// 						<div className="inline-block mt-2 ">
// 							<label className="block text-sm text-gray-600" >Quantity </label>
// 							<input {...register("quantity", { required: true, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Quantity" />
// 							{errors.quantity?.type === "required" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">This field is required</span>}
// 							{errors.quantity?.type === "minLength" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">at lest 1 characters</span>}
// 						</div>
// 					</div>

// 					{/* <div className="mt-2">
// 						<label className="text-sm block text-gray-600" >Product Images</label>
// 						<input multiple type="file" {...register("productImage", { required: true })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
// 						{errors.productImage?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
// 					</div> */}

// 					<div className="mt-6">
// 						<input type="submit" value="Publish" className="px-4 py-1 cursor-pointer text-white font-light tracking-wider bg-gray-900 rounded" ></input>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default AddProduct;



// -------------------------------------



import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify'



const UpdateModal = ({ updateItem, refetch, setUpdateItem }) => {
	// const [update,setUpdate] = useState(updateItem);
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	console.log("from child", updateItem);

	const onSubmit = async (products) => {
		console.log(products);
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
				"authorization": `Bearer ${localStorage.getItem('activeToken')}`
			},
			body: formData
		};
		const url = `http://localhost:5000/api/v1/product/${updateItem._id}`;
		
		fetch(url, UPDATE_PRODUCT)
			.then(response => response.json())
			.then(data => {
				console.log("conslole dataf------>",data);
				if (!data.status) {
					console.log(data);
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

						<div className="">
							<label className="block text-sm text-gray-600" >Product Name</label>
							<input {...register("name", { required: false, minLength: 6 })} className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Product Name" />
							{errors.name?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
							{errors.name?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 6 characters</span>}
						</div>

						<div className="mt-2">
							<label className="block text-sm text-gray-600" >Unique Code</label>
							<input {...register("code", { required: false, minLength: 4 })} className="w-full  px-2 py-1 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Unique Code" />
							{errors.code?.type === "required" && <span className="label-text-alt capitalize text-red-600">this field is required</span>}
							{errors.code?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 4 characters</span>}
						</div>


						<div className="mt-2">
							<label className=" block text-sm text-gray-600" >Sort Description</label>
							<input {...register("sortDescription", { required: false })} className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Sort Description" />
							{errors.sortDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
						</div>


						<div className="mt-2">
							<label className="text-sm block text-gray-600" >Long Description</label>
							<input {...register("longDescription", { required: false })} className="w-full px-5  py-4  text-gray-700 bg-gray-200 rounded" type="text" placeholder="Long Description" />
							{errors.longDescription?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}

						</div>

						<div className="inline-block mt-2 w-1/2 pr-1">
							<label className="block text-sm text-gray-600" >Price</label>
							<input {...register("price", { required: false, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Price" />
							{errors.price?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
							{errors.price?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
						</div>

						<div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
							<label className="block text-sm text-gray-600" >Discount</label>
							<input {...register("discount", { required: false, minLength: 2 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Discount" />
							{errors.discount?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
							{errors.discount?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 2 characters</span>}
						</div>

						<div className="">
							<label className="block text-sm text-gray-600" >Select Category</label>
							<select
								className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
								{...register("category", { required: false, })}>
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
								{...register("type", { required: false, })}>
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

						<div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
							<div className="inline-block mt-2  ">
								<label className="block text-sm text-gray-600" >Color (optional) </label>
								<input {...register("color", { required: false, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="text" placeholder="Color" />
								{errors.color?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
								{errors.color?.type === "minLength" && <span className="label-text-alt capitalize text-red-600">at lest 1 characters</span>}
							</div>

							<div className="inline-block mt-2 ">
								<label className="block text-sm text-gray-600" >Quantity </label>
								<input {...register("quantity", { required: false, minLength: 1 })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" type="number" placeholder="Quantity" />
								{errors.quantity?.type === "required" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">This field is required</span>}
								{errors.quantity?.type === "minLength" && <span className="inline-block ml-2 label-text-alt capitalize text-red-600">at lest 1 characters</span>}
							</div>
						</div>

						<div className="mt-2">
							<label className="text-sm block text-gray-600" >Product Images</label>
							<input multiple type="file" {...register("productImage", { required: false })} className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" placeholder="Product Images" />
							{errors.productImage?.type === "required" && <span className="label-text-alt capitalize text-red-600">This field is required</span>}
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

export default UpdateModal;