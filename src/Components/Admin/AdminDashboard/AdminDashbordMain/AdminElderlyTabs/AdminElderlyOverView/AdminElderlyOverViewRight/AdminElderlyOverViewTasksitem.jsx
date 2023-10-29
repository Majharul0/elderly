import { Icon } from '@iconify/react'
import { IconButton } from '@mui/material'
import { Tooltip } from 'antd'
import React, { useState } from 'react'
import AdminElderlyOverViewEditTask from './AdminElderlyOverViewEditTask'
import DeleteDialog from '../../../../../../../Shared/Delete/DeleteDialog'

const AdminElderlyOverViewTasksitem = ({ item }) => {

    const [open,setOpen] = useState(false)
    const [deleteItem,setDeleteItem]=useState(false)


    const deleteTask = ()=>{
        setDeleteItem(false)
    }

    return (
        <div className=' bg-[#F5F5F5] p-4'>
            <div className=' flex items-center gap-2'>
                <div className='w-[30px] h-[30px] flex items-center justify-center rounded-[10px] bg-[#F8EEEC]'>
                    <Icon icon="ri:alert-line" className='text-[16px] text-[#FF974C]' />
                </div>
                <p className='text-[16px] font-[500] text-secondary'>{item.title}</p>
            </div>
            <div className=' flex items-center justify-between gap-2'>
                <div className='flex items-center gap-1 w-[125px] h-[8px] bg-[#E7E8EA] mt-3 rounded-[10px] overflow-hidden'>
                    {
                        item.action.map((item, i) => (
                            <div key={i} className='w-[40px] h-[8px] bg-primary'> </div>
                        ))
                    }
                </div>
                <div>
                    <Tooltip placement="top" title={"comment"}>
                        <IconButton>
                            <Icon icon="ri:message-2-line" className='text-[20px] text-[#FF974D]' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip placement="top" title={"Edit"}>
                        <IconButton onClick={()=>setOpen(true)}>
                            <Icon icon="basil:edit-outline" className='text-[20px] text-[#0070F0]' />
                        </IconButton>
                    </Tooltip>
                    <Tooltip placement="top" title={"Delete"}>
                        <IconButton onClick={()=>setDeleteItem(true)}>
                            <Icon icon="basil:trash-alt-outline" className='text-[20px] text-[#FF4D4D]' />
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
            {/* ===========Edit task modal======== */}
            <AdminElderlyOverViewEditTask open={open} setOpen={setOpen} data={item.title} />
            {/* ===========Delete task modal======== */}
            <DeleteDialog open={deleteItem} setOpen={setDeleteItem} onDelete={deleteTask} title={"Are you sure to delete this Task? This"} title2={" process is irreversible."}/>
        </div>
    )
}

export default AdminElderlyOverViewTasksitem