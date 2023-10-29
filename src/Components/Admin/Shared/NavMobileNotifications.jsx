import React, { useEffect } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Badge, Divider } from '@mui/material';
import { Icon } from '@iconify/react';
import Notification from '../../../Shared/Notification/Notification';

const NavMobileNotifications = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [notificationCount, setNotificationCount] = React.useState(0);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };







    return (
        <div>
            <IconButton onClick={handleClick}
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
            >
                <Badge badgeContent={notificationCount} color="error">
                    <Icon icon="charm:bell" className='text-[20px] text-[#5D6670]' />
                </Badge>
                <p className='text-[14px] ml-3'>Notifications</p>
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                id={"hello"}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        boxShadow: "2px 2px 6px 0px rgba(0,0,0,0.3)"
                    },
                }}
            >
                <div className='md:w-[350px] w-[90%]'>
                    <div className='w-full px-4 py-3 flex items-center justify-between gap-2'>
                        <h2 className='text-[19px] font-medium text-secondary'>Notifications</h2>
                        <Icon icon="radix-icons:envelope-open" className='text-[23px] text-secondary' />
                    </div>
                    <div className=' bg-[#F5F5F5] py-2 px-4'>
                        <h3 className='tex-[13px] font-medium text-secondary'>Today</h3>
                    </div>

                    {/* -------------------------here notification data filter and show ------- */}
                    <Notification setNotificationCount={setNotificationCount} />
                </div>
            </Menu>
        </div>
    )
}

export default NavMobileNotifications