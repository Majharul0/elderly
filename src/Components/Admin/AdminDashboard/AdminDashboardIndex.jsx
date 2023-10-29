import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import DashboardNav from '../Shared/DashboardNav';
import AdminSidber from './AdminSidber/AdminSidber';
import SidebarDrawer from '../../../Shared/Drawer/SidebarDrawer';
import { SidebarContext } from '../../../Context/SidebarContext';

const AdminDashboardIndex = () => {
  const {show,setShow} = useContext(SidebarContext)
  return (
    <>
            <div className="flex gap-5">
                <div className='w-[280px] md2:block hidden'>
                    {/* ----------------admin Dashboard sidebar here----------------- */}
                    <AdminSidber />
                </div>
                <SidebarDrawer openSide={"left"} isOpenDrawer={show} setIsOpenDrawer={setShow}>
                  <AdminSidber />
                </SidebarDrawer>
                <div className='bg-[#F1F5F9] w-full min-h-[100vh]'>
                    {/* Admin dashboard outlet create */}
                    <DashboardNav/>
                    <Outlet></Outlet>
                </div>
            </div>
    </>
  )
}

export default AdminDashboardIndex