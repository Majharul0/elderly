import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Icon } from '@iconify/react';

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

export default function RecordedHistoryModal({ modalInfo }) {
    const [activeTab, setActiveTab] = React.useState('All')
    const tabs = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Living Room',
        },
        {
            id: 3,
            title: 'Dining Room',
        },
        {
            id: 4,
            title: 'Kitchen Room',
        }
    ]

    const videoData = [
        {
            id: 1,
            time: "01.26.2023",
            title: "Living Room"
        },
        {
            id: 2,
            time: "01.26.2023",
            title: "Living Room"
        },
        {
            id: 3,
            time: "01.26.2023",
            title: "Living Room"
        },
        {
            id: 4,
            time: "01.26.2023",
            title: "Dining Room"
        },
        {
            id: 5,
            time: "01.26.2023",
            title: "Dining Room"
        },
        {
            id: 6,
            time: "01.26.2023",
            title: "Dining Room"
        },
        {
            id: 7,
            time: "01.26.2023",
            title: "Kitchen Room"
        }
    ]

    const handleClose = () => {
        modalInfo.setOpen(false);
    };

    return (
        <div>
            <BootstrapDialog
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "820px",
                            background: "#fff",
                            borderRadius: "10px",
                            padding: "10px"
                        },
                    },
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={modalInfo.open}
            >
                <DialogContent>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-2xl font-medium text-[#3D4854]'>Recorded History</h1>
                        <IconButton
                            onClick={handleClose}
                        >
                            <Icon className='text-[#2B2121]' icon="charm:cross" />
                        </IconButton>

                    </div>
                </DialogContent>
                <DialogContent >
                    <div className='md:mt-[-26px]'>
                        <div >
                            {tabs?.map(tab => <button onClick={() => { setActiveTab(tab?.title) }} className={`rounded-[10px] font-medium  lg:px-3 md:px-3 sm:px-2 py-2 lg:mr-4 md:mr-4 sm:mr-1 my-5 ${tab?.title === activeTab ? 'bg-primary text-white' : 'text-[#708398] bg-[#F6F7F9] '}`}>{tab?.title}</button>)}
                        </div>
                        <div>
                            {activeTab === 'All' && (<div>
                                {videoData.map(d => <div key={d.id}><div className='border-b text-[#3D4854]  py-3 flex items-center'><Icon className='text-primary mr-4 text-2xl' icon="basil:video-solid" />  <span className='font-medium '>{d.title} </span> <span className='mx-1 '>-</span> <span className=' font-medium '> {d.time}</span></div></div>)}
                            </div>)}

                            {activeTab === 'Living Room' && (<div>
                                {
                                    videoData
                                    .filter(d => d.title === 'Living Room')
                                    .map(d => (
                                      <div key={d.id} className='border-b text-[#3D4854] py-3 flex items-center'>
                                        <Icon className='text-primary mr-4 text-2xl' icon="basil:video-solid" />
                                        <span className='font-medium '>{d.title} </span> <span className='mx-1'>-</span> <span className=' font-medium'> {d.time}</span>
                                      </div>
                                    ))
                                  
                                }
                            </div>)}
                            {activeTab === 'Dining Room' && (<div>
                                {
                                    videoData
                                    .filter(d => d.title === 'Dining Room')
                                    .map(d => (
                                      <div key={d.id} className='border-b py-3 flex text-[#3D4854] items-center'>
                                        <Icon className='text-primary mr-4 text-2xl' icon="basil:video-solid" />
                                        <span className='font-medium '>{d.title} </span> <span className='mx-1'>-</span><span className='font-medium'> {d.time}</span>
                                      </div>
                                    ))
                                  
                                }
                            </div>)}
                            {activeTab === 'Kitchen Room' && (<div>
                                {
                                    videoData
                                    .filter(d => d.title === 'Kitchen Room')
                                    .map(d => (
                                      <div key={d.id} className='border-b  py-3 flex items-center'>
                                        <Icon className='text-primary mr-4 text-2xl' icon="basil:video-solid" />
                                        <span className='font-medium text-sm'>{d.title} </span> - <span className='text-sm font-medium'> {d.time}</span>
                                      </div>
                                    ))
                                  
                                }
                            </div>)}
                        </div>
                    </div>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
