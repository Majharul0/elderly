import React, { useState, useEffect } from 'react';
import { NotificationsData } from '../../assets/supportAgentData/alertsData/alerts';
import { getRoleFromLocalStorage } from '../../utils/setAndGetRoleLocalStorage';
import { Icon } from '@iconify/react';
import { Badge, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Notification = ({ setNotificationCount }) => {
    const [filterNotificationData, setFilterNotificationData] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        if (NotificationsData.length && getRoleFromLocalStorage()) {
            const role = getRoleFromLocalStorage()
            const filterNotificationData = NotificationsData?.filter(notificationItem => notificationItem?.role === role)
            setNotificationCount(filterNotificationData.length)
            setFilterNotificationData(filterNotificationData)
        }
    }, [NotificationsData, getRoleFromLocalStorage])


    const handleNavigateNotificaitonDetails = (userId) => {
        const role = getRoleFromLocalStorage()
        if (role === 'supportAgent') {
            navigate(`/support-agent/dashboard/user/${userId}`)
        }
        if (role === 'admin') {
            navigate(`/admin/dashboard/elderly/${userId}`)
        }
        if (role === 'superAdmin') {
            // navigate(`/support-agent/dashboard/user/${id}`)
        }

    }

    return (
        <div className=' mt-3 max-h-[300px] overflow-y-scroll'>
            {
                filterNotificationData.map((item, index) => (<div key={index}>
                    <div onClick={() => handleNavigateNotificaitonDetails(item?.userId)} className='flex cursor-pointer items-start gap-2 px-4 ' >
                        <div>
                            {
                                item.alert === 1 && (
                                    <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#0070F0]/10`}>
                                        <Icon icon="ph:warning" className="text-[20px] text-[#0070F0]" />
                                    </div>
                                )
                            }
                            {
                                item.alert === 2 && (
                                    <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF2727]/10`}>
                                        <Icon icon="fe:warning" className="text-[20px] text-[#FF2727]" />
                                    </div>
                                )
                            }
                        </div>
                        <div>
                            <div className='flex items-center justify-between w-full'>
                                <h2 className='text-[16px] font-medium text-[#0D1A29] '>{item.title}</h2>
                                <div className='flex items-center gap-1 '>
                                    <span className='text-[11px] font-500 text-[#90969D]'>{item.time}</span>
                                    {
                                        item.time === "Just Now" && (
                                            <div className='w-[5px] h-[5px] rounded-full bg-primary'>

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            <p className='text-[13px] font-[400] text-[#5D6670]'>{item.sub}</p>
                        </div>
                    </div>
                    <div className='py-2'>
                        <Divider />
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default Notification;