import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SuperAdminEditDrawer from '../SuperAdminDrawer/SuperAdminEditDrawer';
import SuperAdminResetPasswordDrawer from '../SuperAdminDrawer/SuperAdminResetPasswordDrawer';
import SuperAdminDeleteDialog from '../SuperAdminDialog/SuperAdminDeleteDialog';

const SuperAdminUserDataAction = ({data}) => {

    const [creactDrawer, setCreactDrawer] = React.useState(false); 
    const [resetDrawer, setResetDrawer] = React.useState(false);   
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [deleteItem,setDeleteItem] = React.useState(false)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const toggleDrawerReset = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setResetDrawer( open );
      };

    const hendleEdit=()=>{
        handleClose()
        setCreactDrawer(true)
    }

    const hendleReset=()=>{
        handleClose()
        setResetDrawer(true)
    }

    const hendleDelete=()=>{
        handleClose()
        setDeleteItem(true)
    }

  return (
    <div>
        <div className='flex gap-1 items-center justify-end'>
            <IconButton onClick={handleClick}   
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <MoreVertIcon />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
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
                        boxShadow:"2px 2px 6px 0px rgba(0,0,0,0.1)"
                    },
                    }}
            >
                <MenuItem sx={{":hover":{background:"#E6F1FE",color:"#0070F0"}}} onClick={hendleEdit}>Edit Details</MenuItem>
                <MenuItem sx={{":hover":{background:"#E6F1FE",color:"#0070F0"}}} onClick={hendleReset}>Reset password</MenuItem>
                <MenuItem sx={{":hover":{background:"#FFE9E9",color:"red"}}} onClick={hendleDelete}>Delete</MenuItem>
            </Menu>
        </div>
        {/* =============super admin edit drawer============ */}
        <SuperAdminEditDrawer creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer} item={data}/>
        {/* =============super admin Rest Password drawer============ */}
        <SuperAdminResetPasswordDrawer creactDrawer={resetDrawer} toggleDrawer={toggleDrawerReset} setCreactDrawer={setResetDrawer}/>
        {/* =============super admin Delete dialog============ */}
        <SuperAdminDeleteDialog open={deleteItem} setOpen={setDeleteItem} />
    </div>
  )
}

export default SuperAdminUserDataAction