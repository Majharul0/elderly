import { Icon } from '@iconify/react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminElderlyOverView from "../../../../../Components/Admin/AdminDashboard/AdminDashbordMain/AdminElderlyTabs/AdminElderlyOverView/AdminElderlyOverView";
import { SidebarContext } from "../../../../../Context/SidebarContext";
import Activity from "./Activity/Activity";
import DevicesSupportAgent from "./DevicesSupportAgent/DevicesSupportAgent";
import NotificationSupportAgent from "./NotificationSupportAgent/NotificationSupportAgent";
import Overview from "./Overview/Overview";
import Report from "./Report/Report";
import Subscriptions from "./Subscriptions/Subscriptions";
import UserProfile from "./UserProfile/UserProfile";

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

const Person = () => {
  const [value, setValue] = React.useState(0);
  const { overView, brackCount } = useContext(SidebarContext)
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <Container maxWidth="xl"> */}
      <div className="mx-7 md:grid md:grid-cols-1">
        {/* <div className="flex items-center gap-2 text-xs font-medium text-[#5D6670] py-8">
        <Link to='/support-agent/dashboard'>Home</Link> <ArrowForwardIosIcon fontSize="sm" />
          <Link to='/support-agent/dashboard' className=' cursor-pointer'>{brackCount}</Link> <ArrowForwardIosIcon fontSize="sm" />
          <Link className="text-primary">Kari Daughetry #453453</Link>
        </div> */}
        <div className="flex items-center gap-2 text-xs my-8">
          <h1 onClick={() => navigate("/support-agent/dashboard")}>Home</h1> <ArrowForwardIosIcon fontSize="sm" />
          <h1 onClick={() => navigate(-1)} className=' cursor-pointer'>{brackCount}</h1> <ArrowForwardIosIcon fontSize="sm" />
          <h1 className=' text-[#0070F0]'>Kari Daughetry #453453</h1>
        </div>

        <div>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                backgroundColor: "white",
                borderRadius: 2,
                color: "#90969D",
                fontSize: "18px !important",
                fontWeight: "500",
                textTransform: "capitalize",
                maxWidth: { xs: 520, sm: 680, md: 800, lg: 1200, xl: 3000 },
              }}
            >
              <Tabs
                sx={{
                  fontSize: "18px !important",
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
                  icon={<Icon className="text-lg" icon="uil:desktop" />}
                  iconPosition="start"
                  label="Devices"
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<Icon className="" icon="fa6-regular:credit-card" />}
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
                  icon={<Icon className="text-lg" icon="octicon:people-16" />}
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
              {/* 
              here AdminElderlyOverView is first trends &
              here Overview is Trends to details trend
              */}
              {overView ? <AdminElderlyOverView /> : <Overview />}

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

      {/* </Container> */}
    </>
  );
};
export default Person;