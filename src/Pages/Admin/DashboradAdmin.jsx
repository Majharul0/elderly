import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AdminSupportAgentCharts from '../../Shared/Charts/SidebarCharts/AdminSupportAgentCharts';
import AdminElderliesOverview from '../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminElderliesOverview';
import AdminAlertsCharts from '../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminAlertsCharts';
import AdminDashboardSupportAgents from '../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminDashboardSupportAgents/AdminDashboardSupportAgents';
import AdminDashboardElderlies from '../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminDashboardElderlies/AdminDashboardElderlies';
import { Helmet } from 'react-helmet';


const DashboradAdmin = () => {
    return (
        <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Smart Home | Admin Dashboard</title>
            <link rel="canonical" href="" />
        </Helmet>
        <div className='md:mx-[22px] px-2'>
            <div className="flex items-center gap-2 text-xs mt-10">
                <h1>Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 className=' text-[#0070F0]'>Dashboard</h1>
            </div>

            <div className=' grid grid-cols-1'>
            <div className='flex items-start justify-between flex-col  lg2:flex-row gap-[30px] mt-5 w-full'>
                <div className='bg-white w-full lg2:w-[67%] rounded-[10px]'>
                    <AdminSupportAgentCharts />
                </div>
                <div className='flex flex-col gap-[30px] w-full lg2:w-[32%]'>
                    <div className='bg-white w-full rounded-[10px]'>
                        <AdminElderliesOverview />
                    </div>

                    <div className='bg-white w-full rounded-[10px]'>
                        <AdminAlertsCharts />
                    </div>
                </div>
            </div>

            <div className='mt-[30px] mb-8 grid grid-cols-1 lg2:grid-cols-2 items-start  flex-col justify-between gap-[30px]'>
                <div className='bg-white w-full  rounded-[10px] '>
                    <AdminDashboardSupportAgents />
                </div>
                <div className='bg-white w-full rounded-[10px] '>
                    <AdminDashboardElderlies />
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default DashboradAdmin