import { Drawer, IconButton } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const SidebarDrawer = ({ openSide, isOpenDrawer, setIsOpenDrawer, children }) => {

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setIsOpenDrawer( open );
      };

    return (
        <>
            <Drawer
                anchor={openSide}
                open={isOpenDrawer}
                onClose={toggleDrawer(false)}
            >
                <div className=' bg-white h-[100vh] relative'>
                <div className='flex items-center justify-between absolute top-[20px] right-[10px] z-50'>
                    <IconButton onClick={()=>setIsOpenDrawer(false)}>
                        <CloseIcon className=' text-black'/>
                    </IconButton>
                </div>
                    <div>
                        {children}
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default SidebarDrawer;