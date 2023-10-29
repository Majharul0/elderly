import { Pie, measureTextWidth } from '@ant-design/plots';

export default function SidebarDashboardChart() {
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
            type: 'Critical',
            value: 60,
        },
        {
            type: 'Warning',
            value: 25,
        },
        {
            type: 'Problem',
            value: 10,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        legend: false,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.64,
        color: ['#FF5959', '#FF974D', '#6C83FF'],
        meta: {
            value: {
                formatter: (v) => `${v}`,
            },
        },
        label: {
            type: 'inner',
            offset: '-50%',
            style: {
                textAlign: 'center',
                fontSize: 0
            },
            autoRotate: false,
            content: '{value}',
        },
        statistic: {
            title: {
                offsetY: 10,
                customHtml: (container, view, datum, data) => {
                    const { width, height } = container.getBoundingClientRect();
                    const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
                    const text = datum ? ` ${datum.value}` : ` ${data.reduce((r, d) => r + d.value, 0)}`;
                    return renderStatistic(d, text, 45, 600);
                },
            },
            content: {
                offsetY: 12,
                customHtml: (container, view, datum,) => {
                    const { width } = container.getBoundingClientRect();
                    const text = datum ? datum.type : 'Total';
                    return renderStatistic(width, text, 14, 500);
                },
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-selected',
            },
            {
                type: 'pie-statistic-active',
            },
        ],
    };
    return <>
        <div className='md:w-[240px] md:h-[240px] w-[200px] h-[200px] flex items-center justify-center ml-5 md:ml-0'>
            <Pie {...config} />
        </div>
        <div className='grid grid-cols-3 gap-2 mt-2 mb-6'>
            {
                data.map((problem, index) => {
                    return <div className='text-center' key={index}>
                        <p className='font-bold'>{problem.value}</p>
                        <p className='text-sm'>{problem.type}</p>
                        <span className={`block h-2 rounded-[10px] ${problem.type === 'Critical' && "bg-[#FF5959]" || problem.type === 'Warning' && "bg-[#FF974D]" || problem.type === 'Problem' && "bg-[#6C83FF]"}`}></span>
                    </div>
                })
            }

        </div>
    </>;
}
