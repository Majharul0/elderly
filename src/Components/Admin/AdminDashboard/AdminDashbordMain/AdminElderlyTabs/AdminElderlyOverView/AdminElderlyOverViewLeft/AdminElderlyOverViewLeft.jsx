import React from 'react'
import AdminElderlyOverViewLeftGood from './AdminElderlyOverViewLeftGood'
import AdminElderlyOverViewLeftCall from './AdminElderlyOverViewLeftCall'
import AdminElderlyOverViewLeftResolvingAlarms from './AdminElderlyOverViewLeftResolvingAlarms'

const AdminElderlyOverViewLeft = ({data}) => {
  return (
    <div>
        <div className='bg-white rounded-[10px] w-full'>
            <AdminElderlyOverViewLeftGood data={data}/>
        </div>
        <div className='bg-white rounded-[10px] w-full mt-[30px]'>
            <AdminElderlyOverViewLeftCall />
        </div>
        <div className='bg-white rounded-[10px] w-full mt-[30px]'>
            <AdminElderlyOverViewLeftResolvingAlarms />
        </div>
    </div>
  )
}

export default AdminElderlyOverViewLeft