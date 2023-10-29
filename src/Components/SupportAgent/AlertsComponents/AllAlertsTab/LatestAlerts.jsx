import React from 'react'
import LatestAlertsTable from './LatestAlertsTable'

const LatestAlerts = ({data}) => {
  return (
    <div className='pt-[22px]'>
        <div className='px-[22px]'>
            <h2 className='text-[23px] font-[500] text-[#3D4854]'>Latest Alerts</h2>
        </div>
        <div className='mt-5'>
            <LatestAlertsTable tableData={data}/>
        </div>
    </div>
  )
}

export default LatestAlerts