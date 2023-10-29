import React, { useEffect, useState } from 'react';
import { Table, Progress, DatePicker, Space } from 'antd';
import { Icon } from '@iconify/react';
import { Area } from '@ant-design/plots';
const { RangePicker } = DatePicker;

const OverViewChart = ({ data }) => {
    const [chartData, setChartData] = useState(data?.table)
    useEffect(() => {
        setChartData(data?.table);
    }, [data?.table]);
    const handleDate = (date) => {
        // const startDate = start.format('MMM DD, YYYY');
        //     const endDate = end.format('MMM DD, YYYY');
        const [start, end] = date;
        const startDate = new Date(start);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(end);
        endDate.setHours(23, 59, 59, 999);


        const filteredData = data.table.filter(entry => {
            const entryDate = new Date(entry.date);
            return entryDate >= startDate && entryDate <= endDate;

        });
        setChartData(filteredData);

    }


    const columns = [
        {
            title: 'Date',
            dataIndex: 'date'
        },
        {
            title: 'Value',
            dataIndex: 'value'
        }
    ]

    const config = {
        data: chartData,
        xField: 'date',
        yField: 'value',
        smooth: true,
        legend: false,
        xAxis: {
            grid: {
                line: {
                    style: {
                        stroke: 'l(90) 1:#D9D9D9 0:#EBEBEB',
                        lineWidth: 1,
                        lineDash: [4, 5],
                        strokeOpacity: 1,
                        cursor: 'pointer',
                    },
                },
            },
        },
        yAxis: {
            grid: {
                line: {
                    style: {
                        stroke: '#D9D9D9',
                        lineWidth: 0,
                        cursor: 'pointer',
                    },
                },
            },
        },
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
            };
        },
        tooltip: {
            customContent: (date, data) => {
                const itemValue = data.map(v => v.value)
                return <div className="custom-tooltip rounded-[14px] px-[11px] py-[15px]">
                    <h4 className="font-bold text-2xl mb-2">{itemValue}</h4>
                    <div className="text-[#5D6670] text-lg">{date}</div>
                </div>;
            },
        },

    };

    const [start, setStart] = React.useState(1)
    const [end, setEnd] = React.useState(4)
    const handlePaginationChange = (page, pageSize) => {
        setStart((pre) => page === 1 ? 1 : page * 4 - 3)
        setEnd((pre) => page * 4 > chartData.length ? chartData.length : page * 4)
    };

    const paginationConfig = {
        onChange: handlePaginationChange,
        pageSize: 4
    };
    return (
        <div>
            <div className='lg2:flex justify-between md:flex'>
                <div className='flex flex-wrap items-center mr-2'>
                    <h1 className='text-2xl mr-2.5 font-medium text-[#3D4854]'>{data?.title}</h1>
                    <div className={`rounded-[10px] px-1.5 py-1 flex items-center text-sm text-[#5D6670] font-medium
                        ${(data?.category) === 'Critical' && 'bg-[#FEF2F2]'}
                        ${(data?.category) === 'Average' && 'bg-[#E6F9EE]'}
                        ${(data?.category) === 'Warning' && 'bg-[#FEF7EA]'}
                    `}>
                        <span className='mr-1'>
                            {
                                data?.category === 'Average' ? <Icon className={`text-lg text-[#01BE4F]`} icon="ion:ellipse-sharp" /> : <Icon className={`text-2xl
                            ${(data?.category) === 'Critical' && 'text-[#FF5959]'}
                            ${(data?.category) === 'Warning' && 'text-[#FF974D]'}
                        `} icon="octicon:triangle-down-24" />
                            }
                        </span>
                        <span className='text-secondary font-medium'>{data?.category}</span>
                    </div>
                </div>

                <div className='lg2:my-0 md:my-0 sm:my-5'><Space direction="horizontal">
                    <RangePicker format='MM-DD-YYYY' onChange={handleDate} />
                </Space></div>
            </div>
            <div>
                <Area {...config} />
            </div>
            <div className='flex items-center justify-between px-7 py-2 border rounded-[10px] my-7'>
                <div>
                    <p className='text-[#5D6670] text-sm font-medium'>Average</p><h1 className='text-2xl font-bold text-black'>{data?.average}</h1>
                </div>
                <div className='lg2:flex items-center md:flex'>
                    <div className='flex items-center lg2:mr-7 md:mr-7'>
                        <Progress className='mr-2.5' type="circle" percent={16} showInfo={false} size={40} strokeWidth={13} strokeColor={'#01BE4F'} />
                        <div>
                            <p className='font-medium text-sm text-[#3D4854]'>Average</p>
                            <p className='text-lg font-bold text-black'>16%</p>
                        </div>
                    </div>
                    <div className='flex items-center lg2:mr-7  md:mr-7 lg2:my-0 md:my-0 sm:my-2'>
                        <Progress className='mr-2.5' type="circle" percent={45} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF974D'} />
                        <div>
                            <p className='font-medium text-sm text-[#3D4854]'>Warning</p>
                            <p className='text-lg font-bold text-black'>45%</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <Progress className='mr-2.5' type="circle" percent={39} showInfo={false} size={40} strokeWidth={13} strokeColor={'#FF5959'} />
                        <div>
                            <p className='font-medium text-sm text-[#3D4854]'>Critical</p>
                            <p className='text-lg font-bold text-black'>39%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border rounded-[10px] relative'>
                <Table id="alerts-table" columns={columns} dataSource={data?.table} pagination={paginationConfig} />
                <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing {start} to {end} of {chartData?.length} entries</div>
            </div>
        </div>
    );
};

export default OverViewChart;