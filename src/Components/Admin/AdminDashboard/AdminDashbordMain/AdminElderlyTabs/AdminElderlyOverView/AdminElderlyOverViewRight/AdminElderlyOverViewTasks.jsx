import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import AdminElderlyOverViewTasksitem from './AdminElderlyOverViewTasksitem'
import AdminElderlyOverViewCreateTask from './AdminElderlyOverViewCreateTask'
import MainButton from '../../../../../../../Shared/Button/MainButton'

const AdminElderlyOverViewTasks = () => {
  const [show,setShow] = useState(false)
  const [data,setData]=useState([
    {
      id:1,
      title:"Taking Medicine Three Times",
      action:[1,2]
    },
    {
      id:2,
      title:"Change a bettery in sensor in living room",
      action:[]
    },
  ])



  return (
    <div className='p-5'>
        <div className='flex items-center justify-between gap-3'>
            <h2 className='text-[23px] font-[500] text-secondary'>
                Tasks
            </h2>
            <MainButton onSubmit={()=>setShow(true)} icon={<Icon icon="mingcute:add-fill" className='text-[16px]'/>} title={"Add Task "}/>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
            {
              data.map((item,i)=>{
                return(
                  <AdminElderlyOverViewTasksitem item={item} key={i} />
                )
              })
            }
        </div>
        <AdminElderlyOverViewCreateTask open={show} setOpen={setShow} />
    </div>
  )
}

export default AdminElderlyOverViewTasks