import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../../../../Shared/Tosat/CustomToast';
import FormDrawer from '../../../../../../../Shared/Drawer/FormDrawer';
import InputBox from '../../../../../../../Shared/input/InputBox';

const AddNewRoomModal = ({ addNewRoom, setAddNewRoom }) => {
    const [selectedRoom, SetSelectedRoom] = useState("Bed Room")
    const handleRoom = (e) => {
        SetSelectedRoom(e.target.value);
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
            setAddNewRoom(false)
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="New Room has been created Successfully!" />);
        } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while creating a new room.');
        }
    };
    return (
        <div>
            <FormDrawer
                creactDrawer={addNewRoom}
                setCreactDrawer={setAddNewRoom}
                title={"Add New Room"}
                button={"Create"}
                handleSubmit={handleSubmit(onSubmit)}
            >

                <div className='items-center gap-4'>
                    <InputBox
                        lable={"Room Name"}
                        type={"text"}
                        register={
                            register("roomName", {
                                required: {
                                    value: true,
                                    message: "My Bed Room",
                                },
                            })
                        }
                        error={errors.roomName}
                        placeholder={"My Bed Room"}

                    />
                    <p className='text-[#3D4854] text-[13px] font-medium mb-1.5 mt-6 '>Room Type</p>
                    <select className='gap-[14px] outline-none w-full text-[17px] text-[#90969D] rounded-[10px] py-[12px] cursor-pointer focus:border-primary border border-[#90969D] px-[3px]' onChange={handleRoom} value={selectedRoom}>
                        <option value="Bed Room">Bed Room</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Dining Room">Dining Room</option>
                        <option value="Kitchen Room">Kitchen Room</option>
                    </select>
                </div>
            </FormDrawer>
        </div>
    );
};

export default AddNewRoomModal;