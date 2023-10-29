import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close'
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../../../../Shared/Tosat/CustomToast';

const AdminElderlyOverViewNotesEdit = ({open,setOpen,upast,setUpdate}) => {

    const handleClose = () => {
      setOpen(false);
    };

    const updateItem =()=>{
        setOpen(false);
        toast.custom((t)=><CustomToast t={t} text={"Update Notes Success"}/>)
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
                justifyContent:"space-between",
                alignItems:"center"
            }}>
            <h2 className='text-[23px] font-[500] text-secondary'>Update Notes</h2>
            <IconButton onClick={()=>setOpen(false)}>
                    <CloseIcon className=' text-black'/>
            </IconButton>
            </Box>
        </DialogTitle>

        <DialogContent>
            <div className='flex flex-col'>
                <textarea value={upast} onChange={(e)=>setUpdate(e.target.value)} className='md:w-[450px] w-full p-2 h-[150px] border outline-none focus:border-primary border-secondary rounded-[10px]'></textarea>
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
                    onClick={updateItem}
                    className="font-bold flex items-center justify-center gap-2 py-3 px-5 rounded-[10px] bg-primary border text-white "
                    >
                    update
                    </button>
                </Box>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AdminElderlyOverViewNotesEdit