import React, { useState } from 'react'
import img from "../../../../../../../assets/icon/checkmark.png"
import img2 from "../../../../../../../assets/icon/Vector.png"
import { Activities } from '../../../../../../../assets/admin/overview'
import AdminElderlyOverViewRightActivitsAll from './AdminElderlyOverViewRightActivitsAll'


const AdminElderlyOverViewRightActivits = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='p-5'>
            <div>
                <h2 className=' text-[23px] font-[500] text-secondary'>Last 5 Activities</h2>
            </div>
            <div className='flex items-start flex-col gap-[15px] mt-5'>
                {
                    Activities?.slice(0, 5).map((item, i) => {
                        return (
                            <div className='flex items-center gap-2' key={i}>
                                <div className={`w-[30px] h-[30px] rounded-[4px] flex items-center justify-center ${item.status === 1 ? "bg-[#D9F5E5] " : " bg-[#F8EEEC]"}`}>
                                    {item.status === 1 ? <img src={img} alt="" /> : <img src={img2} alt="" />}
                                </div>
                                <p className='text-[16px] text-secondary font-[500]'>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center mt-3'>
                <button onClick={() => setOpen(true)} className='text-[16px] font-[500] text-[#0070F0]'>Show All</button>
            </div>
            <AdminElderlyOverViewRightActivitsAll open={open} setOpen={setOpen} tableData={Activities} />
        </div>
    )
}

export default AdminElderlyOverViewRightActivits