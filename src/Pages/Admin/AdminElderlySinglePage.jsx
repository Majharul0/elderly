import { Icon } from '@iconify/react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminElderlyOverView from '../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminElderlyTabs/AdminElderlyOverView/AdminElderlyOverView';
import { SidebarContext } from '../../Context/SidebarContext';
import { Elderlies } from '../../assets/admin/data';
import Activity from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/Activity/Activity';
import DevicesSupportAgent from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/DevicesSupportAgent/DevicesSupportAgent';
import NotificationSupportAgent from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/NotificationSupportAgent/NotificationSupportAgent';
import Overview from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/Overview/Overview';
import Report from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/Report/Report';
import Subscriptions from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/Subscriptions/Subscriptions';
import UserProfile from '../SupportAgentAdminDashboard/Dashboard/Alerts/Person/UserProfile/UserProfile';



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



const AdminElderlySinglePage = () => {
   const parmas = useParams()
   const {overView,brackCount} = useContext(SidebarContext)
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
  //  console.log(userData)

  return (
    <div>
        <div className='md:px-[30px] px-2'>
            <div className="flex items-center gap-2 text-xs mt-10">
                <h1 onClick={()=>navigate("/admin/dashboard")}>Home</h1> <ArrowForwardIosIcon fontSize="sm" />
                <h1 onClick={()=>navigate(-1)} className=' cursor-pointer'>{brackCount}</h1> <ArrowForwardIosIcon fontSize="sm" />
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
              }}
            >
              <Tabs
                sx={{
                  fontSize: "10px !important",
                  textTransform: "capitalize"
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
                  icon={<ExploreOutlinedIcon fontSize="small" />}
                  iconPosition="start"
                  label="Activity"
                  {...a11yProps(1)}
                />
                <Tab
                  icon={<Icon className="text-lg"  icon="uil:desktop" />}
                  iconPosition="start"
                  label="Devices"
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<CardMembershipIcon fontSize="small" />}
                  iconPosition="start"
                  label="Subscriptions"
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<NotificationsNoneIcon fontSize="small" />}
                  iconPosition="start"
                  label="Notifications"
                  {...a11yProps(4)}
                />
                <Tab
                  icon={<PeopleAltIcon fontSize="small" />}
                  iconPosition="start"
                  label="Users"
                  {...a11yProps(5)}
                />
                <Tab
                  icon={<Icon className="text-lg" icon="basil:clipboard-alt-outline" />}
                  iconPosition="start"
                  label="Report"
                  {...a11yProps(6)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                {overView ? <AdminElderlyOverView data={userData}/> : <Overview />}
              
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Activity></Activity>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <DevicesSupportAgent></DevicesSupportAgent>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <Subscriptions></Subscriptions>
            </CustomTabPanel> 
            <CustomTabPanel value={value} index={4}>
              <NotificationSupportAgent />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
              {/* --------here user profile component */}
              <UserProfile />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
              <Report></Report>
            </CustomTabPanel>
          </Box>
        </div>
        </div>
    </div>
  )
}

export default AdminElderlySinglePage