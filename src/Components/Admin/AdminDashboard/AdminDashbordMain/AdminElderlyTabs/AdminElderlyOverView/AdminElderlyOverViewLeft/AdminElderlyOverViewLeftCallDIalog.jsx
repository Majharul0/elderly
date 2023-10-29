import CustomDialog from '../../../../../../../Shared/Dialog/CustomDialog'
import { Divider } from '@mui/material'
import AudioSurfer from './AudioSurfer'
import { useEffect, useState } from 'react'


const AdminElderlyOverViewLeftCallDIalog = ({open,setOpen,data}) => {
    const [active,setActive]=useState("All")
    const [itemdata,setItemData] = useState(data)
    const tabData = [
        {
            id:1,
            title:"All"
        },
        {
            id:2,
            title:"Elderly"
        },
        {
            id:3,
            title:"Family"
        },
        {
            id:4,
            title:"911"
        },
    ]

    useEffect(()=>{
        if(active === "All"){
            setItemData(data)
        }else{
            const filterData = data.filter((item)=> item.title === active)
            setItemData(filterData)
        }
    },[active,data])

  return (
    <>
        <CustomDialog open={open} setOpen={setOpen} title="Call History">
            <div>
                <div className='flex items-center gap-3 mb-4 mt-3'>
                    {tabData.map((item,i)=>{
                        return(
                            <button key={i} onClick={()=>setActive(item.title)} className={`py-[8px] px-[13px] text-[14px] rounded-[10px] font-[500] transition-all duration-200 ${item.title===active ? " bg-primary text-white" : "bg-[#F6F7F9] text-[#708398]"}`}>{item.title}</button>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-5 h-[500px] overscroll-y-auto'>

                    {
                        itemdata.map((item,i)=>(
                            <div key={i}>
                                <div className='flex items-center gap-1'>
                                    <h2 className='text-[16px] font-[500] text-[#0D1A29]'>{item.title}</h2>
                                    <div className='w-[5px] h-[5px] bg-gray-400 rounded-full'></div>
                                    <span className='text-[13px] font-[500] text-secondary'>{item.time}</span>
                                </div>
                                {/* <AdminElderlyOverViewLeftCallAudioPlayer item={item}/> */}
                                {/* <TestAudio item={item}/> */}
                                <AudioSurfer/>
                                <div className='mt-3'>
                                    <Divider />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </CustomDialog>
    </>
  )
}

export default AdminElderlyOverViewLeftCallDIalog