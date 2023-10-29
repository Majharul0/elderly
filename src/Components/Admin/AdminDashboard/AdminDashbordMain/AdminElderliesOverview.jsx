import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import { Pie} from '@ant-design/plots';
import SortDay from '../../../../Shared/Sort/SortDay';

const data = [
  {
      type: 'Man',
      value: 470,
      years:"2023"
    },
    {
      type: 'Woman',
      value: 210,
      years:"2023"
    },
    {
      type: 'Man',
      value: 370,
      years:"2022"
    },
    {
      type: 'Woman',
      value: 510,
      years:"2022"
    },
    {
      type: 'Man',
      value: 370,
      years:"2021"
    },
    {
      type: 'Woman',
      value: 410,
      years:"2021"
    },
]

const AdminElderliesOverview = () => {
  const [selected,setSelected] = useState("2023")
  const sortdata = ["2023","2022","2021"]
  const [chartData,setChartData]=useState(data.filter((item)=>item.years === "2023"))


    useEffect(()=>{
        setChartData(data.filter((item)=>item.years === selected))
    },[selected])

    const config = {
        appendPadding: 10,
        data:chartData,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        color: ['#4F80FF','#FF9078'],
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };


    const totalValue = chartData?.reduce((total, item) => total + item.value, 0);
    const manPercentage = (chartData?.find(item => item.type === 'Man').value / totalValue) * 100;
    const womanPercentage = (chartData?.find(item => item.type === 'Woman').value / totalValue) * 100;

  return (
    <div className='p-5 w-full'>
        <div className='flex items-center justify-between '>
            <h2 className=' text-[23px] text-[#3D4854] font-[500]'>Elderlies Overview</h2>
            <div>
              <SortDay selected={selected} setSelected={setSelected} data={sortdata} width={"110px"}/>
            </div>
        </div>

        <div className=' flex items-center justify-between gap-2 mt-[10px]'>
            <div className=''>
                <div className=' mb-[20px]'>
                    <h2 className='text-[28px] font-[500] text-[#3D4854]'>{totalValue}</h2>
                    <p className=' text-[13px] font-[500] text-[#5D6670]'>Total Elderly</p>
                </div>
                <div className='h-full flex flex-col gap-[5px] justify-center'>
                  <div className='flex gap-1 items-center'>
                      <span className=' rounded-[10px] bg-[#0070F026] h-9 w-9 text-primary flex justify-center items-center'><Icon className='w-4 h-5' icon="ph:gender-male-bold" /></span>
                      <div className='text-[10px]'>
                          <p className='text-[13px] font-[400] text-[#90969D]'>{data[0].type}</p>
                          <p className='font-bold text-[13px] text-[#615E83]'>{manPercentage.toFixed(2)}% / {data[0].value}</p>
                      </div>
                  </div>
                  <div className='flex gap-1 items-center my-2'>
                      <span className=' rounded-[10px] bg-[#FF9078]/20 h-9 w-9 text-[#FF9078] flex justify-center items-center'><Icon className='w-4 h-5 rotate-[130deg]' icon="ph:gender-male-bold" /></span>
                      <div className='text-[10px]'>
                          <p className='text-[13px] font-[400] text-[#90969D]'>{data[1].type}</p>
                          <p className='font-bold text-[13px] text-[#615E83]'>{womanPercentage.toFixed(2)}% / {data[1].value}</p>
                      </div>
                  </div>
              </div>
            </div>
            <div className='h-[170px] w-[170px]'>
                <Pie {...config} />
            </div>
        </div>
    </div>
  )
}

export default AdminElderliesOverview