import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from '@mui/material';
import SupportAgentElderlyTable from '../../../Components/SupportAgent/SupportAgentElderly/SupportAgentElderlyTable';
import { Elderlies } from '../../../assets/admin/data';
import SearchInput from '../../../Shared/Search/SearchInput';
import Sort from '../../../Shared/Sort/Sort';
import SupportAgentElderliespageTagFilter from './SupportAgentElderliespageTagFilter';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Helmet } from 'react-helmet';

const SupportAgentElderliespage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")
    const [show, setShow] = useState(true)
    const [sort, setSort] = useState("")
    const data = ["Sort", "Name", "Type"]

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Smart Home |  Support-Agent-Elderly</title>
                <link rel="canonical" href="" />
            </Helmet>
            <div className='md:px-[30px] px-2'>
                <div className="flex items-center gap-2 text-xs mt-10">
                    <h1 onClick={() => navigate("/support-agent/dashboard")} className="cursor-pointer" >Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                    <h1 className=' text-[#0070F0]'>Elderly</h1>
                </div>

                <div className="mt-5 mb-10">
                    <div className=' bg-white py-[10px] mb-[30px] rounded-lg mt-5'>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                            gap: "20px",
                            marginTop: "20px",
                            padding: "0 22px",
                            marginBottom: "10px"
                        }}>
                            <h2 className=' text-[25px] text-secondary font-[500]'>Elderlies</h2>
                            <Box sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "20px",
                                flexWrap: "wrap"
                            }}>
                                <SearchInput search={search} setSearch={setSearch} placeholder={"Search Elderly Profiles"} />
                                <Sort selected={sort} setSelected={setSort} data={data} />
                                <div>
                                    <SupportAgentElderliespageTagFilter />
                                </div>
                            </Box>
                        </Box>

                        {
                            show && <div className="cursor-pointer border mx-[22px] border-[#E7E8EA] p-[7px] w-[190px] flex items-center justify-between pl-2 rounded-[6px]">
                                <div className='flex items-center gap-2 '>
                                    <h3 className='text-[13px] font-[500] text-secondary'>High blood sugar</h3>
                                    <div className=' w-[25px] h-[25px] rounded-lg flex items-center justify-center bg-[#E6F1FE]'>
                                        <span className='text-[13px] text-primary font-[500]'>12</span>
                                    </div>
                                </div>
                                    <Icon onClick={() => setShow(false)} icon="fe:close" className="txt-[16px] text-[#3D4854]" />
               
                            </div>
                        }

                        {/* ============= data table============== */}
                        <div className='mt-3 w-full grid grid-cols-1'>
                            <SupportAgentElderlyTable tableData={Elderlies} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportAgentElderliespage
