import { Box, } from '@mui/material'
import React, { useState } from 'react'
import SuspendedAdminTable from './SuspendedAdminTable';
import { bandUserData } from '../../../../assets/admin/data';
import Sort from '../../../../Shared/Sort/Sort';
import SearchInput from '../../../../Shared/Search/SearchInput';

const SuspendedAdminList = () => {
    const [selected, setSelected] = useState("");
    const [search,setSearch] = React.useState("")
    const data = ["Sort By Name", "Sort By Suspended Date"]
  return (
    <div>
        <div className="mt-5">
             <div className=' bg-white pt-[10px] mb-[30px] rounded-[10px]'>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    flexWrap:"wrap",
                    gap:"20px",
                    marginTop:"20px",
                    padding:"0 22px"
                }}>
                    <h2 className=' text-[23px] font-[500] text-[#3D4854]'>Suspended Admins</h2>
                    <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"space-between",
                    gap:"20px",
                }}>
                        <div className='w-full md:w-[220px]'>
                             <SearchInput search={search} setSearch={setSearch} placeholder="Search Admin"/>
                        </div>
                        <Sort selected={selected} setSelected={setSelected} data={data}/>

                    </Box>
                </Box>
                {/* =========suspend table========= */}
                <div className='mt-8 grid grid-cols-1'>
                    <SuspendedAdminTable tableData={bandUserData}/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default SuspendedAdminList