import React, { useState } from 'react'
import Sort from '../../../../../../Shared/Sort/Sort'
import SearchInput from '../../../../../../Shared/Search/SearchInput';
import AdminElderlyOverViewTable from './AdminElderlyOverViewTable';
import { ElderlyTrends } from '../../../../../../assets/admin/overview';

const AdminElderlyTrends = () => {
    const [selected, setSelected] = useState("");
    const [search,setSearch] = useState("")
    const data = ["Sort","name","type"]
  return (
    <div className=' bg-white w-full rounded-[10px] pt-[29px]'>
        <div className=' flex items-center gap-2 justify-between flex-wrap px-[22px]'>
            <h2 className=' text-[23px] font-[500] text-secondary'>Elderly Trends</h2>
            <div className='flex items-center gap-5 w-full md:w-auto'>
                <div className='w-full md:w-[200px]'>
                    <SearchInput search={search} setSearch={setSearch} placeholder={"Search Trend"}/>
                </div>
                <Sort selected={selected} setSelected={setSelected} data={data} width={"95px"}/>
            </div>
        </div>
        {/* ========table====== */}
        <div className='mt-5 w-full'>
            <AdminElderlyOverViewTable tableData={ElderlyTrends}/>
        </div>
    </div>
  )
}

export default AdminElderlyTrends