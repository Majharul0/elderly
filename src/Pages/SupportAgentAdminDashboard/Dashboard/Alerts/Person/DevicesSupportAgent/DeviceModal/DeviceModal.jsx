import { Icon } from '@iconify/react';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Checkbox } from 'antd';
import PropTypes from 'prop-types';
import * as React from 'react';
import RotateSearch from '../../../../../../../Components/RotateSearch';
import bosch from '../../../../../../../assets/supportAgentData/devicesImages/bosch.svg';
import camera from '../../../../../../../assets/supportAgentData/devicesImages/camera.svg';
import speaker from '../../../../../../../assets/supportAgentData/devicesImages/speaker.svg';
import watch from '../../../../../../../assets/supportAgentData/devicesImages/watch1.png';
import Step from './Step/Step';

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


const DeviceModal = ({ modalInfo }) => {
    const [selectDevice, setSelectDevice] = React.useState([{
        title: "dddd",
        img: bosch,
        id: 1
    }])
    const [submit, setSubmit] = React.useState('')
    // console.log(selectDevice)


    const handleSelect = (d) => {
        const isSelected = Boolean(selectDevice.find((item) => item?.id === d?.id))
        if (isSelected) {
            setSelectDevice(selectDevice.filter((item) => item.id !== d.id))
        } else {
            setSelectDevice((pre) => [...pre, d]);
        }
    }
    const handleClose = () => {
        modalInfo.setAddDeviceModalOpen(false);
    };

    const diviceData = [
        {
            title: "Bosch Smart Home",
            img: bosch,
            id: 1
        },
        {
            title: "Indoor Camera / CB71",
            img: camera,
            id: 2
        },
        {
            title: "Amazon Echo",
            img: speaker,
            id: 3
        },
        {
            title: "Apple Watch Series 3",
            img: watch,
            id: 4
        }
    ]

    return (
        <div>
            <BootstrapDialog
                sx={{
                    "& .MuiDialog-container": {
                        "& .MuiPaper-root": {
                            width: "100%",
                            maxWidth: "900px",
                            maxHeight: "852px",
                            background: "#fff",
                            borderRadius: "10px",
                            padding: "12px"
                        },
                    },
                }}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={modalInfo.addDeviceModalOpen}
            >
                <DialogContent>
                    <div className='flex justify-end'>
                        <IconButton
                            sx={{
                                color: "black",
                            }}
                            onClick={handleClose}
                        >
                            <Icon icon="charm:cross" />
                        </IconButton>
                    </div>
                </DialogContent>
                <DialogContent >
                    {
                        submit === "" ? (<div className=''>
                            <div className='w-full xl2:mx-[112px]'>
                                <div className='mb-[35px] flex justify-center relative'><RotateSearch /><div className='flex items-center  bg-[#E8F2FE] h-14 w-14 rounded-full absolute top-[84px] xl2:right-[240px]'><Icon className='text-primary ml-4 text-2xl text-center' icon="ant-design:search-outlined" /></div></div>
                                <h1 className='font-bold text-black text-xl text-center'>Searching For Devices...</h1>
                                <p className='text-sm text-secondary text-center'>Device is Searching, Please make sure your device is in <span className='text-primary'>pairing mode.</span></p>
                            </div>
                            <div className='mt-[45px]'>
                                <h1 className='font-bold text-lg'>{'Devices (04)'}</h1>
                                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                                    {diviceData?.map((d, index) => {
                                        const isSelected = Boolean(selectDevice.find((item) => item?.id === d?.id))
                                        return (<div key={index} onClick={() => handleSelect(d)} className={`cursor-pointer  flex justify-between rounded-[10px] border ${isSelected ? 'border-primary' : ''}`}>
                                            <img className='flex items-center w-[35px] mr-[10px] ml-4 my-5' src={d?.img} alt="" />
                                            <p className='flex items-center text-[#3D4854] font-bold text-xs mr-[12px]'>{d?.title}</p>
                                            <Checkbox checked={isSelected} className=' mr-2.5 mt-[-40px] rounded-checkbox'></Checkbox>
                                        </div>)
                                    })}
                                </div>
                            </div>
                            <div className='mt-5 flex justify-end'>
                                <button onClick={handleClose} className='border px-3 py-2.5 mr-5 text-xs text-secondary font-medium rounded-[10px]'>Cancel</button>
                                <button onClick={() => setSubmit("add")} className='border px-3 py-2.5 bg-primary text-white text-xs font-medium rounded-[10px]'>Add <span>{`(`} </span>{selectDevice?.length}<span> {`)`}</span></button>
                            </div>
                        </div>)
                            :
                            (<Step></Step>)
                    }

                </DialogContent>
            </BootstrapDialog>
        </div>
    );
};

export default DeviceModal;