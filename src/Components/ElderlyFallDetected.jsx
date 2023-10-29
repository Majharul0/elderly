import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const ElderlyFallDetected = () => {
    const [data, setData] = useState('')
    const handleClose = (e) => {
        setData(e)
    }
    return (
        <div>
            <div className={`mt-5 border border-red-500 flex xl:items-center md:items-center justify-between rounded-[10px] bg-[#FFF7F7] p-6 ${data === 'close' ? "hidden" : ''}`}>
                <div>
                    <div className='text-lg font-bold text-black flex items-center'><Icon className="mr-2" icon="mingcute:alert-line" /><h1 >Elderly Fall Detected!</h1></div>
                    <div className='flex items-center my-2 '>
                        <button className='mr-1.5 text-[#FF5959] text-sm font-medium px-1.5 py-1 rounded-[10px] bg-[#FFDFDF]'>Critical</button>
                        <button className='mr-1.5 text-[#FF5959] text-sm font-medium px-1.5 py-1 rounded-[10px] bg-[#FFDFDF]'>Living Room</button>
                    </div>
                    <p className='text-[#3D4854] text-sm'>An elderly person has fallen. Please check on them immediately.</p>
                </div>
                <div onClick={() => handleClose('close')} className='cursor-pointer'><Icon icon="radix-icons:cross-2" /></div>
            </div>
        </div>
    );
};

export default ElderlyFallDetected;