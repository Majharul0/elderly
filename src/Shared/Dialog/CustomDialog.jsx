import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'

const CustomDialog = ({children,open,setOpen,title}) => {

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
                width: "100%",
                maxWidth: "700px",
                background:"#fff",
                borderRadius:"10px",
              },
            },
          }}
      >
        <DialogTitle>
            <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center"
            }}>
            <h2 className='text-[#3D4854] text-[23px] font-[500]'>{title}</h2>
            <IconButton onClick={()=>setOpen(false)}>
                    <CloseIcon className=' text-black'/>
                </IconButton>
            </Box>
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CustomDialog