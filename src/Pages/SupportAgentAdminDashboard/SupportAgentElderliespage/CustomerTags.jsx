import React, { useState } from 'react'
import SearchInput from '../../../Shared/Search/SearchInput'
import { IconButton } from '@mui/material'
import { Icon } from '@iconify/react'
import DeleteDialog from '../../../Shared/Delete/DeleteDialog'
import CoustomerTagsAdd from './CoustomerTagsAdd'

const CustomerTags = () => {
    const [search,setSearch]=useState("")
    const [select,setSelect] = useState(1)
    const [deleteOpen,setDeleteOPen] = useState(false)

    const tagData =[
        {
            id:1,
            title:"High blood sugar",
            value:"12",
        },
        {
            id:2,
            title:"Cancer",
            value:"06",
        },
        {
            id:3,
            title:"Diabetes Mellitus",
            value:"22",
        },
        {
            id:4,
            title:"Osteoporosis",
            value:"04",
        },
        {
            id:5,
            title:"Hypertension",
            value:"32",
        },
    ]
    const onDelete=()=>{
        setDeleteOPen(false)
    }

  return (
    <div>
        <SearchInput search={search} setSearch={setSearch} placeholder={"Search Tag"} style={{width:"100%"}}/>
        <div className='flex flex-col gap-1 mt-3'>
            {
                tagData.map((item,i)=>(
                    <div key={i} className='flex items-center justify-between'>
                        <div onClick={()=>setSelect(item.id)} className='flex items-center gap-2 cursor-pointer'>
                            <Icon icon="basil:check-outline" className={`text-[20px] ${item.id===select ? " text-primary" : "text-[#E6F1FE]"}`}/>
                            <h3 className='text-[13px] font-[500] text-secondary'>{item.title}</h3>
                            <div className=' w-[25px] h-[25px] rounded-lg flex items-center justify-center bg-[#E6F1FE]'>
                                <span className='text-[13px] text-primary font-[500]'>{item.value}</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <IconButton onClick={()=>setDeleteOPen(true)}>
                             <Icon icon="basil:trash-alt-outline" className='text-[20px] hover:text-red-500'/>
                            </IconButton>
                            <CoustomerTagsAdd data={tagData}/>
                        </div>
                    </div>
                ))
            }
        </div>
        {/* ======delete tags======== */}
        <DeleteDialog open={deleteOpen} setOpen={setDeleteOPen} onDelete={onDelete} title={"You are about to delete the tag 'Cancer' ,"} title2={"This action is irreversible!"}/>
    </div>
  )
}

export default CustomerTags
