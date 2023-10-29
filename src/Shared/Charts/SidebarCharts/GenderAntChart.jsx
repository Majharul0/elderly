import { Pie, measureTextWidth } from '@ant-design/plots';
import { Icon } from '@iconify/react';
export default function GenderAntChart() {
    function renderStatistic(containerWidth, text, fontSize, fontWeight) {
        const { width: textWidth, height: textHeight } = measureTextWidth(text, fontSize);
        const R = containerWidth / 2; // r^2 = (w / 2)^2 + (h - offsetY)^2

        let scale = 1;

        if (containerWidth < textWidth) {
            scale = Math.min(Math.sqrt(Math.abs(Math.pow(R, 2) / (Math.pow(textWidth / 2, 2) + Math.pow(textHeight, 2)))), 1);
        }

        const textStyleStr = `width:${containerWidth}px;`;
        return `<div style="${textStyleStr};font-size:${fontSize}px; font-weight:${fontWeight}; line-height:${scale < 1 ? 1 : 'inherit'};">${text}</div>`;
    }

    const data = [
        {
            type: 'Male',
            value: 18,
        },
        {
            type: 'Female',
            value: 13,
        },

    ]
    const config = {
        appendPadding: 10,
        data,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        startAngle: (-6 / 5) * Math.PI,
        endAngle: (1 / 5) * Math.PI,
        innerRadius: 0.75,
        color: ['#0070F0', '#5BA1F2'],
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                textAlign: 'center',
                fontSize: 0
            },
            autoRotate: true,
            content: '{value}',
        },
        statistic: {
            title: {
                offsetY: 65,
                customHtml: (container, view, datum, data) => {
                    const { width, height } = container.getBoundingClientRect();
                    const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    const text = datum ? ` ${datum.value}` : ` ${data.reduce((r, d) => r + d.value, 0)}`;
                    return renderStatistic(d, text, 45, 600);
                },
            },
            content: {
                offsetY: 70,
                customHtml: (container, view, datum,) => {
                    const { width } = container.getBoundingClientRect();
                    const text = datum ? datum.type : 'Total Member';
                    return renderStatistic(width, text, 14, 500);
                },
            },
        },
        interactions: [
        ],
    };
    return <div className=''>
        <h2 className=' text-[#3D4854] font-medium text-2xl'>Gender</h2>
        <div className='flex justify-between items-center'>
        <div className='h-full flex flex-col gap-[5px] justify-center'>
            <div className='flex gap-1 items-center'>
                      <span className=' rounded-[10px] bg-[#0070F026] h-9 w-9 text-primary flex justify-center items-center'><Icon className='w-4 h-5' icon="ph:gender-male-bold" /></span>
                      <div className='text-[10px]'>
                          <p className='text-[13px] font-[400] text-[#90969D]'>{data[0].type}</p>
                          <p className='font-bold text-[13px] text-[#615E83]'>{data[0].value}</p>
                      </div>
                  </div>
                  <div className='flex gap-1 items-center my-2'>
                      <span className=' rounded-[10px] bg-[#0070F026] h-9 w-9 text-primary flex justify-center items-center'><Icon className='w-4 h-5 rotate-[130deg]' icon="ph:gender-male-bold" /></span>
                      <div className='text-[10px]'>
                          <p className='text-[13px] font-[400] text-[#90969D]'>{data[1].type}</p>
                          <p className='font-bold text-[13px] text-[#615E83]'>{data[1].value}</p>
                      </div>
                  </div>
            </div>
            <div className='w-[189px] h-[189px] text-secondary'>
                <Pie {...config} />
            </div>
        </div>
    </div>
}
