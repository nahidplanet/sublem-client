import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';

import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Search = () => {

    const [search, setSearch] = useState(null);
    const [result, setResult] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/search?search=${search}`)
            .then(res => res.json())
            .then(data => {
                if (data.status) {
                    setResult(data?.data?.result)
                }
            })
    }, [search])
 

    const handleNavigate = (id) => {
        console.log(id);
        navigate(`/home-category/${id}`)
    }
    return (
        <>
            <div>

                <div className='block lg:p-0 p-5 bg-white text-black'>
                    <div className='flex justify-center items-center relative'>
                        <input  onBlur={() => setOpen(!open)} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="What are you looking for?" className="input input-bordered border-black  input-md w-full lg:w-[300px] bg-white border-r-0 rounded rounded-r-none " />
                        <button className='border  lg:w-[40px] border-l-0 mt-[10px] bg-gray-900 text-black  border-black rounded rounded-l-none'>
                            <MagnifyingGlassIcon className='w-5 h-[46px] mx-2 text-white' />
                        </button>
                    </div>
                </div>

                {open && <ul className='absolute bg-white text-black right-15 top-30 shadow-xl border  z-50 gray-400 w-[320px]'>
                    {result?.map((item, index) => <li key={index} >
                        <p onClick={() => handleNavigate(item._id)} className='border-y px-4 cursor-pointer py-3'>{item?.name}</p>
                    </li>)}
                </ul>}
            </div>

        </>
    );
};

export default Search; 