import React from 'react'
import { Divider } from '@mui/material'
import TestAudio from './TestAudio'

const AdminElderlyOverViewLeftCallAudioPlayer = ({data}) => {
  return (
    <div>
        <div className='flex flex-col gap-5'>

            {
                data.map((item,i)=>(
                    <div key={i}>
                        <div className='flex items-center gap-1'>
                            <h2 className='text-[16px] font-[500] text-[#0D1A29]'>{item.title}</h2>
                            <div className='w-[5px] h-[5px] bg-gray-400 rounded-full'></div>
                            <span className='text-[13px] font-[500] text-secondary'>{item.time}</span>
                        </div>
                        {/* <AdminElderlyOverViewLeftCallAudio item={item}/> */}
                        <TestAudio item={item}/>
                        <div className='mt-3'>
                            <Divider />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default AdminElderlyOverViewLeftCallAudioPlayer