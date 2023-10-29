import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import AllDevices from './AllDevices/AllDevices';
import DeviceModal from './DeviceModal/DeviceModal';
import humidityIcon from '../../../../../../assets/humidityIcon.svg'
import AddNewRoomModal from './DeviceModal/AddNewRoomModal';
import EditRoom from './EditRoom';
import DeleteDialog from '../../../../../../Shared/Delete/DeleteDialog';
const DevicesSupportAgent = () => {
    const [addNewRoom, setAddNewRoom] = React.useState(false);
    const [editRoom, setEditRoom] = React.useState(false);
    const [selectedRoom, setSelectedRoom] = useState("Living Room")
    const [addDeviceModalOpen, setAddDeviceModalOpen] = React.useState(false);
    const [deleteRoom, setDeleteRoom] = useState(false)

    // -------------get selected room for change------------------
    const handleSelectedRoom = (e) => {
        setSelectedRoom(e.target.value)
    }

    // ---------------for delete room modal open---------------
    const OpenHandleDeleteRoom = () => {
        setDeleteRoom(true);
    }
    // ---------------delete room------------------
    const handleDeleteRoom = () => {
        setDeleteRoom(false);
    }

    const handleEditRoom = () => {
        setEditRoom(true);
    }

    const handleAddDeviceModal = () => {
        setAddDeviceModalOpen(true);
    };

    //------------------for adding device------------------------------
    const modalInfo = {
        addDeviceModalOpen,
        setAddDeviceModalOpen
    }

    return (
        <div className='mb-7'>
            <div className="bg-primary rounded-[10px] p-6 mt-7 xl:flex md:justify-between">
                <div>
                    {/* -----------------select and change room form here------------------------ */}
                    <div className='flex items-center'>
                        <div className='text-white font-medium flex items-center'>
                            <Icon className='text-4xl mr-1' icon="solar:sofa-linear" />
                        </div>
                        <select onChange={handleSelectedRoom} value={selectedRoom} className='outline-0 border-0  bg-primary text-white ml-3 text-xl font-[500]' >
                            <option className='border-0 p-1 outline-0' defaultChecked value="Living Room">Living Room</option>
                            <option className='border-0 p-1 outline-0' value="Kitchen Room">Kitchen Room</option>
                        </select>
                    </div>

                    <div className='flex flex-wrap gap-9 md:mt-16 sm:mt-4'>
                        <div className='text-white flex items-center '>
                            <div><Icon className='text-4xl mr-2 opacity-75' icon="mi:temperature" /></div>
                            <div>
                                <p className=''>Temperature </p>
                                <div className='text-3xl font-medium'><span>24</span><sup className=''>o</sup><span>C</span></div>
                            </div>
                        </div>
                        <div className='text-white flex items-center  md:my-0 sm:my-3'>
                            <div><img className='mr-3' src={humidityIcon} alt="" /></div>
                            <div>
                                <p className=''>Humidity </p>
                                <div className='text-3xl font-medium'><span>24</span><sup className=''>o</sup><span>C</span></div>
                            </div>
                        </div>
                        <div className='text-white flex items-center '>
                            <div><Icon className='text-4xl mr-2 opacity-75' icon="icons8:electricity" /></div>
                            <div>
                                <p className=''>Current Consumption </p>
                                <h1 className='text-3xl font-medium'>484 kwh</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex xl:flex-col flex-wrap gap-[14px] justify-between mt-8 xl:mt-0'>

                    {/* ----------------add room for here------------------ */}
                    <div className='flex justify-end'>
                        <button onClick={() => setAddNewRoom(true)} className='bg-white py-2 px-3 rounded-[10px] text-primary flex items-center'><span><Icon className='mr-1' icon="gg:add-r" /></span><span className='text-sm font-medium'>Add New Room</span></button>
                    </div>

                    {/* --------------Edit and delete room here------------- */}
                    <div className='flex flex-wrap gap-[14px]'>
                        <button onClick={() => handleEditRoom()} className='text-white px-3 py-2 rounded-[10px] text-[13px] font-medium flex items-center gap-1 bg-[#338DF3]'><Icon icon="basil:edit-outline" className='text-[18px]' />Edit Room</button>
                        <button onClick={OpenHandleDeleteRoom} className='text-white px-3 py-2 rounded-[10px] text-[13px] font-medium flex items-center gap-1 bg-[#338DF3]'><Icon icon="mdi:delete-forever-outline" className='text-[18px]' />Delete Room</button>
                    </div>
                </div>
            </div>

            {/* ------------------devices add here----------------- */}
            <div className='flex items-center justify-between gap-3 flex-wrap mt-10 mb-[30px]'>
                <h1 className='text-[23px] font-medium text-[#000000]'>{`Devices (08)`}</h1>
                <button onClick={handleAddDeviceModal} className='bg-primary py-2 px-3 rounded-[10px] text-white flex items-center'><span><Icon className='mr-1' icon="gg:add-r" /></span><span className='text-sm font-medium'>Add Device</span></button>
            </div>

            {/*------------ this modal is for add devices------------------ */}
            <DeviceModal modalInfo={modalInfo}></DeviceModal>

            {/*--------------- all devices here-------------------- */}
            <div><AllDevices /></div>

            {/* ----------------------for edit room-------------------- */}
            <EditRoom
                editRoom={editRoom}
                setEditRoom={setEditRoom}
                selectedRoom={selectedRoom}
            />

            {/* ---------------------for delete room---------------------- */}
            <DeleteDialog
                open={deleteRoom}
                setOpen={setDeleteRoom}
                onDelete={handleDeleteRoom}
                title2={"Are you sure to delete this Room?"}
            />

            {/* ---------------------for add new room---------------------- */}
            <AddNewRoomModal
                addNewRoom={addNewRoom}
                setAddNewRoom={setAddNewRoom}
            />
        </div>
    );
};

export default DevicesSupportAgent;