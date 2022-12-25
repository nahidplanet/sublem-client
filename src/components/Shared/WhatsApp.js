import React from 'react';
import whatsapp from '../../assets/icon/whatsapp.svg'

const WhatsApp = () => {
    return (
        <div className='shadow-xl bg-[#33A867] border-white border-3 outline-1 w-15 h-15 left-3  p-2 rounded-full  bottom-5  z-50  fixed'>
            <a
                href="https://wa.me/+971562572168"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
            ><img className='w-full h-full' src={whatsapp} alt="whatsapp" />
            </a>

        </div>
    );
};

export default WhatsApp;