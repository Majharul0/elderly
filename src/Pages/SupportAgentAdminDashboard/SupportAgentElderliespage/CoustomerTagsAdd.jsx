import React from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { Divider } from '@mui/material';
import { Icon } from '@iconify/react';

const CoustomerTagsAdd = ({data}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <Icon icon="basil:exchange-outline" className='text-[20px] hover:text-primary'/>
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
                        boxShadow:"2px 2px 6px 0px rgba(0,0,0,0.3)"
                    },
                    }}
            >
                <div className='w-[270px]'>
                    <div className='w-full px-2 flex items-center justify-between gap-2'>
                        <input type="text" placeholder='Type new tag' className='py-2 px-2 w-full border-none outline-none'/>
                        <button className='py-2 px-3 text-[11px] font-[500] text-white bg-primary rounded-[10px]'>Save</button>
                    </div>
                    <Divider />
                    <div className='px-4 mt-3'>
                        {
                            data.map((item,i)=>(
                                <div className='flex items-center gap-2 cursor-pointer mt-1'>
                                <h3 className='text-[13px] font-[500] text-secondary'>{item.title}</h3>
                                <div className=' w-[25px] h-[25px] rounded-[10px] flex items-center justify-center bg-[#E6F1FE]'>
                                    <span className='text-[13px] text-primary font-[500]'>{item.value}</span>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </Menu>
    </div>
  )
}

export default CoustomerTagsAdd