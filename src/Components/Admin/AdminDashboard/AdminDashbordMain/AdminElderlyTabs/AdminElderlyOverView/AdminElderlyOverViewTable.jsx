import React, { useContext } from 'react'
import { Table, } from 'antd';
import TrendsAvater from './TrendsAvater';
import AdminElderlyOverViewTableChart from './AdminElderlyOverViewTableChart';
import AdminElderlyOverViewTableColorBox from './AdminElderlyOverViewTableColorBox';
import { SidebarContext } from '../../../../../../Context/SidebarContext';

const Status = ({ row }) => {
    return (
        <div className='flex items-center gap-1 w-full'>
            {
                row.statusValue === 0 ? (
                    <div className='w-[14px] h-[14px] rounded-[10px] bg-[#01BE4F]'></div>
                ) : (
                    <div className={`w-[0px] h-[0px] border__item rotate-[90deg] ${row.status === "Warning" ? "border-r-[#F1AD2A]" : "border-r-[#F27A7A]"} ${row.statusValue === 2 ? "rotate-[90deg] mb-2" : "rotate-[-90deg] mt-2"}`}>

                    </div>
                )
            }
            <span className='text-[16px] font-[400] text-secondary'>{row.status}</span>
        </div>
    )
}


const AdminElderlyOverViewTable = ({ tableData }) => {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(4)
    const { setOverView, setOverViewActive } = useContext(SidebarContext)
    const columns = [
        {
            title: 'TRENDS',
            key: "id",
            render: (row) => (
                <TrendsAvater row={row} />
            ),
        },
        {
            title: 'STATUS',
            key: "id",
            render: (row) => (
                <Status row={row} />
            ),
        },
        {
            title: 'VALUE',
            render: (row) => <span className='text-[14px] font-[500] text-[#455D79]'>{row.VALUE}</span>,
        },
        {
            title: 'TARGET',
            render: (row) => <span className='text-[14px] font-[400] text-[#455D79]'>{row.TARGET}</span>,
        },
        {
            title: 'TREND LINE',
            key: "id",
            render: (row) => (
                <AdminElderlyOverViewTableChart data={row.TRENDLINE} />
            ),
            responsive: ['lg'],
        },
        {
            title: 'INDICATOR',
            key: "id",
            render: (row) => (
                <AdminElderlyOverViewTableColorBox row={row} />
            ),
        },
    ];
    const handlePaginationChange = (page, pageSize) => {
        // You can fetch data for the new page using API calls or adjust your data array
        setStart((pre) => page === 1 ? 1 : page * 4 - 3)
        setend((pre) => page * 5 > tableData.length ? tableData.length : page * 4)
    };

    const paginationOptions = {
        pageSize: 4,
        onChange: handlePaginationChange,
    };

    const handelClick = (record, rowIndex) => {
        console.log('reord id', record.id)
        setOverViewActive({ title: record?.title, index: record?.id })
        setOverView(false)
    }


    return (
        <div className='lg:relative text-secondary text-[20px] w-full'>
            <Table style={{ cursor: "pointer" }} className='admin__Table' columns={columns} dataSource={tableData} pagination={paginationOptions} scroll={{ x: 800 }}
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => handelClick(record, rowIndex),
                    };
                }}

            />
            <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
    )
}

export default AdminElderlyOverViewTable