import { Icon } from '@iconify/react'
import React from 'react'
import SupportAgentProfileEdit from './SupportAgentProfileEdit';

const SupportAgentProfileInfo = ({ userData }) => {
    const [creactDrawer, setCreactDrawer] = React.useState(false);


    return (
        <>
            <div className='p-[22px]'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-[23px] font-[500] text-[#3D4854]'>Basic Info</h2>
                    <button onClick={()=> setCreactDrawer(true)} className='cursor-pointer text-[13px] h-[40px] font-[500] flex bg-primary text-white px-4 py-[10px] items-center gap-[5px] rounded-[10px]'>
                        Edit
                        <Icon icon="basil:edit-outline" className='text-[16px]' />
                    </button>
                </div>

                <div className='flex flex-col gap-[39px] mt-[32px]'>
                    <div>
                        <div className=' text-[16px] text-[#B4B8BD] flex items-center gap-2'>
                            <Icon icon="basil:user-outline" className='text-[20px]' />
                            <span>Full Name</span>
                        </div>
                        <h2 className='md:ml-7 text-[19px] font-[500] text-[#3D4854]'>{userData?.firstName} {userData?.lastName}</h2>
                    </div>
                    <div>
                        <div className=' text-[16px] text-[#B4B8BD] flex items-center gap-2'>
                            <Icon icon="basil:gmail-outline" className='text-[20px]' />
                            <span>Email Address</span>
                        </div>
                        <h2 className='md:ml-7 text-[19px] font-[500] text-[#3D4854]'>{userData?.email}</h2>
                    </div>
                    <div>
                        <div className=' text-[16px] text-[#B4B8BD] flex items-center gap-2'>
                            <Icon icon="solar:phone-outline" className='text-[20px]' />
                            <span>Contact Number</span>
                        </div>
                        <h2 className='md:ml-7 text-[19px] font-[500] text-[#3D4854]'>{userData?.contactNumber}</h2>
                    </div>
                    <div>
                        <div className=' text-[16px] text-[#B4B8BD] flex items-center gap-2'>
                            <Icon icon="basil:bag-outline" className='text-[20px]' />
                            <span>Business Name</span>
                        </div>
                        <h2 className='md:ml-7 text-[19px] font-[500] text-[#3D4854]'>{userData?.businessName}</h2>
                    </div>
                    <div>
                        <div className=' text-[16px] text-[#B4B8BD] flex items-center gap-2'>
                            <Icon icon="basil:map-location-outline" className='text-[20px]' />
                            <span>Business Address</span>
                        </div>
                        <h2 className='md:ml-7 text-[19px] font-[500] text-[#3D4854]'>{userData?.businessAdress}</h2>
                    </div>
                </div>
            </div>

         {/* =========Support Agent edit modal start=========*/}
        <SupportAgentProfileEdit item={userData} creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer}/>
        {/* =========Support Agent edit modal End=========*/}
        </>
    )
}

export default SupportAgentProfileInfo