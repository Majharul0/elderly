import React from 'react';
import ProfileCover from './ProfileCover';
import UserTable from './UserTable';
// import GenderChart from '../../../Shared/Charts/SidebarCharts/GenderChart';
// import GenderChart from '../../../Shared/Charts/SidebarCharts/GenderChart';
import GenderAntChart from '../../../../../../Shared/Charts/SidebarCharts/GenderAntChart';
import UserProfileAgeChart from '../../../../../../Shared/Charts/SidebarCharts/UserProfileAgeChart';

const UserProfile = () => {
    return (
        <div>
            <ProfileCover />

            <div className='my-[30px] flex lg2:flex-row flex-col gap-[30px] '>
                <div className='lg2:w-[68%] w-full '>
                    <UserTable />
                </div>
                <div className='lg2:w-[32%] w-full'>
                    <div className='bg-white  p-4 rounded-[10px] mb-[30px]'>
                        <GenderAntChart />
                    </div>
                    <div className='bg-white  p-4 rounded-[10px]'>
                        <UserProfileAgeChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;