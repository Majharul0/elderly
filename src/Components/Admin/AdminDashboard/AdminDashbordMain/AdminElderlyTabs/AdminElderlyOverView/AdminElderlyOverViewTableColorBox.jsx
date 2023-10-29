import { Tooltip } from 'antd'
import React from 'react'

const AdminElderlyOverViewTableColorBox = ({row}) => {
  return (
    <div className='flex items-center w-[130px] rounded-lg overflow-hidden gap-[2px] cursor-pointer'>
        <Tooltip placement="top" title={"A bit less"}><div className={`w-full h-[8px] ${row.status==="Critical" && row.statusValue===1 ? " bg-[#F27A7A]" : "bg-[#F27A7A]/20 "}`}></div></Tooltip>
        <Tooltip placement="top" title={"Way less"}><div className={`w-full h-[8px] ${row.status==="Warning" && row.statusValue===1 ? " bg-[#F1AD2A]" : "bg-[#F1AD2A]/20 "}`}></div></Tooltip>
        <Tooltip placement="top" title={"Normal"}><div className={`w-full h-[8px] ${row.status==="Average" && row.statusValue===0 ? " bg-[#01BE4F]" : "bg-[#01BE4F]/20 "}`}></div></Tooltip>
        <Tooltip placement="top" title={"A bit more"}><div className={`w-full h-[8px] ${row.status==="Warning" && row.statusValue===2 ? " bg-[#F1AD2A]" : "bg-[#F1AD2A]/20 "}`}></div></Tooltip>
        <Tooltip placement="top" title={"Way More"}><div className={`w-full h-[8px] ${row.status==="Critical" && row.statusValue===2 ? " bg-[#F27A7A]" : "bg-[#F27A7A]/20 "}`}></div></Tooltip>
    </div>
  )
}

export default AdminElderlyOverViewTableColorBox