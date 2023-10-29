import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import CustomErrorToast from '../../../../../../../Shared/Tosat/CustomErrorToast'
import AdminElderlyOverViewNotesEdit from './AdminElderlyOverViewNotesEdit'
import DeleteDialog from '../../../../../../../Shared/Delete/DeleteDialog'
import CustomToast from '../../../../../../../Shared/Tosat/CustomToast'
import MainButton from '../../../../../../../Shared/Button/MainButton'

const AdminElderlyOverViewNotes = () => {
    const [notes,setNotes]=useState("")
    const [upast,setUpdate] = useState("")
    const [show,setShow] = useState(false)
    const [show2,setShow2] = useState(false)
    const [itemId,setItemid] = useState()
    const [data,setData]=useState([
        {
            id:1,
            title:"Please manage IoT devices and ensure efficient home security system operation. Familiarize yourself, troubleshoot, collaborate, and report.",
            date:"02:30 am - 07/05/23"
        },
    ])
    const crypto = window.crypto || window.msCrypto;
    var array = new Uint32Array(1);
    crypto.getRandomValues(array); 

    const addNodes = ()=>{
        if(!notes){
            toast.custom((t)=><CustomErrorToast t={t} text={"Please add a Notes"} title={"Error"}/>)
        }else{
            setData(pre=> [...pre,{id:array[0],title:notes,date:"02:30 am - 07/05/23"}])
            setNotes("")
        }
    }

    const upDateNotes = (data)=>{
        setUpdate(data.title)
        setShow(true)
    }

    const removeNotes = (id)=>{
        setItemid(id)
        setShow2(true)
    }

    const deleteNode = ()=>{
        if(itemId){
            const finalTags = data.filter(item=>item.id !== itemId)
            setData(finalTags)
            setShow2(false)
            toast.custom((t)=><CustomToast t={t} text={"Delete Notes Success"}/>)
        }
    }

  return (
    <div className='p-5 w-full'>
        <div>
            <h2 className='text-[23px] font-[500] text-secondary'>Notes</h2>
        </div>
        <div className='flex flex-col gap-1 w-full'>
            {
                data.map((item,i)=> {
                    return (
                    <div key={i} className='bg-[#F6F7F9] rounded-[6px] py-[18px] px-[23px] w-full'>
                        <span className=' text-[#0D1A29] text-[12px] font-[600]'>{item.date}</span>
                        <p className='text-[14px] font-[400] text-[#455D79] break-words'>{item.title}</p>
                        <div className=' flex items-center gap-2 mt-1'>
                            <button onClick={()=>upDateNotes(item)} className='text-[#6C83FF] font-[500] text-[12px] py-2 px-4 bg-[#F0F3FF]'>Edit</button>
                            <button onClick={()=>removeNotes(item.id)} className='text-[#FF8181] font-[500] text-[12px] py-2 px-4 bg-[#FAEEEF]'>Delete</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        <div className='mt-3'>
            <textarea value={notes} onChange={(e)=>setNotes(e.target.value)} className='w-full h-[100px] rounded-md border border-secondary p-2 outline-none focus:border-primary'></textarea>
            <div className='flex w-full items-center justify-end mt-2'>
                <MainButton onSubmit={addNodes} title={"Add Note"} icon={<Icon icon="mingcute:add-fill" className='text-[16px]'/>}/>
            </div>
        </div>
        <DeleteDialog  open={show2} setOpen={setShow2} onDelete={deleteNode}title={"Are you sure to delete this Notes? This process is."} title2 ={"irreversible"}/>
        <AdminElderlyOverViewNotesEdit open={show} setOpen={setShow} setUpdate={setUpdate} upast={upast} />
    </div>
  )
}

export default AdminElderlyOverViewNotes