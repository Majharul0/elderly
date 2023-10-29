import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, useLocation } from "react-router-dom";
import './App.css';
import SupportAgentAdminDashboardIndex from './Components/Admin/AdminDasbhoardIndex/SupportAgentAdminDashboardIndex';
import AdminDashboardIndex from './Components/Admin/AdminDashboard/AdminDashboardIndex';
import SuperAdminDashboardIndex from './Components/SuperAdmin/SuperAdminIndex';
import DashboradAdmin from './Pages/Admin/DashboradAdmin';
import DashboardSuperAdmin from './Pages/SuperAdmin/DashboardSuperAdmin';
import AlertPage from './Pages/SupportAgentAdminDashboard/AlertPage/AlertPage';
import CustomRoutes from './Routes/CustomRoutes';
import { adminRoutes } from './Routes/SupportAgentAdminRoutes';
import { adminRoutesMain } from './Routes/adminRoutes';
import { publicRoutes } from "./Routes/publicRoutes";
import { superAdminRoutes } from './Routes/superAdminRoute';
import ScrollToTop from './Shared/HelperFunction/ScrollToTop';

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
 
  return ( 
    <>
      <div>
        <ScrollToTop />
        <CustomRoutes>
          {publicRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* ------------------------admin dashboard  route--------------------- */}
          <Route
            path="/admin/dashboard"
            element={
              // <AuthSuperAdmin>
              <AdminDashboardIndex></AdminDashboardIndex>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<DashboradAdmin />} />
            {adminRoutesMain.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* ------------------------support-agent dashboard route--------------------- */}
          <Route
            path="/support-agent/dashboard/"
            element={
              // <AuthSuperAdmin>
              <SupportAgentAdminDashboardIndex></SupportAgentAdminDashboardIndex>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<AlertPage />} />
            {adminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>

          {/* -------------------super admin routing strat---------- */}
          <Route
            path="/super-admin/dashboard"
            element={
              // <AuthSuperAdmin>
              <SuperAdminDashboardIndex></SuperAdminDashboardIndex>
              // </AuthSuperAdmin>
            }
          >
            <Route index element={<DashboardSuperAdmin />} />
            {superAdminRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* -------------------super admin routing end---------- */}
        </CustomRoutes>

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>

    </>
  );
}

export default App;
