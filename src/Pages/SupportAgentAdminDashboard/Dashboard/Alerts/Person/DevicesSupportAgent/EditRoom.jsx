import React, { useState } from 'react';
import CustomToast from '../../../../../../Shared/Tosat/CustomToast';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import FormDrawer from '../../../../../../Shared/Drawer/FormDrawer';
import InputBox from '../../../../../../Shared/input/InputBox';

const EditRoom = ({ editRoom, setEditRoom,selectedRoom}) => {
    const [roomName,setRoomName]=useState("Living Room")
    
    // for getting selected room---------------- 
    const handleRoom=(e)=>{
        setRoomName(e.target.value)
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        try {
            // Simulate an API call
            // Replace this with your actual API call
            // await apiCallFunction(data);
            reset();
            setEditRoom(false)
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="Successfully Edited!" />);
        } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while editing room.');
        }
    };

    return (
        <div>
            <FormDrawer
                creactDrawer={editRoom}
                setCreactDrawer={setEditRoom}
                title={"Edit Room"}
                button={"Save Changes"}
                handleSubmit={handleSubmit(onSubmit)}
            >
                <InputBox
                    lable={"Room Name"}
                    type={"text"}
                    register={
                        register("roomName", {
                            required: {
                                value: true,
                                message: "",
                            },
                        })
                    }
                    error={errors.roomName}
                    placeholder={selectedRoom}
                />
                <p className='text-[#3D4854] text-[13px] font-medium mb-1.5 mt-6 '>Room Type</p>
                <select className='gap-[14px] outline-none w-full text-[17px] text-[#90969D] rounded-[10px] py-[12px] cursor-pointer focus:border-primary border border-[#90969D] px-[3px]' onChange={handleRoom} value={roomName}>
                    <option defaultChecked value="Bed Room">Living Room</option>
                    <option value="Living Room">Bed Room</option>
                    <option value="Dining Room">Dining Room</option>
                    <option value="Kitchen Room">Kitchen Room</option>
                </select>
            </FormDrawer>
        </div>
    );
};

export default EditRoom;