import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import CustomErrorToast from '../../../../../../../Shared/Tosat/CustomErrorToast';

const AdminElderlyOverViewTags = () => {
    const [tags,setTags]=useState("")
    const [data,setData]=useState([
        {
            id:1,
            tag:"High blood sugar",
        },
        {
            id:2,
            tag:"low blood pressure",
        },
    ])

    const crypto = window.crypto || window.msCrypto;
    let array = new Uint32Array(1);
    crypto.getRandomValues(array); 

    const addTages = ()=>{
        if(!tags){
            toast.custom((t)=><CustomErrorToast t={t} text={"Please add a tags"} title={"Error"}/>)
        }else{
            setData(pre=> [...pre,{id:array[0],tag:tags}])
            setTags("")
        }
        
    }

    const removeTags = (id)=>{
        const finalTags = data.filter(item=>item.id !== id)
        setData(finalTags)
    }


  return (
    <div className='p-5'>
        <div>
            <h2 className='text-[23px] font-[500] text-secondary'>Tags</h2>
        </div>
        <div className='mt-5 flex items-center gap-2 w-full'>
            <select name="" id="" className='py-[8px] px-3 outline-none border text-[#5D6670] border-[#90969D] rounded-[10px]'>
                <option value="">Tags</option>
                <option value="">Name</option>
            </select>
            <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} placeholder='Add  new teg' className='py-[7px] px-3 border border-[#90969D] outline-none focus:border-primary w-full rounded-[10px]'/>
            <button onClick={()=>addTages()} className='cursor-pointer text-[13px] h-[40px] font-[500] flex bg-primary text-white px-3 py-[10px] items-center gap-[2px] rounded-[10px]'>
             <Icon icon="mingcute:add-fill" className='text-[20px]'/>
             </button>
        </div>

        <div className='flex flex-wrap items-center gap-2 mt-5'>
            {
                data.map((item,i)=>{
                    return(
                        <div key={i} className='flex items-center gap-3 bg-[#E6F1FE] rounded-[10px] px-3'>
                            <span className='text-[12px] font-[500] text-primary'>{item.tag}</span>
                            <IconButton onClick={()=> removeTags(item.id)}>
                                <Icon icon="mi:close" className='text-[17px]'/>
                            </IconButton>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AdminElderlyOverViewTags