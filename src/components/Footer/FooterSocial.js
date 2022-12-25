import React from 'react';
import facebook from "../../assets/icon/facebook.svg";
import twitter from "../../assets/icon/twitter.svg";
import instagram from "../../assets/icon/instagram.svg";
import youtube from "../../assets/icon/youtube.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import whatsapp from "../../assets/icon/whatsapp.svg";

const FooterSocial = ({item}) => {
	console.log(item);
	
	return (
		<div className="grid lg:grid-cols-3 grid-cols-6 lg:w-3/12 p-5 ">
                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={item?.facebook} target="_blank">
                                    <img className='w-full h-full mx-auto' src={facebook} alt="facebook" />
                                </a>
                            </div>

                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={item?.twitter} target="_blank">
                                    <img className='w-full h-full mx-auto' src={twitter} alt="facebook" />
                                </a>
                            </div>
                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={item?.youtube} target="_blank">
                                    <img className='w-full h-full mx-auto' src={youtube} alt="facebook" />
                                </a>
                            </div>

                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={`https://wa.me/${item?.whatsApp
}`}
                                    className="whatsapp_float"
                                    target="_blank"
                                    rel="noopener noreferrer" >
                                    <img className='w-full h-full mx-auto' src={whatsapp} alt="facebook" />
                                </a>
                            </div>
                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={item?.linkedin} target="_blank">
                                    <img className='w-full h-full mx-auto' src={linkedin} alt="facebook" />
                                </a>
                            </div>
                            <div className='w-10 h-10 rounded-full p-2 hover:bg-gray-200 cursor-pointer  border '>
                                <a href={item?.instagram} target="_blank">
                                    <img className='w-full h-full mx-auto' src={instagram} alt="facebook" />
                                </a>
                            </div>
                        </div>
	);
};

export default FooterSocial;