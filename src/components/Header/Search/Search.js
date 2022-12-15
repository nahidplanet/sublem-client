import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
    return (
        <div className='block lg:p-0 p-5'>
            <div className='flex justify-center items-center '>
                <input type="text" placeholder="What are you looking for?" className="input input-bordered border-black  input-md w-full lg:w-[300px] bg-white border-r-0 rounded rounded-r-none " />
                <button className='border  lg:w-[40px] border-l-0 mt-[10px] bg-gray-900 text-white  border-black rounded rounded-l-none'>
                    <MagnifyingGlassIcon className='w-5 h-[46px] mx-2 ' />
                </button>
            </div>
        </div>
    );
};

export default Search; 