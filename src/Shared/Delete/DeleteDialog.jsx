import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { Icon } from '@iconify/react';

const DeleteDialog = ({open,setOpen,onDelete,title,title2}) => {

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
        sx={{
            "& .MuiDialog-container": {
              "& .MuiPaper-root": {
                width: "500px",
                background:"#fff",
                borderRadius:"10px",
              },
            },
          }}
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
            <p className='text-[16px] font-[400] text-secondary text-center'>{title} <br /> {title2}</p>
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
                    onClick={onDelete}
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

export default DeleteDialog