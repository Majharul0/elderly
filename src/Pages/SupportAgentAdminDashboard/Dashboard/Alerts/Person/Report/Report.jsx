import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import ReportPage from './ReportPage/ReportPage';
import { monthlyTrends,weeklyTrends } from "../../../../../../assets/supportAgentData/ReportTrendsComperisionData";

const Report = () => {
    const [selectedTime, setSelectedTime] = useState('Monthly');
    // const [selectedElderly, setSelectedElderly] = useState('Elderly 1');
    const [data,setData]=useState(monthlyTrends);
    const handleTime = (e) => {
        setSelectedTime(e.target.value);
        if(e.target.value==='Monthly'){
            setData(monthlyTrends)
            setSelectedTime('Monthly')

        }else{
            setData(weeklyTrends)
            setSelectedTime('Weekly')
        }
    }
    // const handleElderly = (e) => {
    //     setSelectedElderly(e.target.value);
    // }
    const createPDF = async () => {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = document.querySelector("#pdf");
        const canvas = await html2canvas(data);
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
        pdf.save("report.pdf");
    };

    return (
        <div className='bg-white rounded-[10px] my-7 pb-6'>
            <div className='lg2:flex md:flex items-center justify-between pt-5 px-5'>
                <h1 className='font-medium text-[#3D4854] text-2xl mb-0 sm:mb-2'>Report</h1>
                <div className='flex flex-wrap gap-5 items-center text-[#5D6670]'>
                    {/* <div className=' py-2.5 px-2.5 border rounded-[10px] text-[#5D6670] text-sm flex items-center  '>
                        <select className='gap-[14px] outline-none w-[96px]' onChange={handleElderly} value={selectedElderly}>
                            <option defaultChecked value="Elderly 1">Elderly 1</option>
                            <option defaultChecked value="Elderly 2">Elderly 2</option>
                            <option defaultChecked value="Elderly 3">Elderly 3</option>
                            <option defaultChecked value="Elderly 4">Elderly 4</option>
                        </select>
                    </div> */}
                    <div className='py-2.5 px-2.5 border  rounded-[10px] text-[#5D6670] text-sm flex items-center focused:border-primary '>
                        <select className='w-[96px] outline-none cursor-pointer' onChange={handleTime} value={selectedTime}>
                            <option defaultChecked value="Monthly">Monthly</option>
                            <option value="Weekly">Weekly</option>
                        </select>
                    </div>
                    <button className='border rounded-[10px] flex items-center py-2.5 px-2 '>
                        <p className='mr-3 font-medium text-sm text-[#5e85b1]'>Share</p>
                        <Icon icon="fluent:share-16-regular" />
                    </button>
                    <button onClick={createPDF} className='border rounded-[10px] flex items-center py-2.5 px-2'>
                        <p className='mr-3 font-medium text-sm text-[#5D6670]'>PDF</p>
                        <Icon icon="basil:download-outline" />
                    </button>
                </div>
            </div>
            <div className='mx-2'>
                <ReportPage data={data} id={"pdf"} selectedTime={selectedTime}></ReportPage>
            </div>
        </div>
    );
};

export default Report;