import { Box } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from '@mui/icons-material/Add';
import AdminElderlyTable from '../../Components/Admin/AdminDashboard/AdminElderly/AdminElderlyTable';
import { Elderlies } from '../../assets/admin/data';
import AdminElderlyCreact from '../../Components/Admin/AdminDashboard/AdminElderly/AdminElderlyCreact';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../Shared/Search/SearchInput';
import { Helmet } from 'react-helmet';
import MainButton from '../../Shared/Button/MainButton';


const AdminElderly = () => {
    const [creactDrawer, setCreactDrawer] = React.useState(false);
    const [search, setSearch] = React.useState("")
    const navigate = useNavigate()

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Smart Home | Admin Elderly</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className='md:px-[30px] px-2'>
                <div className="flex items-center gap-2 text-xs mt-10">
                    <h1 onClick={() => navigate("/admin/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                    <h1 className=' text-[#0070F0]'>Elderly</h1>
                </div>

                <div className="mt-5 mb-10">
                    <div className=' bg-white pt-[10px] mb-[30px] rounded-[10px] mt-5'>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "19px",
                            marginTop: "20px",
                            padding: "0 22px"
                        }}>
                            <h2 className=' text-[23px] font-[500] text-[#3D4854]'>Elderlies</h2>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px",
                            }}>
                                <SearchInput search={search} setSearch={setSearch} style={{ width: "220px" }} placeholder="Search Elderly Profiles" />
                                <MainButton title={"Create"} icon={<AddIcon fontSize='small' />} onSubmit={() => setCreactDrawer(true)} />
                            </Box>
                        </Box>

                        {/* ============= data table============== */}
                        <div className='mt-5 md:grid md:grid-cols-1 w-full'>
                            <AdminElderlyTable tableData={Elderlies} />
                        </div>
                    </div>
                </div>
            </div>
            {/* =============Admin Elderly Creact data table============== */}
            <AdminElderlyCreact creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer} />
        </div>
    )
}

export default AdminElderly