import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../Shared/Tosat/CustomToast';

const SuperAdminDeleteDialog = ({open,setOpen}) => {

    const handleClose = () => {
      setOpen(false);
    };

    const  deleteItem = ()=>{
        try {
            // Simulate an API call
            // Replace this with your actual API call
            // await apiCallFunction(data);
            setOpen(false); 
      
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="Support Agent account has been successfully deleted" />);
          } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while creating a new admin.');
          }
    }


  return (
    <div>
        <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
            <Box sx={{
                display:"flex",
                justifyContent:"flex-end"
            }}>
            <IconButton onClick={()=>setOpen(false)}>
                    <CloseIcon className=' text-black'/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            <Box sx={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
            }}>
                <Box sx={{
                    width:"100px",
                    height:"100px",
                    borderRadius:"50%",
                    background:"#FFE9E9",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    
                }}>
                    <Icon icon="basil:trash-alt-outline" className='text-[45px] text-red-500'/>
                </Box>
            </Box>
        </DialogContent>
        <DialogContent>
            <h2 className=' text-[25px] text-center font-[500] text-black'>Are You Sure?</h2>
            <p className='text-[16px] font-[400] text-secondary text-center'>Are you sure to delete this admin account? This process can <br /> be undo.</p>
        </DialogContent>
        <DialogContent>
                <Box sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    gap:"20px",
                    marginBottom:"20px"
                }}>
                <button
                    onClick={()=>deleteItem()}
                    className="font-bold  py-3 px-5 rounded-[10px] bg-red-500 border border-red-500 text-white "
                    >
                    Delete
                    </button>
                    <button
                    onClick={()=>setOpen(false)}
                    className="font-bold  py-3 px-5 rounded-[10px] bg-transparent text-secondary border border-secondary"
                    >
                    Cancel
                    </button>
                </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SuperAdminDeleteDialog