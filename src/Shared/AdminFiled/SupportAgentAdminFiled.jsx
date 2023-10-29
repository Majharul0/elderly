import { Avatar } from '@mui/material'
import React from 'react'
import { stringAvatar } from '../imageFuncation/imageFuncation'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'



const SupportAgentAdminFiled = ({ data }) => {

    const navigate = useNavigate()

    return (
        <Tooltip title='View Profile'>
            <div onClick={() => navigate(`/admin/dashboard/Support-Agents/${data.id}`)} className='flex items-center gap-2 w-full cursor-pointer' >
                <div>
                    <Avatar {...stringAvatar(data.firstName + " " + data.lastName)} variant="rounded" />
                </div>
                <div>
                    <h3 className='text-[16px] text-[#5D6670] font-[500]'>{data.firstName + " " + data.lastName}</h3>
                    <p className=' text-[13px] font-[400] text-[#5D6670]'>{data.email}</p>
                </div>
            </div >
        </Tooltip >
    )
}

export default SupportAgentAdminFiled