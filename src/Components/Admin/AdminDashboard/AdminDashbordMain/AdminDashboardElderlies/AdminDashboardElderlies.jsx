import React from 'react'
import AdminDashboardElderliesTable from './AdminDashboardElderliesTable'
import { Elderlies } from '../../../../../assets/admin/data';
import SearchInput from '../../../../../Shared/Search/SearchInput';

const AdminDashboardElderlies = () => {
    const [search,setSearch] = React.useState("")
  return (
    <div className='pt-[22px]'>
        <div className=' flex items-center gap-2 justify-between flex-wrap px-[22px]'>
            <h2 className=' text-[23px] font-[500] text-[#3D4854]'>Elderlies</h2>
            <div className='flex items-center gap-2 flex-wrap'>
                <SearchInput search={search} setSearch={setSearch} style={{width:"200px"}} placeholder="Search Elderly"/>
            </div>
        </div>

        <div className='mt-5'>
            {/* =========table======== */}
            <AdminDashboardElderliesTable tableData={Elderlies}/>
        </div> 
    </div>
  )
}

export default AdminDashboardElderlies