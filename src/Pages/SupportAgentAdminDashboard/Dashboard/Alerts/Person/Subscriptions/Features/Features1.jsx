import React from 'react';
// import { Switch } from 'antd';
import { Icon } from '@iconify/react';
import { Switch } from '@mui/material';

const Features1 = ({ data, plan }) => {
    const handleToggle = (checked) => {
        console.log(`switch to ${checked}`);
      };
    return (
        <div>
            {plan === 'essential Plan' ? '' : <div className='px-7 py-5 mb-5 flex justify-between border border-primary rounded-[10px] bg-[#e6f1fe]'>
                <h1 className="text-primary font-bold text-lg flex items-center">Upgrade to Standard and Unleash Powerful New Features!</h1>
                <button className='bg-primary flex items-center text-white px-3 rounded-[10px] py-2'><Icon className='mr-2' icon="basil:lightning-outline" />Upgrade</button>
            </div>}

            <div className='mb-5'>
                <h1 className='text-black font-bold text-lg'>Features</h1>
                <p className='text-secondary text-sm'>Everything in our {plan}</p>
            </div>
            <div className='px-5 grid lg2:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 gap-x-7'>
                {data?.map((d,index) => <div key={index} className='flex justify-between text-secondary items-center font-medium py-4 border-b'>
                    <div className='mr-2'>{d?.title}</div>
                    <div className='flex items-center'><p className='mr-5'>{d?.dolar}</p>
                    {/* <Switch 
                    size="small" defaultChecked={d.value} onChange={handleToggle}/> */}
                    <Switch defaultChecked={d.value} onChange={handleToggle} color="secondary" />
                    
                    </div>
                </div>)}
            </div>
        </div>

    );
};

export default Features1;