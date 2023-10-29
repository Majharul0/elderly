import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import SupportAgentSideBar from '../Sidebar/SupportAgentSideBar';
import DashboardNav from '../Shared/DashboardNav';
import { SidebarContext } from '../../../Context/SidebarContext';
import SidebarDrawer from '../../../Shared/Drawer/SidebarDrawer';

const SupportAgentAdminDashboardIndex = () => {
  const {show,setShow} = useContext(SidebarContext)
  return (
    <>
      <div className="flex gap-5">
        <div className='w-[280px] md2:block hidden'>
          {/* ----------------support-agent Dashboard sidebar here----------------- */}
            <SupportAgentSideBar />
        </div>
        <SidebarDrawer  openSide={"left"} isOpenDrawer={show} setIsOpenDrawer={setShow}>
            <SupportAgentSideBar />
          </SidebarDrawer>
        <div className='bg-[#F1F5F9] w-full min-h-[100vh]'>
          {/* support-agent dashboard outlet create */}
          <DashboardNav />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default SupportAgentAdminDashboardIndex;