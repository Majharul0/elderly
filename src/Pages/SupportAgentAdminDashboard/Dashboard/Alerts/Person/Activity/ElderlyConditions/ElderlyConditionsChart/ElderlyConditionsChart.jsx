import React from 'react';
import { Area } from '@ant-design/plots';

const ElderlyConditionsChart = ({ data }) => {
    const config = {
        data: data,
        xField: 'day',
        yField: 'value',
        color: "#ffffff",
        smooth: true,
        legend: false,
        yAxis: {
            label: {
                style: {
                    fill: '#FFFFFF',
                },
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
        xAxis: {
            range: [0, 1],
            label: {
                style: {
                    fill: '#FFFFFF',
                },
            },
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
        height: 190,
        width: 200,
        areaStyle: () => {
            return {
                fill: 'l(270) 0:#ffffff00 0.5:#ffffffa2 1:#FFFFFF'
            };
        },
        tooltip: {
            customContent: (day, data) => {
                const itemValue = data.map(v => v.value)
                return `<div className="custom-tooltip rounded-[14px] px-[5px] py-[3px]">
                            <h4 className="font-bold text-xl">${itemValue}</h4>
                            <div className="text-[#5D6670]">${day}</div>
                        </div>`;
            },
        }

    };
    return (
        <div className='mt-2 px-5'><Area {...config} /></div>
    );
};

export default ElderlyConditionsChart;