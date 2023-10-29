import React, { useContext, useEffect, useState } from 'react';
import AllOverview from './AllOverview/AllOverview';
import overviewData from '../../../../../../../assets/supportAgentData/OverviewData.json'
import { SidebarContext } from '../../../../../../../Context/SidebarContext';
const Trends = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [data, setData] = useState(overviewData[0])
    const { overViewActive } = useContext(SidebarContext)

    useEffect(() => {
        const data = overviewData.find(item => item?.title === overViewActive?.title)
        setData(data)
    }, [overViewActive?.title])


    const tabs = [
        {
            id: 1,
            title: 'All',
        },
        {
            id: 2,
            title: 'Average',
        },
        {
            id: 3,
            title: 'Warning',
        },
        {
            id: 4,
            title: 'Critical',
        }
    ]



    return (
        <div className='bg-white p-6 rounded-[10px] '>
            <div className='mb-7'>
                <h1 className='text-2xl text-black font-medium'>Trends</h1>
            </div>
            <div>
                <div className='gap-2'>
                    {tabs?.map((tab,index) => <button key={index} onClick={() => { setActiveTab(tab?.title) }} className={`rounded-[10px] font-medium  lg:px-3 md:px-3 sm:px-2 py-2 lg:mr-4 md:mr-4 sm:mr-1 my-5 ${tab?.title === activeTab ? 'bg-primary text-white' : 'text-[#708398] bg-[#F6F7F9] '}`}>{tab?.title}</button>)}

                </div>
                <div>
                    {activeTab === 'All' && <AllOverview overviewData={overviewData} chartData={data} />}
                    {activeTab === 'Average' && <AllOverview overviewData={overviewData.filter((average) => average.category === "Average")} chartData={data} />}
                    {activeTab === 'Warning' && <AllOverview overviewData={overviewData.filter((average) => average.category === "Warning")} chartData={data} />}
                    {activeTab === 'Critical' && <AllOverview overviewData={overviewData.filter((average) => average.category === "Critical")} chartData={data} />}
                </div>
            </div>
        </div>
    );
};

export default Trends;