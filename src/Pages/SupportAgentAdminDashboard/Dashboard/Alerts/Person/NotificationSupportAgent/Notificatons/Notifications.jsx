import React from 'react';
import { Icon } from '@iconify/react';
import CustomNotificationModal from './CustomNotificationModal/CustomNotificationModal';
const Notifications = () => {

    // --------------------this is for custom notification button modal----------------------
    const [open, setOpen] = React.useState(false);
    const handleModalOpen = () => {
        setOpen(true);
    };
    const modalInfo = {
        open,
        setOpen
    }

    return (
        <div className=' rounded-[10px] bg-white'>
            <div className="p-6 md:flex lg2:flex justify-between ">
                <h1 className="text-[#3D4854] text-2xl font-medium" >Notifications</h1>
                <button onClick={handleModalOpen} className='bg-primary px-3 py-2 text-white font-medium text-sm rounded-[10px] gap-[10px] flex items-center sm:mt-3 md:mt-0'>Custom Notification <Icon className='font-bold' icon="basil:send-outline" /></button>
            </div>
            <CustomNotificationModal modalInfo={modalInfo} ></CustomNotificationModal>
            <div>
                <div className='bg-[#f1f5f9] px-6 border-b lg2:flex justify-between  md:flex  py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="basil:info-triangle-outline" />
                        </div>
                        <div>
                            <div className='lg2:flex items-center md:flex'>
                                <span className='font-medium text-lg text-[#3D4854]'>New Access granted</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>Just Now</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">A person wants access to enter in the house</p>
                            <div className='my-3'>
                                <button className='mr-5 bg-primary text-white text-sm rounded-[10px] font-medium py-2 px-3'>Accept</button>
                                <button className='bg-[#ff2727] text-white text-sm font-medium rounded-[10px] py-2 px-3'>Decline</button>
                            </div>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                </div>
                <div className='px-6 lg2:flex justify-between  md:flex  border-b   py-5'>
                    <div className='flex'>
                        <div className="bg-[#FFE9E9] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-[#FF2727]' icon="jam:alert" />
                        </div>
                        <div>
                            <div className='lg2:flex  md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]k'>SOS Emergency Alert!</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>07:20 pm</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">This is an urgent distress signal. Immediate assistance required.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                </div>
                <div className='px-6 lg2:flex justify-between  md:flex  border-b  py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="mdi:bed-time" />
                        </div>
                        <div>
                            <div className='lg2:flex  md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>Bedtime: Has not gone to bed yet</span>
                                <div className='flex items-center'><Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>07:20 pm</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">The elderly user has not gone to bed yet. Please check in and ensure their well-being.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                </div>
                <div className='px-6 border-b lg2:flex justify-between  md:flex   py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="basil:info-triangle-outline" />
                        </div>
                        <div>
                            <div className='lg2:flex md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>Elderly Fall Detected!</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>04:50 am</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">An elderly person has fallen. Please check on them immediately.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>July 24, 2023</p></div>
                </div>
                <div className='px-6  lg2:flex justify-between  md:flex  border-b  py-5'>
                    <div className='flex'>
                        <div className="bg-[#FFE9E9] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-[#FF2727]' icon="jam:alert" />
                        </div>
                        <div>
                            <div className='lg2:flex  md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>SOS Emergency Alert!</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>07:20 pm</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">This is an urgent distress signal. Immediate assistance required.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Today</p></div>
                </div>
                <div className='px-6 lg2:flex justify-between  md:flex  border-b  py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="mdi:toilet" />
                        </div>
                        <div>
                            <div className='lg2:flex md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>Frequently Bathroom Visit</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>07:20 pm</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">The elderly user has visited the bathroom frequently. Please consider checking on them to ensure their comfort and safety.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                </div>
                <div className='px-6 lg2:flex justify-between  md:flex  border-b  py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="mdi:bed-time" />
                        </div>
                        <div>
                            <div className='lg2:flex  md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>Bedtime: Has not gone to bed yet</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>07:20 pm</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">The elderly user has not gone to bed yet. Please check in and ensure their well-being.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>Yesterday</p></div>
                </div>
                <div className='px-6 border-b lg2:flex justify-between  md:flex  py-5'>
                    <div className='flex'>
                        <div className="bg-[#E6F1FE] rounded-[10px] h-8 mr-2.5 p-1.5">
                            <Icon className='text-primary' icon="basil:info-triangle-outline" />
                        </div>
                        <div>
                            <div className='lg2:flex  md:flex items-center'>
                                <span className='font-medium text-lg text-[#3D4854]'>Elderly Fall Detected!</span>
                                <div className='flex items-center'>
                                    <Icon className="text-[5px] text-[#90969D] mx-1" icon="ion:ellipse" />
                                    <span className='text-[11px] text-xs font-medium text-[#90969D]'>04:50 am</span>
                                </div>
                            </div>
                            <p className="text-sm text-[#5D6670] sm:my-1 lg2:my-0 md:my-0">An elderly person has sliped. Please check on them immediately.</p>
                        </div>

                    </div>
                    <div className='flex items-center'><p className='text-sm font-medium text-[#90969D] sm:ml-9 lg2:ml-0 md:ml-0'>July 24, 2023</p></div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;