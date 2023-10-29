import React, { useState } from 'react';
import { Icon } from '@iconify/react';
// import elderlyConditions from '../../../../../../../assets/supportAgentData/elderlyConditionsData.json'
import ElderlyConditionsChart from './ElderlyConditionsChart/ElderlyConditionsChart';

const ElderlyConditions = () => {
    // const [activeTab, setActiveTab] = useState("Elderly 1")

    const monthlyData = [
        { day: "Week 1", value: 25 },
        { day: "Week 2", value: 30 },
        { day: "Week 3", value: 25 },
        { day: "Week 4", value: 30 }
    ]
    const weeklyData = [
        { day: "sun", value: 5, },
        { day: "Mon", value: 6 },
        { day: "Tue", value: 7 },
        { day: "Wed", value: 8 },
        { day: "Thu", value: 4 },
        { day: "Fri", value: 2 },
        { day: "sat", value: 7 }
    ]
    const [selectedTime, setSelectedTime] = useState("Weekly");
    const [data, setData] = useState(weeklyData);
    const handleTime = (e) => {
        if (e.target.value === 'Weekly') {
            setData(weeklyData)
            setSelectedTime('Weekly')
        } else {
            setData(monthlyData)
            setSelectedTime('Monthly')
        }

    }
    // const tabs = [
    //     {
    //         id: 1,
    //         name: "Elderly 1"
    //     },
    //     {
    //         id: 1,
    //         name: "Elderly 2"
    //     },
    //     {
    //         id: 1,
    //         name: "Elderly 3"
    //     },
    //     {
    //         id: 1,
    //         name: "Elderly 4"
    //     },
    // ]
    return (
        <div className=' w-full bg-primary text-white rounded-lg py-5 xl:mt-0 mt-7'>
            <div className='flex justify-between px-5'>
                <h1 className='text-2xl font-medium'>Elderly Conditions</h1>
                <div className='flex items-center'>
                    <Icon className='text-5xl opacity-75 mr-3' icon="typcn:weather-partly-sunny" />
                    <div className='relative'>
                        <span className='text-3xl font-bold mr-1'>34</span><span className='absolute font-medium'><sup>o</sup>c</span>
                        <p className='text-sm'>Temperature</p>
                    </div>
                </div>
            </div>
            {/* <div className='mt-5 px-5'>
                {tabs?.map(tab => <button onClick={() => setActiveTab(tab?.name)} className={`text-xs rounded-[10px] py-2.5 xl:px-3  sm:px-2 xl:mr-2 sm:mr-2 ${activeTab === tab?.name && 'bg-white text-primary'}`}>{tab?.name}</button>)}
            </div> */}
            <div className=''>
                <div className='grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-2 mt-3 mb-2.5'>
                    <div className='p-5 '>
                        <Icon className='text-2xl opacity-75 mb-3.5' icon="ri:heart-pulse-fill" />
                        <div className='relative'>
                            <span className='text-3xl font-bold mr-1'>120/80</span><span className='text-xs font-medium absolute'>bpm</span>
                            <p className='text-sm'>Heart Rate</p>
                        </div>
                    </div>
                    <div className='py-5'>
                        <Icon className='text-2xl opacity-75 mb-3.5' icon="fontisto:blood-drop" />
                        <div className='relative'>
                            <span className='text-3xl font-bold mr-1'>72</span><span className='text-xs font-medium absolute'>mmgh</span>
                            <p className='text-sm'>Blood pressure</p>
                        </div>
                    </div>
                    <div className='py-5 md:px-0 sm:px-5'>
                        <Icon className='text-2xl opacity-75 mb-3.5' icon="fluent:temperature-20-filled" />
                        <div className='relative'>
                            <span className='text-3xl font-bold mr-1'>98.6</span><span className='absolute font-medium'><sup>o</sup>F</span>
                            <p className='text-sm'>Body Temperature</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mt-1 flex items-center justify-between py-2 px-5'>
                        <h1 className='font-medium'>Elderly Visits</h1>
                        <div className='py-2 px-3  text-xs border  border-white rounded-[10px]'>
                            <select className=' bg-primary text-white cursor-pointer outline-none' onChange={handleTime} value={selectedTime}>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>
                        </div>
                    </div>
                    <ElderlyConditionsChart data={data} />
                </div>
            </div>
        </div>
    );
};

export default ElderlyConditions;