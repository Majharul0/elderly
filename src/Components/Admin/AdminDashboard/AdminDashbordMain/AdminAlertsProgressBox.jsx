import React from 'react'
import AdminRingProgress from "./AdminRingProgress"

function AdminAlertsProgressBox({data2}) {

    let problemValue = 0;
    let warningValue = 0;
    let criticalValue = 0;
  
    for (const entry of data2) {
      if (entry.name === "Problem") {
        problemValue += entry.value;
      } else if (entry.name === "Warning") {
        warningValue += entry.value;
      } else if (entry.name === "Critical") {
        criticalValue += entry.value;
      }
    }
  
    const totalValue = problemValue + warningValue + criticalValue;
  
    const problemPercentage = (problemValue / totalValue) * 100;
    const warningPercentage = (warningValue / totalValue) * 100;
    const criticalPercentage = (criticalValue / totalValue) * 100;
  


  return (
    <div className='mt-2 grid grid-cols-3 gap-4 flex-wrap'>
        <div className='flex items-center gap-2'>    
            <div className='flex items-center justify-center'>
             <AdminRingProgress percent={criticalPercentage.toFixed(0)} color={['#F4664A', '#E8EDF3']}/>
            </div>
            <div className='flex items-center flex-col gap-0'>
                <span className=' text-secondary font-[400] text-[13px] m-0 p-0'>Critical</span>
                <span className=' text-secondary font-[700] text-[19px] m-0 p-0'>{criticalPercentage.toFixed(0)}%</span>
            </div>
        </div>
        <div className='flex items-center gap-2'>    
            <div className='flex items-center justify-center'>
             <AdminRingProgress percent={warningPercentage.toFixed(0)} color={['#FF974D', '#E8EDF3']}/>
            </div>
            <div className='flex items-center flex-col gap-0'>
                <span className=' text-secondary font-[400] text-[13px] m-0 p-0'>Warning</span>
                <span className=' text-secondary font-[700] text-[19px] m-0 p-0'>{warningPercentage.toFixed(0)}%</span>
            </div>
        </div>
        <div className='flex items-center gap-2'>    
            <div className='flex items-center justify-center'>
             <AdminRingProgress percent={problemPercentage.toFixed(0)} color={['#5973FF', '#E8EDF3']}/>
            </div>
            <div className='flex items-center flex-col gap-0'>
                <span className=' text-secondary font-[400] text-[13px] m-0 p-0'>Problem</span>
                <span className=' text-secondary font-[700] text-[19px] m-0 p-0'>{problemPercentage.toFixed(0)}%</span>
            </div>
        </div>
    </div>
  )
}

export default AdminAlertsProgressBox