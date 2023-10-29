import React from 'react';
import {NavLink, useLocation, useNavigate } from "react-router-dom";

import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
const SuperAdminSidebar = () => {
    const navigate = useNavigate()
    const path = useLocation()
    const menus = [
        {
            label: 'Admin', path: '/super-admin/dashboard', icon: <Icon className=' w-5 h-5' icon="basil:chart-pie-outline" />, child: []
        },
        {
            label: 'Suspended Admin', path: '/super-admin/dashboard/suspended-admin', icon: <Icon className=' w-5 h-5' Icon icon="basil:folder-block-outline" />, child: []
        },


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
                        return <NavLink key={index} to={menu.path}
                            className='block rounded-[10px] hover:bg-primary p-4 hover:text-white duration-150 text-[#90969D]'
                            style={(menu.path === path.pathname ? activeStyle : undefined)}
                        >
                            <div className='flex item-center gap-2 font-bold'>
                                <span>
                                    {menu.icon}
                                </span>
                                <p className='text-[16px] font-[500]'>{menu.label}</p>
                            </div>
                        </NavLink>
                    })}
                </div>


            </section >

            <div>
                {/* <SidebarApexChart /> */}
                <div className='flex justify-between items-center p-4'>
                    <div className='flex gap-2 items-center'>
                        <img src="/image/profile.png" alt="profile" />
                        <div>
                            <p className='text-sm font-bold'>Jeon Sha</p>
                            <p className='text-xs text-[#3D4854]'>Super Admin</p>
                        </div>
                    </div>
                    <IconButton onClick={()=>navigate("/login")}>
                        <Icon icon="ic:baseline-logout" className='cursor-pointer text-[20px] hover:text-primary' />
                    </IconButton>
                </div>
            </div>

        </div >
    );
};

export default SuperAdminSidebar;