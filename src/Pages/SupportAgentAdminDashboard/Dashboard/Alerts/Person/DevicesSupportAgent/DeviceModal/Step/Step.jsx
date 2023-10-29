import React, { useEffect, useState } from 'react';
import { Steps } from 'antd';
import { Icon } from '@iconify/react';
import RotateSearch from '../../../../../../../../Components/RotateSearch';
import doneIcon from '../../../../../../../../assets/doneIcon.svg'

const Step = () => {
    const [syncingStatus, setSyncingStatus] = useState('wait')
    const [initializingStatus, setInitializingStatus] = useState('wait')
    const [done, setDone] = useState(false)

    const items = [
        {
            title:<span className='font-bold text-primary'>Scanning</span>,
            status: 'finish',
            icon:<div className='h-[25px] w-[25px] rounded-full bg-primary'><Icon className=' text-white flex items-center' icon="material-symbols:done"  /></div>
        },
        {
            title: <span className={`font-bold ${syncingStatus==='finish'? 'text-primary':'text-[#B4B8BD]'}`}>Syncing</span>,
            status: syncingStatus,
            icon:<div  className={`h-[25px] w-[25px] rounded-full ${syncingStatus==='finish'?'bg-primary':'bg-[#B4B8BD]'}`} > <Icon className='text-white flex items-center' icon="material-symbols:done"  /></div>
        },
        {
            title: <span className={`font-bold ${initializingStatus==='finish'?'text-primary':'text-[#B4B8BD]'}`}>Initializing</span>,
            status: initializingStatus,
            icon:<div  className={`h-[25px] w-[25px] rounded-full ${initializingStatus==='finish'?'bg-primary':'bg-[#B4B8BD]'}`} > <Icon className='text-white flex items-center' icon="material-symbols:done"  /></div>
        }
    ];
    useEffect(() => {
        const syncingTimeout = setTimeout(() => {
            setSyncingStatus('finish');
        }, 3000);
        const initializingTimeout = setTimeout(() => {
            setInitializingStatus('finish');
        }, 5000);
        const doneTimeout = setTimeout(() => { 
            setDone(true);
        }, 7000);
        return () => {
            clearTimeout(syncingTimeout, initializingTimeout, doneTimeout);
        };
    }, []);

    return (
        <div>
            {done ? (<div>
                <div className='relative'>
                    <div className='mb-[95px] flex justify-center'><img src={doneIcon} alt="" /></div>
                    <h1 className='font-bold text-black text-3xl text-center'>Done !</h1>
                    <p className='mb-[87px] text-lg text-secondary text-center'>Successfully  <span className='text-black font-bold'>Xunison Hub D50</span> is Added.</p>
                </div>
            </div>) : (<div>
                <div className='w-full xl2:mx-[112px]'>
                    <div className='mb-[35px] flex justify-center relative'><RotateSearch /><div className='flex items-center bg-[#E8F2FE] h-14 w-14 rounded-full absolute top-[84px] xl2:right-[240px]'><Icon className='text-primary ml-4 text-2xl text-center' icon="material-symbols:cloud" /></div></div>
                    <h1 className='font-bold text-black text-xl text-center'>Adding Device</h1>
                    <p className='text-sm text-secondary text-center'>Ensure your device is in <span className='text-primary'>pairing mode.</span></p>
                </div>
                <div className='mt-[136px] mb-[110px] w-[550px] mx-auto '>
                    <Steps items={items} labelPlacement="vertical"></Steps>
                </div>
            </div>)}
        </div>
    );
};

export default Step;