import React from 'react';
import { Icon } from '@iconify/react';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import alertsData from '../../../../assets/supportAgentData/DashBoardAlertsData/DashBoardAlertsData.json'
import Sort from '../../../../Shared/Sort/Sort';
import { useState } from 'react';
import SearchInput from '../../../../Shared/Search/SearchInput';
import Alert from './Alert/Alert';

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

const Alerts = () => {
    const [value, setValue] = React.useState(0);
    // console.log(value);
    const [selected, setSelected] = useState('')
    const [search, setSearch] = useState('')

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const sortData = ['Sort', 'Id', 'Name']

    // for critical tab
    let critical = <span>Critical <span className={` py-0.5 px-1 text-[12px] font-medium rounded-[18px]  ${value === 0 ? 'bg-primary text-white' : 'bg-[#E8EBEF] text-[#3D4854]'}`}>10</span></span>
    // for warning tab
    let warning = <span>Warning <span className={` py-0.5 px-1 text-[12px] font-medium rounded-[18px]  ${value === 1 ? 'bg-primary text-white' : 'bg-[#E8EBEF]  text-[#3D4854]'}`}>25</span></span>
    // for problem tab
    let problem = <span>Problem <span className={` py-0.5 px-1 text-[12px] font-medium rounded-[18px] ${value === 2 ? 'bg-primary text-white' : 'bg-[#E8EBEF]  text-[#3D4854]'}`}>50</span></span>
    return (
        <div className='pt-7'>
            <div className='lg:flex md:flex justify-between px-6'>
                <h1 className='text-[#3D4854] text-2xl font-medium sm:text-center'>Alerts</h1>
                <div className='sm:flex justify-center items-center'>
                    <div className='sm:flex sm:mt-3 md:mt-0 lg:mt-0 gap-5'>
                        <SearchInput search={search} setSearch={setSearch} />
                        <Sort selected={selected} setSelected={setSelected} data={sortData} />
                    </div>
                </div>
            </div>
            <div>
                <div className="">
                    <Box sx={{ width: "100%" }}>
                        <Box
                            sx={{
                                borderColor: "divider",
                                backgroundColor: "white",
                                borderRadius: 2,
                                color: "#708398",
                                fontSize: "18px",
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
                                    icon={<Icon className={`text-lg  ${value === 0 ? 'text-primary' : 'text-[#708398]'}`} icon="ant-design:alert-outlined" />}
                                    iconPosition="start"
                                    label={critical}
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    icon={<Icon className={`text-lg  ${value === 1 ? 'text-primary' : 'text-[#708398]'}`} icon="mingcute:alert-line" />}
                                    iconPosition="start"
                                    label={warning}
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    icon={<Icon className={`text-lg  ${value === 2 ? 'text-primary' : 'text-[#708398]'}`} icon="solar:bug-outline" />}
                                    iconPosition="start"
                                    label={problem}
                                    {...a11yProps(2)}
                                />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Alert alertsData={alertsData.filter((critical) => critical.category === "critical")} />
                            {/* <Critical alertsData={alertsData.filter((critical) => critical.category === "critical")}></Critical> */}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Alert alertsData={alertsData.filter((warning) => warning.category === "warning")} />
                            {/* <Warning alertsData={alertsData.filter((warning) => warning.category === "warning")}></Warning> */}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Alert alertsData={alertsData.filter((problem) => problem.category === "problem")} />
                            {/* <Problem alertsData={alertsData.filter((problem) => problem.category === "problem")} ></Problem> */}
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Alerts;