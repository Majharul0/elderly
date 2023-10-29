import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomNotificationModal({ modalInfo }) {
    const [subject, setSubject]=React.useState('')
    const [description, setDescription]=React.useState('')

    const handleClose = () => {
        modalInfo.setOpen(false);
    };

    const handleSubmit=()=>{
        // console.log(subject, description);
        modalInfo.setOpen(false);
    }

    return (
        <div>
            <BootstrapDialog
                sx={{
                    borderRadius: "10px"
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={modalInfo.open}
            >
                <DialogContent>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-medium text-secondary'>Write Custom Notification</h1>
                        <IconButton
                        onClick={handleClose}
                        >
                            <Icon icon="charm:cross" />
                        </IconButton>

                    </div>
                </DialogContent>
                <DialogContent >
                    <div className='md:w-[450px] w-full'>
                        <div className='flex items-center'>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Classic" />
                            <FormControlLabel control={<Checkbox />} label="SMS" />
                        </div>
                        <div className='my-6'>
                            <p className='text-black text-sm font-medium mb-1.5'>Subject</p>
                            <input className='border rounded-[10px] p-3 w-full' type='text' placeholder='Subject' name='subject' onChange={(e)=>setSubject(e.target.value)}  value={subject}/>
                        </div>
                        <div>
                            <p className='text-black text-sm font-medium mb-1.5'>Description</p>
                            <textarea onChange={(e)=>setDescription(e.target.value)}  value={description} className='border rounded-[10px] mb-16 p-3 w-full' placeholder='Description' type='text' name='description'></textarea>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions
                    sx={{
                        margin: "auto"
                    }}
                >
                    <button onClick={handleSubmit} className='bg-primary px-3 py-2 text-white font-medium text-sm rounded-[10px] mb-3 flex items-center sm:mt-3 md:mt-0 lg2:mt-0'>Send<Icon className='ml-2 font-bold' icon="basil:send-outline" /></button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}