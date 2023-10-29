import React from 'react'
import { TinyLine } from '@ant-design/plots';

const AdminElderlyOverViewTableChart = ({data}) => {
    const config = {
        autoFit: false,
        width:125,
        height:20,
        data,
        color:"#455D79",
      };
  return (
    <div className='w-[80px] h-[40px] flex items-center justify-center'>
        <TinyLine {...config} />
    </div>
  )
}

export default AdminElderlyOverViewTableChart