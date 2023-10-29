import React from 'react';
import { Line } from '@ant-design/plots';
import AdminAlertsProgressBox from '../../../../Admin/AdminDashboard/AdminDashbordMain/AdminAlertsProgressBox';
import { adminAlertsData } from '../../../../../assets/admin/data';


const SUpportAgentAlertChart = () => {


  const config = {
    data:adminAlertsData,
    xField: 'day',
    yField: 'value',
    seriesField: 'name',
    color:["#F4664A","#FF974D","#5973FF"],
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
      label: {
        formatter: (v) => `${(v)}`,
      },
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
    legend: false,
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000,
      },
    },
    tooltip: {
      customContent: (title, items) => { 
        const dataPoint = adminAlertsData.find(point => point.day === title);
        if (dataPoint) {
          return `
          <div style="padding:10px 0px;width:180px">
            <div style="font-size: 16px; font-weight: 500; color: #0D1A29; margin-bottom: 10px;">
              ${dataPoint.date}
            </div>
            <div style="display:flex; align-items:center; gap:2px; justify-content:space-between; margin-bottom: 7px;">
                  <div style="display:flex; align-items:center; gap:2px;">
                    <div style="width:3px;height:14px;background:#FF5959;"> </div>
                    <div style="font-size: 16px; font-weight: 400; color: #5D6670;">
                      Critical
                    </div>
                  </div>
                  <div style="font-size: 16px; font-weight: 500; color: #0D1A29;">${items[0].data.value}</div>
            </div>
            <div style="display:flex; align-items:center; gap:2px; justify-content:space-between; margin-bottom: 7px;">
                  <div style="display:flex; align-items:center; gap:2px;">
                    <div style="width:3px;height:14px;background:#FF974D;"> </div>
                    <div style="font-size: 16px; font-weight: 400; color: #5D6670;">
                    Warning
                    </div>
                  </div>
                  <div style="font-size: 16px; font-weight: 500; color: #0D1A29;">${items[1].data.value}</div>
            </div>
            <div style="display:flex; align-items:center; gap:2px; justify-content:space-between; margin-bottom: 7px;">
                  <div style="display:flex; align-items:center; gap:2px;">
                    <div style="width:3px;height:14px;background:#5973FF;"> </div>
                    <div style="font-size: 16px; font-weight: 400; color: #5D6670;">
                    Problem
                    </div>
                  </div>
                  <div style="font-size: 16px; font-weight: 500; color: #0D1A29;">${items[2].data.value}</div>
            </div>
          </div>
          `;
        } else {
          return '';
        }
      },
    },
  };

  return (
    <div className='py-[22px] px-[22px] h-full w-full'>
        <h2 className=' text-[23px] text-secondary font-[500]'>Alerts</h2>
        <div className='h-[250px] w-full mt-6'>
            <Line {...config} />
        </div>
        <div className='mt-6 bg-gray-300 w-full h-[1px]'>

        </div>
        <div className='w-full mt-6 px-[30px]'>
            <AdminAlertsProgressBox data2={adminAlertsData}/>
        </div>
    </div>
  );
};

export default SUpportAgentAlertChart;