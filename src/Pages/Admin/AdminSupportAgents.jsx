import {Box} from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from '@mui/icons-material/Add';
import AdminSupportAgentTable from '../../Components/Admin/AdminDashboard/AdminSupportAgentTable/AdminSupportAgentTable';
import { SupportAgents } from '../../assets/admin/data';
import SupportAgentsCreactDeawer from '../../Components/Admin/AdminDashboard/AdminDrawer/SupportAgentsCreactDeawer';
import Sort from '../../Shared/Sort/Sort';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../Shared/Search/SearchInput';
import { Helmet } from 'react-helmet';
import MainButton from '../../Shared/Button/MainButton';

const AdminSupportAgents = () => {
    const [creactDrawer, setCreactDrawer] = useState(false);
    const [search,setSearch] = React.useState("")
    const navigate = useNavigate()
    const [selected, setSelected] = useState("");
    const data = ["Sort","name","type"]
    
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Smart Home | Admin Support Agents</title>
            <link rel="canonical" href="" />
        </Helmet>
        <div className='md:px-[30px] px-2'>
            <div className="flex items-center gap-2 text-xs mt-10">
                <h1 onClick={()=>navigate("/admin/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 className=' text-[#0070F0]'>Support Agents</h1>
            </div>

            <div className=' bg-white pt-[10px] mb-[30px] rounded-[10px] mt-5'>
                <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                flexWrap:"wrap",
                gap:"20px",
                marginTop:"19px",
                padding:"0 22px"
                }}>
                <h2 className=' text-[23px] font-[500] text-[#3D4854]'>Support Agents</h2>
                <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                gap:"20px",
                flexWrap:"wrap" 
                }}>
                    <div className='w-full md:w-[220px]'>
                         <SearchInput search={search} setSearch={setSearch} style={{width:"220px"}} placeholder="Search Support Agent"/>
                    </div>
                <Sort selected={selected} setSelected={setSelected} data={data}/>
                <MainButton title={"Create"} icon={<AddIcon fontSize='small' />} onSubmit={()=>setCreactDrawer(true)} />
            </Box>
        </Box>

        {/* =============Admin Support Agent data table============== */}
        <div className='mt-5 grid grid-cols-1 w-full'>
            <AdminSupportAgentTable tableData={SupportAgents}/>
        </div>
            </div>
        </div> 

        {/* ========support agent create=========== */}
        <SupportAgentsCreactDeawer creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer}/>
    </div>
  )
}

export default AdminSupportAgents