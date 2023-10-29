import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import Sort2 from '../../../../../../../Shared/Sort/Sort2'
import AdminElderlyOverViewLeftResolvingAlarmsDialog from './AdminElderlyOverViewLeftResolvingAlarmsDialog'
import { ResolvedAlarms } from '../../../../../../../assets/admin/overview'
import MainButton from '../../../../../../../Shared/Button/MainButton'
import AdminElderlyOverViewLeftResolve from './AdminElderlyOverViewLeftResolve'

const AdminElderlyOverViewLeftResolvingAlarms = () => {
    const [open,setOpen] = useState(false)
    const [show,setShow] = useState(false)

  return (
    <div className='py-[22px]'>
        <div className='flex items-center justify-between flex-wrap gap-2 px-[22px]'>
            <h2 className='text-[23px] font-[500] text-[#0D1A29]'>Resolving Alarms</h2>
            <span onClick={()=>setShow(true)} className='text-[16px] font-[500] text-primary cursor-pointer'>Resolved Alarms</span>
        </div>
        <div className='px-[22px] mt-[30px]'>
            <div className='flex items-center justify-between'>
                <div className='w-[30px] h-[30px] bg-[#E6F1FE] rounded-[10px] flex items-center justify-center'>
                    <Icon icon="bi:sun" className='text-[20px] text-primary'/>
                </div>
                <MainButton title="Resolve" onSubmit={()=>setOpen(true)}/>
            </div>
            <div className='mt-3'>
                <div className='flex md:items-center md:gap-3 flex-col md:flex-row'>
                    <h2 className='text-[16px] font-[500] text-secondary'>Bedtime: Hasn’t gone to bed yet</h2>
                    <span className='text-[12px] font-[600] text-secondary'>02:30 am - 07/05/23</span>
                </div>
                <p className='text-[14px] font-[400]'>It appears you are up very late tonight. Because late...</p>
            </div>
        </div>
        <div className='w-full h-[1px] bg-gray-300 mt-5'></div>
        <div className='px-[22px] mt-5'>
            <div className='flex items-center justify-between'>
                <div className='w-[30px] h-[30px] bg-[#E6F1FE] rounded-[10px] flex items-center justify-center'>
                    <Icon icon="bi:sun" className='text-[20px] text-primary'/>
                </div>
                <MainButton title="Resolve" onSubmit={()=>setOpen(true)}/>
            </div>
            <div className='mt-[16px]'>
                <div className='flex md:items-center md:gap-3 flex-col md:flex-row'>
                    <h2 className='text-[16px] font-[500] text-secondary'>Bedtime: Hasn’t gone to bed yet</h2>
                    <span className='text-[12px] font-[600] text-secondary'>02:30 am - 07/05/23</span>
                </div>
                <p className='text-[14px] font-[400]'>It appears you are up very late tonight. Because late...</p>
            </div>
        </div>
        {/* ========view alerm all========= */}
        <AdminElderlyOverViewLeftResolvingAlarmsDialog open={show} setOpen={setShow} tableData={ResolvedAlarms}/>
        {/* ========Resolving Message========= */}
        <AdminElderlyOverViewLeftResolve open={open} setOpen={setOpen}/>
    </div>
  )
}

export default AdminElderlyOverViewLeftResolvingAlarms
