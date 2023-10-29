import React from 'react'
import AdminElderlyTrends from './AdminElderlyTrends'
import AdminElderlyOverViewRightActivits from './AdminElderlyOverViewRight/AdminElderlyOverViewRightActivits'
import AdminElderlyOverViewTags from './AdminElderlyOverViewRight/AdminElderlyOverViewTags'
import AdminElderlyOverViewTasks from './AdminElderlyOverViewRight/AdminElderlyOverViewTasks'
import AdminElderlyOverViewNotes from './AdminElderlyOverViewRight/AdminElderlyOverViewNotes'
import AdminElderlyOverViewLeft from './AdminElderlyOverViewLeft/AdminElderlyOverViewLeft'
import ElderlyFallDetected from '../../../../../ElderlyFallDetected'

const AdminElderlyOverView = ({ data }) => {
    return (
        <>
            <ElderlyFallDetected />
            <div className='mt-[29px] mb-8 grid grid-cols-1'>
                <div className='flex items-start  gap-[30px] lg2:flex-row flex-col w-full'>
                    {/* ======over view right======== */}
                    <div className=' lg2:w-[67%] w-full'>
                        <AdminElderlyTrends />
                        <div className='flex items-start flex-col md:flex-row gap-[30px] w-full mt-[30px]'>
                            <div className='flex flex-col w-full gap-[30px]'>
                                <div className=' bg-white  rounded-[10px] w-full'>
                                    <AdminElderlyOverViewRightActivits />
                                </div>
                                <div className='bg-white  rounded-[10px] w-full'>
                                    <AdminElderlyOverViewTags />
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-[30px]'>
                                <div className='bg-white rounded-[10px] w-full'>
                                    <AdminElderlyOverViewTasks />
                                </div>
                                <div className='bg-white rounded-[10px] w-full'>
                                    <AdminElderlyOverViewNotes />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ======over view left======== */}
                    <div className='lg2:w-[32%] w-full'>
                        <AdminElderlyOverViewLeft data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminElderlyOverView