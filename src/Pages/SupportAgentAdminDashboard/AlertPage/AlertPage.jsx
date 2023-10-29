import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import { Icon } from '@iconify/react';
import AllAlertsTab from '../../../Components/SupportAgent/AlertsComponents/AllAlertsTab/AllAlertsTab';
import { alertsData } from '../../../assets/supportAgentData/alertsData/alerts';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


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

const AlertPage = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smart Home |  Support-Agent-Alert</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className='md:px-[30px] px-2 pb-8'>
        <div className="flex items-center gap-2 text-xs mt-10">
          <h1 onClick={() => navigate("/support-agent/dashboard")} className="cursor-pointer">Home</h1> <ArrowForwardIosIcon fontSize="sm" />
          <h1 className=' text-primary'>Alerts</h1>
        </div>

        <div className='mt-5'>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                backgroundColor: "white",
                borderRadius: 2,
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
                  icon={<BorderAllOutlinedIcon fontSize="small" />}
                  iconPosition="start"
                  label="All"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<Icon icon="ant-design:alert-outlined" className="text-[20px]" />}
                  iconPosition="start"
                  label="Critical"
                  {...a11yProps(2)}
                />
                <Tab
                  icon={<Icon icon="ri:alert-line" className="text-[20px]" />}
                  iconPosition="start"
                  label="Warning"
                  {...a11yProps(3)}
                />
                <Tab
                  icon={<Icon icon="ant-design:bug-outlined" className="text-[20px]" />}
                  iconPosition="start"
                  label="Problem"
                  {...a11yProps(4)}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <AllAlertsTab data={alertsData} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <AllAlertsTab data={alertsData.filter((item) => item.alert === "alert")} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <AllAlertsTab data={alertsData.filter((item) => item.alert === "warning")} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
              <AllAlertsTab data={alertsData.filter((item) => item.alert === "bug")} />
            </CustomTabPanel>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default AlertPage;