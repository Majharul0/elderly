import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import SuperAdminSidebar from './SuperAdminSidebar/SuperAdminSidebar';
import DashboardNav from '../Admin/Shared/DashboardNav';
import { SidebarContext } from '../../Context/SidebarContext';
import SidebarDrawer from '../../Shared/Drawer/SidebarDrawer';

const SuperAdminDashboardIndex = () => {
    const {show,setShow} = useContext(SidebarContext)
    return (
        <>
            <div className="flex gap-5">
                <div className='w-[280px] md2:block hidden'>
                    {/* ----------------admin Dashboard sidebar here----------------- */}
                    <SuperAdminSidebar />
                    <SidebarDrawer openSide={"left"} isOpenDrawer={show} setIsOpenDrawer={setShow}>
                        <SuperAdminSidebar />
                    </SidebarDrawer>
                </div>
                <div className='bg-[#F1F5F9] w-full min-h-[100vh]'>
                    {/* Admin dashboard outlet create */}
                    <DashboardNav />
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default SuperAdminDashboardIndex;