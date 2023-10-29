import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import AdminElderlyOverViewLeftCallAudioPlayer from './AdminElderlyOverViewLeftCallAudioPlayer'
import AdminElderlyOverViewLeftCallDIalog from './AdminElderlyOverViewLeftCallDIalog'

const AdminElderlyOverViewLeftCall = () => {

    const [show,setShow]=useState(false)
    const data = [
        {
            id:1,
            title:"Elderly",
            time:"02:30 am - 07/05/23",
        },
        {
            id:2,
            title:"Family",
            time:"02:30 am - 07/05/23",
        },
        {
            id:3,
            title:"911",
            time:"02:30 am - 07/05/23",
        },
        {
            id:1,
            title:"Elderly",
            time:"02:30 am - 07/05/23",
        },
        {
            id:2,
            title:"Family",
            time:"02:30 am - 07/05/23",
        },
        {
            id:3,
            title:"911",
            time:"02:30 am - 07/05/23",
        },
        {
            id:2,
            title:"Family",
            time:"02:30 am - 07/05/23",
        },
        {
            id:3,
            title:"911",
            time:"02:30 am - 07/05/23",
        },
    ]

  return (
    <>
            <div className='px-[22px] py-[22px]'>
        <div>
            <h2 className='text-[23px] font-[500] text-[#0D1A29]'>Kari Daughetry <span className='text-[#5D6670]'>#453453</span></h2>
            <div className='flex items-center gap-1 text-secondary'>
                <Icon icon="mi:location" />
                <p className='text-[13px] font-[500]'>Woodside StreetTecumseh, SallyCape</p>
            </div>
        </div>
        <div className='flex items-center justify-between gap-2 flex-col md:flex-row w-full mt-[30px]'>
            <button className=' text-white flex items-center gap-1 justify-center rounded-lg py-2 px-0 w-full bg-primary text-[13px] font-[500]'>
                <Icon icon="solar:phone-outline" className='text-[18px]'/>Call To Elderly
            </button>
            <button className=' text-white flex items-center justify-center gap-1 rounded-lg py-2 px-2 w-full bg-primary text-[13px] font-[500]'>
                <Icon icon="solar:phone-outline" className='text-[18px]'/>Call To Family
            </button>
            <button className=' text-white flex items-center justify-center gap-1 rounded-lg py-2 px-2 w-full bg-[#FF2727] text-[13px] font-[500]'>
                <Icon icon="solar:phone-outline" className='text-[18px]'/> Call To911
            </button>
        </div>
        <div className='flex items-center justify-between mt-[47px]'>
            <h2 className='text-[19px] font-[500] text-[#0D1A29]'>Location</h2>
        </div>

        <div className='mt-5 rounded-md overflow-hidden'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
            width="100%"
            height="180"
            className="border-0 w-100"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='user map'
          ></iframe>
        </div>

        <div className='flex items-center justify-between mt-[47px]'>
            <h2 className='text-[19px] font-[500] text-[#0D1A29]'>Call History</h2>
            <span onClick={()=>setShow(true)} onFocus={ () => {} } className='text-[16px] font-[500] cursor-pointer text-primary'>See All</span>
        </div>

        <div className='mt-5'>
            <AdminElderlyOverViewLeftCallAudioPlayer data={data.slice(0,3)}/>
        </div>

    </div>
            {/* call dialoge */}
            {show && <AdminElderlyOverViewLeftCallDIalog open={show} setOpen={setShow} data={data}/>}
    </>
  )
}

export default AdminElderlyOverViewLeftCall