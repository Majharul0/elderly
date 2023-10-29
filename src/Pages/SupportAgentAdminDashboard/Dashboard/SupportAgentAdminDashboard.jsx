
import React from 'react';
import { Icon } from '@iconify/react';
import { Progress, Space } from 'antd';
import Alerts from './Alerts/Alerts';
import { Helmet } from 'react-helmet';

const SupportAgentAdminDashboard = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Smart Home |  Support-Agent</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className=''>
                <div className="flex items-center gap-2 text-[13px] m-[30px]">
                    <h1 className='text-[#5D6670]'>Home</h1> <Icon icon="ri:arrow-right-s-line" />
                    <h1 className='text-primary'>Dashboard</h1>
                </div>
                <div className=' grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-[30px] gap-[30px] ' id="supportAgent-p-bar">
                    <div className='bg-[#FF5959] rounded-[10px] flex justify-between py-[29px] px-4 relative overflow-hidden'>
                        <div className='text-white'>
                            <div className='bg-[#EB4B4B] w-10 h-10 mx-auto  flex items-center  rounded'>
                                <Icon className='text-lg mx-auto' icon="ant-design:alert-outlined" />
                            </div>
                            <p className='text-4xl mt-[14px] font-[800] text-center'>10</p>
                            <p className='text-sm font-medium text-center'>Critical</p>
                        </div>
                        <div className='flex items-center z-10'>
                            <Space wrap>
                                <Progress strokeColor={'white'} type="circle" percent={10} strokeWidth={8} size={70} />
                            </Space>
                        </div>
                        <div className='rounded-full w-56 h-56 bg-[#EB4B4B] absolute right-[24px] top-[-130px] z-0'></div>
                        <div className='rounded-full w-56 h-56 bg-[#EB4B4B] absolute right-[-82px] top-[-40px] z-0'></div>

                    </div>
                    <div className='bg-[#FF974D] rounded-[10px] flex justify-between py-[29px] px-4 relative overflow-hidden'>
                        <div className='text-white'>
                            <div className='bg-[#F2893D] mx-auto flex items-center  w-10 h-10 rounded'>
                                <Icon className='mx-auto text-lg' icon="mingcute:alert-line" />
                            </div>
                            <p className='text-4xl mt-[14px] font-semibold text-center'>25</p>
                            <p className='text-sm font-medium text-center'>Warning</p>
                        </div>
                        <div className='flex items-center z-10'>
                            <Space wrap>
                                <Progress strokeColor={'white'} type="circle" percent={25} strokeWidth={8} size={70} />
                            </Space>
                        </div>
                        <div className='rounded-full w-56 h-56 bg-[#F2893D] absolute right-[24px] top-[-130px] z-0'></div>
                        <div className='rounded-full w-56 h-56 bg-[#F2893D] absolute right-[-82px] top-[-40px] z-0'></div>
                    </div>
                    <div className='bg-[#5973FF] rounded-[10px] flex justify-between py-[29px] px-4 relative overflow-hidden'>
                        <div className='text-white'>
                            <div className='bg-[#4963F2] mx-auto flex items-center  w-10 h-10 rounded'>
                                <Icon className='mx-auto text-lg ' icon="solar:bug-outline" />
                            </div>
                            <p className='text-4xl mt-[14px] font-semibold text-center'>50</p>
                            <p className='text-sm font-medium text-center'>Problem</p>
                        </div>
                        <div className='flex items-center z-10' >
                            <Space wrap>
                                <Progress strokeColor={'white'} type="circle" strokeWidth={8} percent={50} size={70} />
                            </Space>
                        </div>
                        <div className='rounded-full w-56 h-56 bg-[#4963F2] absolute right-[24px] top-[-130px] z-0'></div>
                        <div className='rounded-full w-56 h-56 bg-[#4963F2] absolute right-[-82px] top-[-40px] z-0'></div>
                    </div>

                </div>
                <div className='bg-white rounded-[10px] mt-[39px] mx-[30px] mb-[76px]'>
                    <Alerts></Alerts>
                </div>
            </div>
        </>
    );
};

export default SupportAgentAdminDashboard;

