import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Icon } from '@iconify/react';
import { Elderlies } from '../../../assets/admin/data';
import AdminElderlyOverView from '../../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminElderlyTabs/AdminElderlyOverView/AdminElderlyOverView';



function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }



const SupportAgentElderliesSinglePage = () => {
   const parmas = useParams()
   const [value, setValue] = useState(0);
   const [userData,setUserData] = useState()
   const navigate = useNavigate()
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

   useEffect(()=>{
        const elderly = Elderlies.find(item => item.id === parseInt(parmas.id));
        setUserData(elderly)
   },[parmas.id])

  return (
    <div>
        <div className='md:px-8 px-2'>
            <div className="flex items-center gap-2 text-xs mt-10">
                <h1 onClick={()=>navigate("/support-agent/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 onClick={()=>navigate("/support-agent/dashboard/elderly")} className="cursor-pointer">Elderly</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 className=' text-[#0070F0]'>{userData?.firstName} {userData?.lastName}</h1>
            </div>

            <div className='mt-5'>
                <Box sx={{ width: "100%"}}>
                    <Box
                    sx={{
                        borderBottom: 1,
                        borderColor: "divider",
                        backgroundColor: "white",
                        borderRadius: 2,
                        color: "#90969D",
                        fontSize: "10px !important",
                        textTransform: "capitalize",
                        maxWidth: { xs: 520, sm: 680, md: 800, lg: 1200, xl: 3000 },
                    }}
                    >
                    <Tabs
                        sx={{
                        fontSize: "10px !important",
                        textTransform: "capitalize",
                        }}
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab
                        icon={<SignalCellularAltIcon fontSize="small" />}
                        iconPosition="start"
                        label="Overview"
                        {...a11yProps(0)}
                        />
                        <Tab
                        icon={<Icon className="text-lg"  icon="uil:desktop" />}
                        iconPosition="start"
                        label="Devices"
                        {...a11yProps(1)}
                        />
                        <Tab
                        icon={<CardMembershipIcon fontSize="small" />}
                        iconPosition="start"
                        label="Subscriptions"
                        {...a11yProps(2)}
                        />
                        <Tab
                        icon={<NotificationsNoneIcon fontSize="small" />}
                        iconPosition="start"
                        label="Notifications"
                        {...a11yProps(3)}
                        />
                        <Tab
                        icon={<PeopleAltIcon fontSize="small" />}
                        iconPosition="start"
                        label="Users"
                        {...a11yProps(4)}
                        />
                        <Tab
                        icon={<Icon className="text-lg" icon="basil:clipboard-alt-outline" />}
                        iconPosition="start"
                        label="Report"
                        {...a11yProps(5)}
                        />
                    </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <AdminElderlyOverView />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        Devices
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={2}>
                        
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={3}>
                        
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={4}>
                       
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={5}>
                        
                    </CustomTabPanel>
                </Box>
            </div>
        </div>
    </div>
  )
}

export default SupportAgentElderliesSinglePage