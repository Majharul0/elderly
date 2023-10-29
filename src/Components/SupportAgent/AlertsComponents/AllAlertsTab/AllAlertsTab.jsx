import React from 'react'
import LatestAlerts from './LatestAlerts'
import SupportAgentAlerts from './SupportAgentAlerts'
import SUpportAgentAlertChart from './supportAgentAllTabRight/SUpportAgentAlertChart'
import SupportAgentAlertsProgress from './supportAgentAllTabRight/SupportAgentAlertsProgress'

const AllAlertsTab = ({data}) => {
  return (
    <div className='mt-5 w-full grid grid-cols-1'>
        <div className='flex items-start justify-between lg2:flex-row gap-[30px] flex-col'>
            <div className='flex flex-col gap-[30px] lg2:w-[65%] w-full'>
                <div className=' bg-white  rounded-[10px]'>
                    <LatestAlerts data={data}/>
                </div>
                <div className=' bg-white rounded-[10px]'>
                    <SupportAgentAlerts data={data}/>
                </div>
            </div>
            <div className='flex flex-col gap-[30px] lg2:w-[34%] w-full'>
                <div className=' bg-white rounded-[10px]'>
                    <SUpportAgentAlertChart data={data}/>
                </div>
                <div className=' bg-white rounded-[10px]'>
                    <SupportAgentAlertsProgress data={data}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllAlertsTab