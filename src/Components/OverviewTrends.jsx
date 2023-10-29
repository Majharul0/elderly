import React, { useContext, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { SidebarContext } from '../Context/SidebarContext';
import { Table } from 'antd';
const OverviewTrends = ({ overviewData }) => {


    const { overViewActive, setOverViewActive } = useContext(SidebarContext)

    const [start, setStart] = React.useState(1)
    const [end, setEnd] = React.useState(4)
    const handlePaginationChange = (page) => {
        setStart((pre) => page === 1 ? 1 : page * 4 - 3)
        setEnd((pre) => page * 4 > overviewData.length ? overviewData.length : page * 4)
    };

    /*  useEffect(() => {
         setPagenaitonCurrent()
         console.log('overview actvie', overViewActive, 'sdfkslfd', PagenaitonCurrent)
 
     }, [overViewActive]) */



    // console.log('sdfsd', overViewActive)




    const paginationConfig = {
        onChange:handlePaginationChange,
        pageSize:4,
        defaultCurrent:Math.ceil(overViewActive?.index/4)
    };


    

    const columns = [
        {
            render: (trend) => (
                <div>
                    <div onClick={() => setOverViewActive({ title: trend.title, index: 1 })} className={`cursor-pointer rounded-[10px] px-5 mr-6 py-4 flex justify-between ${trend?.title === overViewActive?.title && 'bg-[#E6F1FE]'}`}>
                        <div className='flex items-center'>
                            <div className='mr-2.5 bg-[#e7e8ea] rounded-[10px] text-secondary text-lg p-2'>
                                {trend?.title === 'Waking up time' && (<Icon icon="gala:clock" />)}
                                {trend?.title === 'Going in bed time' && (<Icon icon="mdi:bed-time" />)}
                                {trend?.title === 'Rooms Visited' && (<Icon icon="bx:door-open" />)}
                                {trend?.title === 'Time at Home' && (<Icon icon="heroicons:home" />)}
                                {trend?.title === 'Time outdoors' && (<Icon icon="bx:walk" />)}
                                {trend?.title === 'Device Usage Time' && (<Icon icon="gridicons:phone" />)}
                                {trend?.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two" />)}
                                {trend?.title === 'Showers' && (<Icon icon="material-symbols:shower-outline" />)}
                                {trend?.title === 'Coffees' && (<Icon icon="ph:coffee" />)}
                                {trend?.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet" />)}
                            </div>
                            <div className='mr-1.5'>
                                <h1 className='text-[#5D6670] font-medium text-lg'>{trend?.title}</h1>
                                <p className='text-sm text-[#5D6670]'>{trend?.subTitle}</p>
                            </div>
                        </div>
                        <div className='flex items-center'>

                            {
                                trend?.title === overViewActive?.title ? (<div ><Icon className='text-primary' icon="fe:arrow-right" /></div>) : (<div className={`h-[10px] w-[10px] rounded-full
                            ${(trend?.category) === 'Average' && 'bg-[#01BE4F]'} 
                            ${(trend?.category) === 'Warning' && 'bg-[#FF974D]'}
                            ${(trend?.category) === 'Critical' && 'bg-[#FF5959]'}
                            `}></div>)
                            }
                        </div>
                    </div>
                </div>
            )
        }
    ];

    console.log(overviewData)

    return (
        <div className='xl:w-1/3 w-full border-r lg2:mr-28'>
            <div className='relative'>
                <Table id='trends-table' columns={columns} dataSource={overviewData} pagination={paginationConfig} />
                <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing {start} to {end} of {overviewData?.length} entries</div></div>
        </div>
    );
};

export default OverviewTrends;