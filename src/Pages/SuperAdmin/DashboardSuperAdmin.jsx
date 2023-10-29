import { Box } from '@mui/material';
import React, { useState } from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Icon } from '@iconify/react';
import SuperAdminUserData from '../../Components/SuperAdmin/SuperAdminUserData/SuperAdminUserData';
import SuperAdminCreateDrawer from '../../Components/SuperAdmin/SuperAdminDrawer/SuperAdminCreateDrawer';
import Sort from '../../Shared/Sort/Sort';
import { superAdmin } from '../../assets/admin/data';
import { useNavigate } from 'react-router-dom';
import SearchInput from '../../Shared/Search/SearchInput';
import { Helmet } from 'react-helmet';
import MainButton from '../../Shared/Button/MainButton';

const DashboardSuperAdmin = () => {
    const navigate = useNavigate()
    const [search, setSearch] = React.useState("")
    const [creactDrawer, setCreactDrawer] = React.useState(false);
    const [selected, setSelected] = useState("");
    const data = ["Sort By Name", "Sort By Last Sign In", "Sort By Join Date"]


    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Smart Home | Supper-Admin</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='md:px-8 px-2'>
                <div className="flex items-center gap-2 text-xs mt-10">
                    <h1 onClick={() => navigate("/super-admin/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                    <h1 className=' text-[#0070F0]'>Admin</h1>
                </div>

                <div className="mt-5">
                    <div className=' bg-white pt-[10px] mb-[30px] rounded-[10px]'>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "20px",
                            marginTop: "20px",
                            padding: "0 22px"
                        }}>
                            <h2 className=' text-[23px] font-[500] text-[#3D4854]'>Admin</h2>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px",
                                flexWrap: "wrap",
                            }}>
                                <div className='md:w-[220px] w-full'>
                                    <SearchInput search={search} setSearch={setSearch} placeholder="Search Admin" />
                                </div>
                                <Sort selected={selected} setSelected={setSelected} data={data} />
                                <MainButton onSubmit={() => setCreactDrawer(true)} title={"Add New Admin"} icon={<Icon icon="mingcute:add-fill" className='text-[16px]'/>}/>
                            </Box>
                        </Box>
                        {/* ---------admin Data table-------- */}
                        <div className='mt-5 grid grid-cols-1 w-full'>
                            <SuperAdminUserData tableData={superAdmin} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------admin creact drawer-------- */}
            <SuperAdminCreateDrawer creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer} />
        </div>
    );
};

export default DashboardSuperAdmin;