import { Avatar } from '@mui/material'
import React from 'react'
import { stringAvatar } from '../imageFuncation/imageFuncation'

const AdminFiled = ({data}) => {
  return (
        <div className='flex items-center gap-2 w-full'>
            <div>
                <Avatar {...stringAvatar(data.firstName + " " + data.lastName)} variant="rounded"/>
            </div>
            <div>
                <h3 className='text-[16px] text-[#5D6670] font-[500]'>{data.firstName + " " + data.lastName}</h3>
                <p className=' text-[13px] font-[400] text-[#5D6670]'>{data.email}</p>
            </div>
        </div>
  )
}

export default AdminFiled