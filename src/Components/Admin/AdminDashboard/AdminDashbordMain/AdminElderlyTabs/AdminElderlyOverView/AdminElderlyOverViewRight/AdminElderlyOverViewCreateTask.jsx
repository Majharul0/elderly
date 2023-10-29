import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { Icon } from '@iconify/react';

const AdminElderlyOverViewCreateTask = ({open,setOpen}) => {

    const handleClose = () => {
      setOpen(false);
    };

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
                justifyContent:"space-between",
                alignItems:"center"
            }}>
            <h2 className='text-[23px] font-[500] text-secondary'>Create New Task</h2>
            <IconButton onClick={()=>setOpen(false)}>
                    <CloseIcon className=' text-black'/>
            </IconButton>
            </Box>
        </DialogTitle>

        <DialogContent>
            <div className='flex flex-col'>
                <span className='text-[13px] font-[500] text-[#0D1A29]'>Write Task</span>
                <textarea className='md:w-[450px] w-full h-[150px] p-3 border outline-none focus:border-primary border-secondary rounded-[10px]'></textarea>
            </div>
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
                    onClick={()=>setOpen(false)}
                    className="font-bold flex items-center justify-center gap-2 py-3 px-5 rounded-[10px] bg-primary border text-white "
                    >
                    Send
                    <Icon icon="basil:send-outline" />
                    </button>
                </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminElderlyOverViewCreateTask