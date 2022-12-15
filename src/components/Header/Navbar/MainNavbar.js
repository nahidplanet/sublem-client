import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const MainNavbar = ({ data }) => {
    return (
        <div className=''>
            <div className="dropdown dropdown-hover ">
                <div className='flex justify-center items-center '>
                    <Link to={`/${data.route}`}>
                        <label tabIndex={0} className=" m-1 lg:text-lg cursor-pointer capitalize">{data.category}</label>
                    </Link>
                    <ChevronDownIcon className='w-4 h-4 ml-1'></ChevronDownIcon>
                </div>
                <ul tabIndex={0} className="dropdown-content capitalize menu p-2 bg-white w-52 absolute border-none rounded-none shadow-none">
                    {
                        data?.routes.map((route, index) => <li key={index}><Link  to={`/${data.route}/${route.route}`}>{route.name}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default MainNavbar;