import React, { useState } from 'react';
import FormDrawer from '../../../../../../../Shared/Drawer/FormDrawer';
import InputBox from '../../../../../../../Shared/input/InputBox';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../../../../Shared/Tosat/CustomToast';
import { Icon } from '@iconify/react';

const EditDevice = ({ createDrawer, setCreateDrawer, deviceName, deviceImg }) => {
    const [selectedRoom, SetSelectedRoom] = useState("Bed Room")
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleRoom = (e) => {
        SetSelectedRoom(e.target.value);
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const handleImageUpload = (e) => {
        // const image = e.target.files[0];
        // const formData = new FormData();
        // formData.append("image", image);
        const image = e.target.files[0];
        if (image) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setUploadedImage(event.target.result);
            };
            reader.readAsDataURL(image);
        }
    }

    const onSubmit = (data) => {
        try {
            // Simulate an API call
            // Replace this with your actual API call
            // await apiCallFunction(data);
            reset();
            setCreateDrawer(false)
            // Display the success toast
            toast.custom((t) => <CustomToast t={t} text="Successfully Edited!" />);
        } catch (error) {
            // Handle API call or other errors
            console.error('An error occurred:', error);
            toast.error('An error occurred while editing device.');
        }
    };

    return (
        <div>
            <FormDrawer
                creactDrawer={createDrawer}
                setCreactDrawer={setCreateDrawer}
                title={"Edit Device"}
                button={"Save Changes"}
                handleSubmit={handleSubmit(onSubmit)}
            >
                <div className='items-center gap-4'>
                    <div className='flex items-center justify-center mt-10 '>
                        <div className='flex items-center justify-center border rounded-full p-3 w-[120px] h-[120px] relative'>
                            {uploadedImage ? (
                                <img className='w-[70px] h-[70px]' src={uploadedImage} alt="" />
                            ) : (
                                <img className='' src={deviceImg} alt="" />
                            )}
                            <div className='w-[28px] h-[28px] bg-[#6C6C6C] flex items-center justify-center rounded-full absolute top-[81px] right-[2px] '>
                                <label for="file-input" class="file-label">
                                    <Icon className='text-white cursor-pointer' icon="uil:camera" />
                                </label>
                                <input
                                    type="file"
                                    id="file-input"
                                    className='hidden'
                                    onChange={handleImageUpload} />
                            </div>
                        </div>

                    </div>
                    <InputBox
                        lable={"Device Name"}
                        type={"text"}
                        register={
                            register("deviceName", {
                                required: {
                                    value: true,
                                    message: deviceName,
                                },
                            })
                        }
                        error={errors.roomName}
                        placeholder={deviceName}
                    />
                    <p className='text-[#3D4854] text-[13px] font-medium mb-1.5 mt-6 '>Device Room</p>
                    <select className='gap-[14px] outline-none w-full text-[17px] text-[#90969D] rounded-[10px] py-[12px] cursor-pointer focus:border-primary border border-[#90969D] px-[3px]' onChange={handleRoom} value={selectedRoom}>
                        <option value="Bed Room">Living Room</option>
                        <option value="Living Room">Bed Room</option>
                        <option value="Dining Room">Dining Room</option>
                        <option value="Kitchen Room">Kitchen Room</option>
                    </select>
                </div>
            </FormDrawer>
        </div>
    );
};

export default EditDevice;