import React, { useState } from 'react';
import img from '../../../../assets/admin/supportAgentCover.png'
import user from '../../../../assets/admin/agentUser.png'
import MainButton from '../../../../Shared/Button/MainButton';
import SupportAgentResetPassword from '../AdminDrawer/SupportAgentResetPassword';
import { Icon } from '@iconify/react';

const SupportAgentProfileCover = ({ userData }) => {

  const [resetDrawer, setResetDrawer] = React.useState(false); 
  const [selectedImage, setSelectedImage] = useState(null); 

  return (
    <div>
      <div className='bg-[#F8F8F8] mt-4 '>
        <div className='profile-container'>
          <div className="cover relative w-full bg-primary lg:bg-transparent py-5 px-5 lg:py-0 lg:px-0">
            <div className=' hidden lg:block'>
              <img className='w-full h-52 object-cover rounded-t-xl' src={img} alt="" />
            </div>
            <div className='lg:absolute sm:bottom-[-60px] bottom-[-100px] lg:pl-10 pl-5 flex lg:items-center items-start lg:flex-row flex-col  gap-[15px]  w-full'>
              <div className="profile w-36  ">
                <div className='w-[150px] relative h-[150px] border-[3px] border-white rounded-full'>
                  <img className='w-full h-full object-cover rounded-full' src={selectedImage ? URL.createObjectURL(selectedImage) :user} alt="user.png" />
                  <label htmlFor='sssss' className=' border-2 absolute bottom-[10px] right-[15px] border-white w-[30px] h-[30px] flex items-center justify-center rounded-full bg-primary'>
                  <Icon icon="uil:camera" className="text-[20px] text-white"/>
                    <input id='sssss' onChange={(e)=>setSelectedImage(e.target.files[0])} type="file" className='w-full h-full hidden cursor-pointer' />
                  </label>
                </div>
              </div>
              <div className='mt-5  w-full'>
                <div className='flex lg:items-center items-start flex-col lg:flex-row  justify-between'>
                  <div className='mb-3'>
                    <h6 className='sm:text-[28px] text-xl font-[700] text-white'>{userData?.firstName} {userData?.lastName}</h6>
                    <p className='text-[16px]  font-medium text-[#E6F1FE] mt-[5px]'>{userData?.email}</p>
                  </div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex gap-10 items-center flex-wrap mt-3'>
                    <div className=''>
                      <h1 className='font-[700] text-[#263238] mb-0 pb-0 text-[19px]'>{userData?.Rating}</h1>
                      <p className='p-0 m-0 text-[#5D6670] font-medium text-[13px]'>Rating</p>
                    </div>
                    <div className=''>
                      <h1 className='font-[700] text-[#263238] mb-0 pb-0 text-[19px]'>{userData?.ClosedCases}</h1>
                      <p className='p-0 m-0 text-[#5D6670] font-medium text-[13px]'>Closed Cases</p>
                    </div>
                    <div className=''>
                      <h1 className='font-[700] text-[#263238] mb-0 pb-0 text-[19px]'>{userData?.Comments}</h1>
                      <p className='p-0 m-0 text-[#5D6670] font-medium text-[13px]'>Comments</p>
                    </div>
                  </div>
                  <div className='mr-5 mt-3'>
                    <MainButton title={"Set New Password"} onSubmit={()=>setResetDrawer(true)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='profile-container hidden lg:block h-[74px]  bg-white rounded-b-xl' />
        </div>

      </div>
      {/* =========Support Agent Reset Password modal start=========*/}
      <SupportAgentResetPassword creactDrawer={resetDrawer} setCreactDrawer={setResetDrawer} />
      {/* =========Support Agent Reset Password modal end=========*/}
    </div>
  );
};

export default SupportAgentProfileCover;