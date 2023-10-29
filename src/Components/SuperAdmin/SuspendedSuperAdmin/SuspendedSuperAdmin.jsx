import React, { useState } from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SuspendAdminTop from './SuspendAdminTop/SuspendAdminTop';
import SuspendedAdminList from './SuspendedAdminList/SuspendedAdminList';
import { useNavigate } from 'react-router-dom';
import SuspendedSuperAdminCreate from './SuspendedSuperAdminCreate';
import { Helmet } from 'react-helmet';

const SuspendedSuperAdmin = () => {
  const navigate = useNavigate()
  const [create, setCreate] = useState(false)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smart Home | Supper-Admin-Suspended</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className='md:px-8 px-2'>
        <div className="flex items-center gap-2 text-xs mt-10">
          <h1 onClick={() => navigate("/super-admin/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
          <h1 className='text-[#0070F0]'>Suspended Admin</h1>
        </div>

        <div className='mt-5 w-full'>
          <SuspendAdminTop setCreate={setCreate} />
        </div>

        <div className=' grid grid-cols-1'>
          {/* --------------------suspend table list bellow---------------------- */}
          <SuspendedAdminList />
        </div>
      </div>
      <SuspendedSuperAdminCreate creactDrawer={create} setCreactDrawer={setCreate} />
    </div>
  )
}

export default SuspendedSuperAdmin