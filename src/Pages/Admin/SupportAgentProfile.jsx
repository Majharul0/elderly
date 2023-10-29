import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Elderlies } from '../../assets/admin/data'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SupportAgentProfileCover from '../../Components/Admin/AdminDashboard/SupportAgentProfile/SupportAgentProfileCover';
import SupportAgentProfileChart from '../../Components/Admin/AdminDashboard/SupportAgentProfile/SupportAgentProfileChart';
import SupportAgentProfileInfo from '../../Components/Admin/AdminDashboard/SupportAgentProfile/SupportAgentProfileInfo';

const SupportAgentProfile = () => {
    const navigate = useNavigate()
    const parmas = useParams()
    const [userData, setUserData] = useState({})

    useEffect(() => {
        const elderly = Elderlies.find(item => item.id === parseInt(parmas.id));
        setUserData(elderly)
    }, [parmas.id])
    // console.log(userData)
    return (
        <div className='md:px-[30px] px-2'>
            <div className="flex items-center gap-2 text-xs mt-10">
                <h1 onClick={() => navigate("/admin/dashboard")}>Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 className=' cursor-pointer' onClick={() => navigate("/admin/dashboard/elderly")}>Support Agents</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 className=' text-[#0070F0]'>{userData?.firstName} {userData?.lastName}</h1>
            </div>

            <div className='my-5 mb-8 '>
                {/* ======profile cover===== */}
               <SupportAgentProfileCover userData={userData}/>

               <div className=' grid grid-cols-1 mt-[10px] '>
               <div className='flex items-start justify-between flex-col  lg2:flex-row gap-[30px] mt-5 w-full'>
                    <div className='bg-white w-full lg2:w-[67%] rounded-[10px]'>
                        {/* ======profile chart===== */}
                        <SupportAgentProfileChart />
                    </div>
                <div className='flex flex-col gap-[30px] w-full lg2:w-[32%]'>
                    <div className='bg-white w-full rounded-[10px]'>
                        <SupportAgentProfileInfo userData={userData}/>
                    </div>
                </div>
            </div>
               </div>
            </div>
        </div>
    )
}

export default SupportAgentProfile