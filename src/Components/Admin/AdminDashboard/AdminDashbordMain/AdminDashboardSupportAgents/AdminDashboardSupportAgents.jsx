import React, { useState } from 'react';
import SearchInput from '../../../../../Shared/Search/SearchInput';
import Sort from '../../../../../Shared/Sort/Sort';
import { SupportAgents } from '../../../../../assets/admin/data';
import AdminDashboardSupportAgentsTable from './AdminDashboardSupportAgentsTable';

function AdminDashboardSupportAgents() {
    const [selected, setSelected] = useState("");
    const [search,setSearch] = React.useState("")
    const data = ["Sort By Name","Sort by Max Comment","Sort by Min Comment"]
  return (
    <div className='pt-[22px]'>
        <div className=' flex items-center gap-2 justify-between flex-col md:flex-row px-[22px]'>
            <h2 className=' text-[23px] font-[500] text-[#3D4854] w-full'>Support Agents</h2>
            <div className='flex items-center gap-5 w-full'>
                <div className='md:w-[200px] w-full'>
                    <SearchInput search={search} setSearch={setSearch} placeholder="Search Support Agents"/>
                </div>
                <Sort selected={selected} setSelected={setSelected} data={data} width={"120px"}/>
            </div>
        </div>

        <div className='mt-5 w-full'>
            <AdminDashboardSupportAgentsTable  tableData={SupportAgents}/>
        </div>
    </div>
  )
}

export default AdminDashboardSupportAgents