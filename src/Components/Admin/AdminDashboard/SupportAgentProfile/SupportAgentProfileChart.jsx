import React, { useEffect, useState } from 'react'
import { Area , G2} from '@ant-design/plots';
import { adminSupportAgentChartData } from '../../../../assets/admin/data';
import { configuration } from '../../../../Shared/Charts/SidebarCharts/areaChartThemeConfiguration';
import SortDay from '../../../../Shared/Sort/SortDay';



const SupportAgentProfileChart = () => {
    const [selected,setSelected] = useState("Last 15 Days")
    const Sortdata = ["Last 15 Days","Last 20 Days","Last 25 Days","Last 30 Days"]
    const [data,setData] = useState(adminSupportAgentChartData.slice(0,16))

    useEffect(()=>{
      if(selected==="Last 15 Days"){
        setData(adminSupportAgentChartData.slice(0,16))
      }
      if(selected==="Last 20 Days"){
        setData(adminSupportAgentChartData.slice(0,21))
      }
      if(selected==="Last 25 Days"){
        setData(adminSupportAgentChartData.slice(0,26))
      }
      if(selected==="Last 30 Days"){
        setData(adminSupportAgentChartData.slice(0,31))
      }
    },[selected])

  const { registerTheme } = G2;
  registerTheme('custom-theme', configuration)
const config = {
  data: data, 
  xField: 'day',
  yField: 'caseSolved',
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
  areaStyle: () => ({
    fill: 'l(270) 1:#0070F0 0.2:#fff',
  }),
  tooltip: {
    customContent: (title, items) => { 
      const dataPoint = adminSupportAgentChartData.find(point => point.day === parseInt(title));
      if (dataPoint) {
        return `
        <div style="padding:15px 0px;">
        <div style="color:#3D4854;font-size:16px; font-weight: 400; ;">Case Solved <span style="margin-left:40px; font-weight: 600;"> ${dataPoint.caseSolved}</span></div>
        <div style="font-size:16px; color:#3D4854; font-weight: 600; margin-top:12px;">${dataPoint.date}</div>
        </div>
        `;
      } else {
        return ''; // Handle the case when dataPoint is not found
      }
    },
  },
  theme:'custom-theme'
};


  return (
    <div className='p-[22px]'>
        <div className='flex items-center justify-between mb-5 gap-2 flex-wrap'>
            <h2 className=' text-[23px] text-[#3D4854] font-[500]'>Analytics</h2>
            <SortDay selected={selected} setSelected={setSelected} data={Sortdata} width={"155px"}/>
        </div>


        <div className='mt-[35px]'>
             <div className='w-full md:h-[440px] h-[300px] text-secondary'>
                <Area {...config} />
            </div>
        </div>
    </div>
  )
}

export default SupportAgentProfileChart