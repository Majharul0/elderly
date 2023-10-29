import React, { useState } from 'react';
import { Switch } from 'antd';
import SearchInput from '../../../../../../../Shared/Search/SearchInput';
const NotificationsSetting = () => {
    const [search,setSearch]=useState('')
    return (
        <div className='sm:mt-6 md:mt-6 lg2:mt-0 p-6 rounded-[10px] bg-white '>
            <div className="md:flex items-center justify-between lg2:flex gap-2">
                <div>
                    <h1 className="text-[#3D4854] text-2xl font-medium" >Notification Settings</h1>
                    <p className='text-[#5D6670] text-lg'>Select the kind of notification you want to show the customers about their activities </p>
                </div>
                <div className='sm:mt-4 lg2:mt-0 md:mt-0'>
                <SearchInput  search={search} setSearch={setSearch}/>
                </div>
            </div>
            {/* ----------Email Notifications----------- */}
            <div className='mt-14'>
                <div>
                    <h1 className='text-[#3D4854] font-bold text-[19px]'>Email Notifications</h1>
                </div>
                <div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>News and Updates</h1>
                            <p className='text-[#5D6670] text-lg'>News about product and feature updates</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>

                    </div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>Tips and tutorials</h1>
                            <p className='text-[#5D6670] text-lg'>Tips on getting more out of untitled</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>

                    </div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>User research</h1>
                            <p className='text-[#5D6670] text-lg'>Get involved in our beta testing program or participate in paid product user research.</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>

                    </div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>Comments</h1>
                            <p className='text-[#5D6670] text-lg'>Comments on your activities and trends.</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>

                    </div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>Reminders</h1>
                            <p className='text-[#5D6670] text-lg'>These are notifications to remind to do your task on time.</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>

                    </div>
                </div>

            </div>

            {/* ----------Push Notifications----------- */}
            <div className='mt-14'>
                <div>
                    <h1 className='text-[#3D4854] font-bold text-[19px]'>Push Notifications</h1>
                </div>
                <div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>Comments</h1>
                            <p className='text-[#5D6670] text-lg'>Comments on your activities and trends.</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>
                    </div>
                    <div className=' border-b flex justify-between py-5 gap-1'>
                        <div>
                            <h1 className='text-[#3D4854] font-medium text-lg'>Reminders</h1>
                            <p className='text-[#5D6670] text-lg'>These are notifications to remind to do your task on time.</p>
                        </div>
                        <div className='flex items-center'>
                            <Switch size="small" defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationsSetting;