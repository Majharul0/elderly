import React, { useState } from 'react'
import SearchInput from '../../../Shared/Search/SearchInput'
import { Icon } from '@iconify/react'

const ElderlySystemTags = () => {
    const [search,setSearch]=useState("")
    const [select,setSelect] = useState(1)
    const tagData =[
        {
            id:1,
            title:"No pir sensor",
            value:"12",
        },
        {
            id:2,
            title:"Need mesh unit",
            value:"06",
        },
        {
            id:3,
            title:"Low number of switches",
            value:"22",
        },
    ]
  return (
    <div>
          <SearchInput search={search} setSearch={setSearch} placeholder={"Search Tag"} style={{width:"100%"}}/>
          <div className='flex flex-col gap-1 mt-3'>
                {
                    tagData.map((item,i)=>(
                        <div key={i} onClick={()=>setSelect(item.id)} className='flex items-center gap-2 cursor-pointer'>
                        <Icon icon="basil:check-outline" className={`text-[20px] ${item.id===select ? " text-primary" : "text-[#E6F1FE]"}`}/>
                        <h3 className='text-[13px] font-[500] text-secondary'>{item.title}</h3>
                        <div className=' w-[25px] h-[25px] rounded-lg flex items-center justify-center bg-[#E6F1FE]'>
                            <span className='text-[13px] text-primary font-[500]'>{item.value}</span>
                        </div>
                    </div>
                    ))
                }
          </div>
    </div>
  )
}

export default ElderlySystemTags