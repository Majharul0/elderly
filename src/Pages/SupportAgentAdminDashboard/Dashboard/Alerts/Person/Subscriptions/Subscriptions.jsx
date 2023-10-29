import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Radio } from 'antd';
import SubscriptionsData from '../../../../../../assets/supportAgentData/DashBoardAlertsData/SubscriptionsData.json'
import Features from './Features/Features';
const Subscriptions = () => {
    const [plan, setPlan] = useState('essential Plan');
    const handlePackage = (e) => {
        console.log('package name', e);
        setPlan(e);
    };



    return (
        <div className='bg-white rounded-[10px] my-7 p-6'>
            <h1 className='text-[#3D4854] text-2xl font-medium'>Subscriptions</h1>
            <Radio.Group className='grid lg2:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-5' value={plan}>
                <div onClick={() => handlePackage('essential Plan')} className={`p-5 rounded-[10px] cursor-pointer border flex justify-between  ${plan === 'essential Plan' ? 'border-primary' : ''}`}>
                    <div>
                        <Icon className='text-secondary text-3xl mb-2' icon="radix-icons:stack" />
                        <div className='flex items-center'>
                            <h1 className='text-lg text-[#3D4854] mr-2 font-medium'>Essential Plan</h1>
                            <button className='bg-primary text-xs text-white py-0.5 px-1 font-medium rounded-[10px]'>Current Plan</button>
                        </div>
                        <p><span className='text-2xl font-bold text-secondary mr-1'>$150</span><span className='text-sm text-[#90969D]'>Per Month</span></p>
                    </div>
                    <div><Radio value={'essential Plan'}></Radio></div>
                </div>
                <div onClick={() => handlePackage('standard Plan')} className={`p-5 rounded-[10px] cursor-pointer border  flex justify-between ${plan === 'standard Plan' ? 'border-primary' : ''}`}>
                    <div>
                        <Icon className='text-secondary text-3xl mb-2' icon="ph:stack" />
                        <div className='flex items-center'>
                            <h1 className='text-lg text-[#3D4854] mr-2 font-medium'>Standard Plan</h1>
                        </div>
                        <p><span className='text-2xl font-bold text-secondary mr-1'>$270</span><span className='text-sm text-[#90969D]'>Per Month</span></p>
                    </div>
                    <div><Radio value={'standard Plan'}></Radio></div>
                </div>
                <div onClick={() => handlePackage('premium Plan')} className={`p-5 cursor-pointer rounded-[10px] border  flex justify-between ${plan === 'premium Plan' ? 'border-primary' : ''}`}>
                    <div>
                        <Icon className='text-secondary text-3xl mb-2' icon="basil:lightning-alt-outline" />
                        <div className='flex items-center'>
                            <h1 className='text-lg text-[#3D4854] mr-2 font-medium'>Premium Plan</h1>
                        </div>
                        <p><span className='text-2xl font-bold text-secondary mr-1'>$390</span><span className='text-sm text-[#90969D]'>Per Month</span></p>
                    </div>
                    <div><Radio value={'premium Plan'}></Radio></div>
                </div>
            </Radio.Group>
            <div>
                {
                    plan === "essential Plan" && <Features plan={plan} data={SubscriptionsData.filter((d) => d.category === plan)} />
                }
                {
                    plan === "standard Plan" && <Features plan={plan} data={SubscriptionsData.filter((d) => d.category === plan)} />
                }
                {
                    plan === "premium Plan" && <Features plan={plan} data={SubscriptionsData.filter((d) => d.category === plan)} />
                }

            </div>
        </div>
    );
};

export default Subscriptions;