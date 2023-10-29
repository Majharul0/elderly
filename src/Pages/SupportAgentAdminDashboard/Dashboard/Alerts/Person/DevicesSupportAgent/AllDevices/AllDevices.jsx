import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { devicesData } from '../../../../../../../assets/supportAgentData/devicesData'
import { Switch } from 'antd';
import DeleteDialog from '../../../../../../../Shared/Delete/DeleteDialog';
import CustomToast from '../../../../../../../Shared/Tosat/CustomToast';
import { toast } from 'react-hot-toast';
import EditDevice from './EditDevice';

const AllDevices = () => {
    const [createDrawer, setCreateDrawer] = useState(false)
    const [devices, setDevices] = useState(devicesData);
    const [deviceName, setDeviceName] = useState(null);
    const [deviceImg, setDeviceImg] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [itemId, setItemid] = useState("")
    const handleEdit = (img, name) => {
        setDeviceName(name)
        setDeviceImg(img)
        setCreateDrawer(true);
    }

    const openDeleteModal = (deviceId) => {
        setItemid(deviceId)
        setOpen(true);
    }


    const handleDelete = () => {
        if (itemId) {
            const updatedDevices = devices.filter(device => device.id !== itemId);
            setOpen(false);
            setDevices(updatedDevices);
            toast.custom((t) => <CustomToast t={t} text={"Delete Device Successfully!"} />)
        }

    };
    return (
        <div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 sm:gap-4 md:gap-[30px]  '>
                {devices?.map((device) => <div key={device?.id} className='bg-white p-6 rounded-[10px]'>
                    <div className='flex justify-between relative'>
                        <div><img src={device?.img} alt="device" /></div>
                        {device?.stock === "out-stock" ? <Switch defaultChecked={true} color="primary" /> : <div className='group w-5 h-5'>
                            <Icon className='text-primary text-[19px] cursor-pointer ' icon="heroicons-outline:document-report" />
                            <div className={`bg-white rounded-[10px] shadow-xl px-[25px] py-[30px] absolute top-5 right-6 hidden group-hover:block`}>
                                <h1 className='text-[#3D4854] text-[19px] font-medium text-center'>Sensor Readings</h1>
                                <div className='mt-4 ml-[25px] '>
                                    <ul className='list-disc '>
                                        {device?.sensor?.map(s => <li className='text[#5D6670] text-[18px] font-medium'>{s}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>}

                    </div>
                    <div className='lg:flex items-center justify-between mt-5'>
                        <div className=''>
                            <div className='flex items-center'>
                                <div className={`w-[10px] h-[10px] rounded-full bg-[#01BE4F] mr-[6px]`}></div>
                                <p className='text-lg font-medium text-[#B4B8BD] d-block'>{device?.title}</p>
                            </div>
                            <h1 className='text-[19px] font-bold text-[#3D4854]'>{device?.name}</h1>
                        </div>
                        <div className=' sm:mt-2 lg:mt-0 flex flex-wrap gap-[9px]'>
                            <button onClick={() => handleEdit(device?.img, device?.name)} className='text-primary px-3 py-2 rounded-[10px] text-[13px] font-medium flex items-center gap-1 bg-[#E5F1FD]'><Icon icon="basil:edit-outline" className='text-[18px]' />Edit</button>
                            <button onClick={() => openDeleteModal(device?.id)} className='text-[#FF5959] p-2 rounded-[10px] text-[13px] font-medium flex items-center bg-[#FFEEEE]'><Icon icon="mdi:delete-forever-outline" className='text-[18px]' /></button>
                        </div>
                    </div>
                </div>)}

            </div>

            <DeleteDialog
                open={open}
                setOpen={setOpen}
                onDelete={handleDelete}
                title2={"Are you sure to delete this device? This process is irreversible."}
            />
            <EditDevice
                createDrawer={createDrawer}
                setCreateDrawer={setCreateDrawer}
                deviceImg={deviceImg}
                deviceName={deviceName}
            />
        </div>
    );
};

export default AllDevices;