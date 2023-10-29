import React from 'react';
import { Icon } from '@iconify/react';
import img from '../../../../../../assets/user/Rectangle-4246.png'
import user from '../../../../../../assets/user/user.png'

const ProfileCover = () => {
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
                <img className='w-full rounded' src={user} alt="user.png" />
              </div>
              <div className='mt-5  w-full'>
                <div className='flex lg:items-center items-start flex-col lg:flex-row  justify-between'>
                  <div className='mb-3'>
                    <h6 className='sm:text-3xl text-xl font-extrabold text-white'>Devid Tom</h6>
                    <p className='text-lg  font-medium text-[#E6F1FE]'>Main Admin</p>
                  </div>
                  <div className='flex items-center gap-[15px] mr-5 cursor-pointer'>
                  <Icon className='bg-primary text-white text-lg' icon="basil:gmail-solid" />
                    <Icon icon="grommet-icons:skype" className='text-white text-lg'/>
                    <div className='flex bg-white text-primary px-3 py-2 text-sm items-center gap-1 rounded-[10px]'>
                    <Icon icon="fluent:call-24-regular" />
                      <p className='text-sm font-medium'>Call</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-10 items-center flex-wrap'>
                  <div className=''>
                    <h1 className='font-medium mb-0 pb-0 text-lg'>Male</h1>
                    <p className='p-0 m-0 text-[#5D6670] font-medium text-sm'>Gender</p>
                  </div>
                  <div className=''>
                    <h1 className='font-medium mb-0 pb-0 text-lg'>12/06/1996</h1>
                    <p className='p-0 m-0 text-[#5D6670] font-medium text-sm'>Birthday</p>
                  </div>
                  <div className=''>
                    <h1 className='font-medium mb-0 pb-0 text-lg'>Programmer</h1>
                    <p className='p-0 m-0 text-[#5D6670] font-medium text-sm'>Profession</p>
                  </div>
                  {/* <div className=''>
                    <h1 className='font-medium mb-0 pb-0 text-lg'>B+</h1>
                    <p className='p-0 m-0 text-[#5D6670] font-medium text-sm'>Blood Group</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='profile-container hidden lg:block h-20  bg-white rounded-b-xl' />
        </div>

      </div>
    </div>
  );
};

export default ProfileCover;