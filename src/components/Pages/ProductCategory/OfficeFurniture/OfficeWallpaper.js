
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useQuery } from 'react-query';
import axiosInst from '../../../axios';
import Loader from '../../../Shared/Loader';
import SingleProduct from '../SingleProduct';



const OfficeWallpaper = () => {
	const [limit, setLimit] = useState(9);
	const [page, setPage] = useState(1);

	const getFacts = () => {
		const res = axiosInst.get(`/product?category=office&type=wallpaper&page=${page}&limit=${limit}`).then((response) => {
			return response
		})
		return res;
	};
	const { data, isLoading } = useQuery(['AllProducts', page, limit], getFacts);

	if (isLoading) {
		return <Loader></Loader>
	}
	const handlePageClick = (data) => {
		setPage(data.selected + 1);
	}
	return (
		<div className='min-h-screen'>
			<div className=''>
				<h1 className='capitalize text-3xl text-gray-900 text-center my-5 font-semibold'>Office Wallpaper</h1>
				<p className='text-md px-10 text-gray-900 my-3 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime earum, ipsum eum expedita rem repudiandae veniam aliquam cumque unde itaque quasi cupiditate fugiat maiores laborum quod voluptatum repellat suscipit! Pariatur dolores necessitatibus totam illum quae aut sint accusamus enim. Eum quo corrupti perspiciatis incidunt officia quas a expedita at maxime!</p>
				<div className="divider"></div>
				<div className={`${data?.data?.data?.products.length < 1 ? 'flex justify-center items-center h-screen mt-[-60px]' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
					{
						data?.data?.data?.products.length < 1 && <div className=''><h1 className='font-bold text-gray-800 text-4xl capitalize'>Product empty </h1></div>
					}
					{
						data?.data?.data?.products?.map(singleProduct => <SingleProduct key={singleProduct._id} data={singleProduct}></SingleProduct>)
					}
				</div>
				<div className={`${data?.data?.data?.products.length < 1 ? 'hidden' : 'block'}`}  >
					<div className="paginationContainer block bg-gray-50 px-3 py-1 rounded-sm">
						<ReactPaginate className='flex my-10 justify-center items-center text-gray-800 font-semibold gap-5'
							breakLabel="..."
							nextLabel="next >"
							onPageChange={handlePageClick}
							pageRangeDisplayed={3}
							pageCount={data?.data?.data?.totalPage}
							previousLabel="< previous"
							marginPagesDisplayed={2}
							// renderOnZeroPageCount={null}
							activeLinkClassName="active"
							previousLinkClassName="page-num"
							nextLinkClassName="page-num"
							containerClassName="pagination"
							pageLinkClassName='page-num'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OfficeWallpaper;