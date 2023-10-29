import { Icon } from '@iconify/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SupportAgentAlertsProgress = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className='py-[22px]'>
        <div className='px-[22px]'>
            <h2 className=' text-[23px] text-secondary font-[500]'>Alerts In Progress</h2>
        </div>
        <div className='py-2 bg-[#F5F5F5] mt-3 px-[22px]'>
            <h3 className=' text-[16px] text-secondary font-[500]'>Today</h3>
        </div>
        <div className='flex flex-col items-start justify-between w-full gap-[34px] mt-5 px-[22px]'>

            {
                data.slice(0,7).map((row,i)=>{
                    return(
                    <div key={i} onClick={()=>navigate(`/support-agent/dashboard/user/${row.id}`)} className='flex md:items-center cursor-pointer justify-between md:flex-row  flex-col w-full gap-7'>
                        <div className='flex items-start gap-2'>
                        {
                            row.alert==="alert" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF5959]/10`}>
                                <Icon icon="ant-design:alert-outlined" className="text-[20px] text-[#FF5959]"/>
                                </div>
                            )
                        }
                        {
                            row.alert==="warning" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF974D]/10`}>
                                <Icon icon="ri:alert-line" className="text-[20px] text-[#FF974D]"/>
                                </div>
                            )
                        }
                        {
                            row.alert==="bug" && (
                                <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#5973FF]/10`}>
                                <Icon icon="ant-design:bug-outlined" className="text-[20px] text-[#5973FF]"/>
                                </div>
                            )
                        }
                            <div>
                                <h3 className='text-[16px] font-[500] text-[#3D4854]'>{row.title}</h3>
                                <p className='text-[13px] font-[400] text-secondary'>{row.name} <span className='font-[500]'>#{row.id}</span></p>
                            </div>
                        </div>
                        <div className='w-[80px] flex items-center justify-end'>
                            <span className='text-[11px] font-[500] text-[#90969D]'>{row.time}</span>
                        </div>
                    </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default SupportAgentAlertsProgress