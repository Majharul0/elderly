import logo from '../../../../../../../assets/logo.png'
import moment from 'moment';

const ReportPage = ({ id, selectedTime, data }) => {
    const currentDate = new Date();
    const today =(moment(currentDate)).format('MM/DD/YYYY');
    return (
        <div id={id} className='my-7 shadow-xl bg-white border-[0.5px]  rounded-[10px] lg2:w-3/5 w-full mx-auto '>
            <div className='lg2:flex md:flex items-center  justify-between mx-7'>
                <div>
                    <img className='w-[143px] mb-5 mt-7' src={logo} alt="" />
                    <div className='max-w-[325px]'>
                        <h1 className='font-medium text-[19px] text-[#3D4854]'>Xunison Ltd.</h1>
                        <p className='text-sm text-[#5D6670]'>Bracken Business Park, Bracken Rd, Sandyford Business Park, Sandyford, Dublin, 18, Ireland</p>
                    </div>
                </div>
                <div className='lg2:mt-0 md:mt-0 sm:mt-5'>
                    <p className='font-medium text-[#3D4854]text-lg'>{selectedTime} Report</p>
                    <p><span className='font-medium text-lg text-[#3D4854]'>Report ID: </span><span className='text-[#5D6670] text-lg'>#234234</span></p>
                    <p><span className='font-medium text-[#3D4854] text-lg'>Date: </span><span className=' text-[#5D6670] text-lg'>{today}</span></p>
                </div>
            </div>
            <div className='mt-7 mx-7'>
                <p className='border-b font-bold text-black py-2.5'>Elderly Information </p>
                <div className='mt-5'>
                    <p><span className='font-medium text-lg text-[#3D4854]'>ID: </span><span className='text-[#5D6670] text-lg'>#234234</span></p>
                    <p><span className='font-medium text-lg text-[#3D4854]'>Name: </span><span className=' text-[#5D6670] text-lg'>Isabella Martinez</span></p>
                    <p><span className='font-medium text-lg text-[#3D4854]'>Contact: </span><span className=' text-[#5D6670] text-lg'>555-123-4567</span></p>
                    <p><span className='font-medium text-lg text-[#3D4854]'>Address: </span><span className='text-[#5D6670] text-lg'>123 Main St, Los Angeles, CA, USA</span></p>
                </div>
            </div>
            <div className='mt-7 mx-7'>
                <p className='border-b font-medium text-lg text-black py-2.5'>Trends Comparison</p>
                <div className='mt-7 overflow-x-hidden'>
                    <div className='px-5 border rounded-[10px]'>
                        <div className='grid grid-cols-3 text-sm font-bold my-3 mb-4 text-[#3D4854]' style={{ textAlign: "left" }}>
                            <p>Trends</p>
                            <p>Average </p>
                            <p>Last {(selectedTime === 'Monthly' && 'Month') || (selectedTime === 'Weekly' && 'Week')}</p>
                        </div>
                        {data?.map((trend,index) => <div key={index} className='grid grid-cols-3 gap-2 text-sm py-2 text-[#3D4854]' style={{ textAlign: "left" }}>
                            <p className='font-bold'>{trend?.title}</p>
                            <p>{trend?.average}</p>
                            <p>{trend?.data}</p>
                        </div>)}
                    </div>
                </div>
            </div>

            <div className='bg-[#EDEDED] rounded-b-xl text-center mt-[655px]'>
                <span className='text-medium text-sm  text-secondary my-2.5'>t: +353 1 437 0142 | e: sales@xunison.com</span>
            </div>
        </div >

    );
};

export default ReportPage;