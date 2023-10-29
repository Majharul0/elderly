import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const AdminElderlyOverViewLeftGood = ({data}) => {

    const [show,setShow] = useState("")

    useEffect(()=>{
        const criticalValue = parseInt(data?.CRITICAL);
        const warningValue = parseInt(data?.WARNING);
        const problemValue = parseInt(data?.PROBLEM);

        if (criticalValue > warningValue && criticalValue > problemValue) {
            setShow("CRITICAL")
        } else if (warningValue > criticalValue && warningValue > problemValue) {
            setShow("WARNING")
        } else if (problemValue > criticalValue && problemValue > warningValue) {
            setShow("PROBLEM")
        } else {
            setShow("All")
        }
    },[data])

    console.log(show)

    /* 
    
    critical < warning > problem ====== warning
    warning < critical > problem ====== critical
    */

  return (
        <>
            {
                data ? (
                    <div className='p-[22px]'>
                    <div className='flex items-center gap-2'>
                            { show === "CRITICAL" && 
                                <div className='flex items-center gap-4 w-full'>
                                    <div className='w-[77px] h-[77px] flex items-center justify-center'>
                                    <div className='all__good1'>
                                        <Icon icon="ant-design:alert-outlined" className=' text-white text-[20px]'/>
                                    </div>
                                    </div>
                                    <div>
                                        <h2 className='text-[22px] font-[600] text-[#0D1A29]'>CRITICAL</h2>
                                        <p className='text-[14px] font-[400] text-secondary'>Some has last seen near the kitchen and living room</p>
                                    </div>
                                </div>
                            }
                            {
                                show === "WARNING" &&
                                <div className='flex items-center gap-4 w-full'>
                                    <div className='w-[77px] h-[77px] flex items-center justify-center'>
                                    <div className='all__good2'>
                                        <Icon icon="octicon:alert-16" className=' text-white text-[20px]'/>
                                    </div>
                                    </div>
                                    <div>
                                        <h2 className='text-[22px] font-[600] text-[#0D1A29]'>WARNING</h2>
                                        <p className='text-[14px] font-[400] text-secondary'>Some has last seen near the kitchen and living room</p>
                                    </div>
                                </div>
                                
                            }
                            {
                                show === "PROBLEM" &&
                                <div className='flex items-center gap-4 w-full'>
                                    <div className='w-[77px] h-[77px] flex items-center justify-center'>
                                    <div className='all__good3'>
                                        <Icon icon="ant-design:bug-outlined"  className=' text-white text-[20px]'/>
                                    </div>
                                    </div>
                                    <div>
                                        <h2 className='text-[22px] font-[600] text-[#0D1A29]'>All Good</h2>
                                        <p className='text-[14px] font-[400] text-secondary'>Some has last seen near the kitchen and living room</p>
                                    </div>
                                </div>
                            }
                            {
                                show==="All" &&
                                <div className=' flex items-center gap-4 w-full'>
                                    <div className='w-[77px] h-[77px] flex items-center justify-center'>
                                    <div className='all__good'>
                                        <Icon icon="zondicons:checkmark-outline" className=' text-white text-[20px]'/>
                                    </div>
                                    </div>
                                    <div>
                                        <h2 className='text-[22px] font-[600] text-[#0D1A29]'>All Good</h2>
                                        <p className='text-[14px] font-[400] text-secondary'>Some has last seen near the kitchen and living room</p>
                                    </div>
                                </div>
                            }
                    </div>
            
                    <div className='flex items-center justify-between gap-5 mt-[32px] flex-col md:flex-row'>
                        <div className='flex items-center gap-[8px] bg-[#FFF0F0] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="ant-design:alert-outlined" className='text-[20px] text-[#FF8181]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Critical</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>{data?.CRITICAL}</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[8px] bg-[#FFF2E8] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="mingcute:alert-line" className='text-[20px] text-[#FF974C]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Warning</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>{data?.WARNING}</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[8px] bg-[#F0F2FF] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="ant-design:bug-outlined" className='text-[20px] text-[#0070F0]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Problem</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>{data?.PROBLEM}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                    <div className='p-[22px]'>
                    <div className='flex items-center gap-2'>
                        <div className='w-[77px] h-[77px] flex items-center justify-center'>
                            {/* <img src={img} alt="" className='w-full'/> */}
                            <div className='all__good'>
                                <Icon icon="zondicons:checkmark-outline" className=' text-white text-[20px]'/>
                            </div>
                        </div>
                        <div>
                            <h2 className='text-[22px] font-[600] text-[#0D1A29]'>All Good</h2>
                            <p className='text-[14px] font-[400] text-secondary'>Some has last seen near the kitchen and living room</p>
                        </div>
                    </div>
            
                    <div className='flex items-center justify-between gap-5 mt-[32px] flex-col md:flex-row'>
                        <div className='flex items-center gap-[8px] bg-[#FFF0F0] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="ant-design:alert-outlined" className='text-[20px] text-[#FF8181]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Critical</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>0</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[8px] bg-[#FFF2E8] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="mingcute:alert-line" className='text-[20px] text-[#FF974C]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Warning</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>0</h2>
                            </div>
                        </div>
                        <div className='flex items-center gap-[8px] bg-[#F0F2FF] rounded-[6px] p-[7px] w-full'>
                            <div>
                              <Icon icon="ant-design:bug-outlined" className='text-[20px] text-[#0070F0]'/>
                            </div>
                            <div>
                                <h3 className='text-[12px] font-[400] text-secondary'>Problem</h3>
                                <h2 className='text-[14px] font-[600] text-secondary'>0</h2>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </>
  )
}

export default AdminElderlyOverViewLeftGood