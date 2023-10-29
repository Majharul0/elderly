import React from 'react'
import { Icon } from '@iconify/react';
import Trends from './Trends/Trends';
import { useContext, useEffect } from 'react';
import { SidebarContext } from '../../../../../../Context/SidebarContext';
import { toast } from 'react-hot-toast';
import ReedToast from '../../../../../../Shared/Tosat/ReedToast';
import GreenToast from '../../../../../../Shared/Tosat/GreenToast';
import ElderlyFallDetected from '../../../../../../Components/ElderlyFallDetected';
const Overview = () => {
    const { setOverView } = useContext(SidebarContext)

    useEffect(() => {
        const syncingTimeout = setTimeout(() => {
            toast.custom((t) => <ReedToast t={t} text="SOS emergency alert activated. Contact the user immediately and provide assistance." title="SOS Emergency Alert! " />)
        }, 3000);
        return () => {
            clearTimeout(syncingTimeout);
        };
    }, []);

    useEffect(() => {
        const initializingTimeout = setTimeout(() => {
            toast.custom((t) => <GreenToast t={t} text="No motion detected since the last recorded event. Please verify the sensor's status and connectivity." title="Emergency: No Motion Detected!" />)
        }, 10000);
        return () => {
            clearTimeout(initializingTimeout);
        };
    }, []);


    return (
        <div className='mb-[33px]'>
            <ElderlyFallDetected />
            <div className='flex items-center text-secondary font-medium py-6 '>
                <h2 onClick={() => setOverView(true)} className='flex items-center cursor-pointer text-lg text-[#5D6670]'> <Icon className='mr-1' icon="fluent:ios-arrow-left-24-filled" />Back</h2>
            </div>
            <Trends></Trends>
        </div>

    );
};

export default Overview;