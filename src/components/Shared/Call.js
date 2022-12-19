import React from 'react';
import call from '../../assets/icon/call.png'
const Call = () => {
	return (
		<div className='w-[60px] h-[60px] border-2 bg-white shadow-xl rounded-full right-3 bottom-5  z-50  fixed'>
			 <a href={`tel:${+971562572168}`}>{<img className='w-15 h-15' src={call} alt="call" />}</a>
			
		</div>
	);
};

export default Call;