import React from 'react';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';
import SidebarNestedMenu from '../../../Shared/SidebarNastedMenu/SidebarNestedMenu';
import SidebarDashboardChart from '../../../Shared/Charts/SidebarCharts/DashboardSidebarAntChart';
import { IconButton } from '@mui/material';
const AdminSideBar = () => {
    const navigate = useNavigate()
    const path = useLocation()
    const menus = [
        {
            label: 'Alerts', path: '/support-agent/dashboard', icon: <Icon className=' w-5 h-5' icon="basil:info-triangle-outline" />, child: []
        },
        // {
        //     label: 'Alerts', path: '/support-agent/dashboard/alerts', icon: <Icon className=' w-5 h-5' icon="basil:info-triangle-outline" />, child: []
        // },
        // {
        //     label: 'Elderly', path: '/support-agent/dashboard/elderly', icon: <Icon className=' w-5 h-5'  icon="mingcute:user-2-line" />, child: []
        // },

    ]

    const activeStyle = {
        backgroundColor: "#0070F0",
        color: "#fff",
        borderRadius: "12px",
    };
    return (
        <div className='flex flex-col justify-between h-[100vh] sticky top-0'>
            <section className='w-[280px]'>
                <div className='h-[80px] flex items-center justify-center'> <img src="/logo.png" alt="logo" className='max-w-[143px] mx-auto' /></div>
                {/* sidebar menu bar */}
                <div className='p-4 grid gap-1'>
                    {menus.map((menu,index) => {

                        if (menu.child.length < 1) {
                            return <NavLink to={menu.path}
                            key={index}
                                className='block rounded-[10px] hover:bg-primary p-4 hover:text-white duration-150 text-[#90969D]'
                                // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                                style={(menu.path === path.pathname ? activeStyle : undefined)}
                            >
                                <div className='flex item-center gap-2 font-bold'>
                                    <span>
                                        {menu.icon}
                                    </span>
                                    <p className='text-[16px] font-[500]'>{menu.label}</p>
                                </div>
                            </NavLink>
                        } else {
                            return <SidebarNestedMenu menu={menu} />
                        }
                    })}
                    <NavLink to={'/support-agent/dashboard/elderly'}
                        className='block rounded-[10px] hover:bg-primary p-4 hover:text-white duration-150 text-[#90969D]'
                        style={(path.pathname.includes('user') || path.pathname.includes('elderly') ? activeStyle : undefined)}
                    >
                        <div className='flex item-center gap-2 font-bold'>
                            <span>
                                <Icon className=' w-5 h-5' icon="basil:user-outline" />
                            </span>
                            <p className='text-[16px] font-[500]'>Elderly</p>
                        </div>
                    </NavLink>
                </div>


            </section >

            <div>
                {/* <SidebarApexChart /> */}
                <div className='px-4'>  <SidebarDashboardChart /></div>
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-2 items-center'>
                        <img src="/image/profile.png" alt="profile" />
                        <div>
                            <p className='text-sm font-bold'>Jeon Sha</p>
                            <p className='text-xs text-[#3D4854]'>Support Agent</p>
                        </div>
                    </div>
                    {/* <Icon icon="ic:baseline-logout" className='cursor-pointer hover:text-primary' /> */}
                    <IconButton onClick={() => navigate("/login")}>
                        <Icon icon="ic:baseline-logout" className='cursor-pointer text-[20px] hover:text-primary' />
                    </IconButton>
                </div>
            </div>

        </div >
    );
};

export default AdminSideBar;