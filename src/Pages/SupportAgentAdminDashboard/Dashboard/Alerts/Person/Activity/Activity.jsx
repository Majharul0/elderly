import React from 'react';
import Video from './Video/Video'
import Trends from '../Overview/Trends/Trends';
import ElderlyConditions from './ElderlyConditions/ElderlyConditions';
import ElderlyFallDetected from '../../../../../../Components/ElderlyFallDetected';

const Activity = () => {

    return (
        <div className='mb-[30px]'>
            <ElderlyFallDetected/>
            <div>
                <div className='xl:flex mb-7 mt-5 gap-7'>
                    <div className='xl:w-2/3 w-full'> <Video></Video></div>
                    <div className='xl:w-1/3 w-full'> <ElderlyConditions></ElderlyConditions></div>
                </div>
            </div>
            <Trends></Trends>
        </div>
    );
};

export default Activity;