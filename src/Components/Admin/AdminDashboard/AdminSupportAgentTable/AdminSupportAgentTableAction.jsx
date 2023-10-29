import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SupportAgentsEdit from '../AdminDrawer/SupportAgentsEdit';
import SupportAgentResetPassword from '../AdminDrawer/SupportAgentResetPassword';
import DeleteDialog from '../../../../Shared/Delete/DeleteDialog';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';

const AdminSupportAgentTableAction = ({data}) => {
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

    const deleteSupportAgent = ()=>{
        try {
            // Simulate an API call
            // Replace this with your actual API call
            // await apiCallFunction(data);

            setDeleteItem(false) 
      
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="Support Agent account has been successfully deleted" />);
          } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while creating a new admin.');
          }
    }


  return (
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

        {/* =========Support Agent edit modal start=========*/}
        <SupportAgentsEdit creactDrawer={creactDrawer} setCreactDrawer={setCreactDrawer} item={data}/>
        {/* =========Support Agent edit modal End=========*/}

        {/* =========Support Agent Reset Password modal start=========*/}
            <SupportAgentResetPassword creactDrawer={resetDrawer} setCreactDrawer={setResetDrawer}/>
        {/* =========Support Agent Reset Password modal end=========*/}

        {/* =========Support Agent Delete modal start=========*/}
        <DeleteDialog open={deleteItem} setOpen={setDeleteItem} onDelete={deleteSupportAgent} title={"Are you sure to delete this support agent account? This"} title2={" process is irreversible."}/>
        {/* =========Support Agent Delete modal end=========*/}
    </div>
  )
}
export default AdminSupportAgentTableAction