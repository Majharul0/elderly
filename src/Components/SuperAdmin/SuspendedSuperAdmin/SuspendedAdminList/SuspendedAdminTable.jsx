import React from 'react'
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import { Table, } from 'antd';

const SuspendedAdminTable = ({ tableData }) => {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(10)
    const columns = [
        {
            title: 'ADMIN',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.contactNumber}</span>,
        },
        {
            title: 'SUSPENDED BY',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.suspendBy}</span>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.businessName}</span>,
        },
        {
            title: 'SUSPENDED DATE',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.suspendData}</span>,
        },
        {
            title: 'ACTION',
            render: (row) => (
                <button className='py-2 px-3 text-[13px] font-[500] bg-primary rounded-[10px] text-white'>Unsuspend</button>
            ),
        },
    ];

    const handlePaginationChange = (page, pageSize) => {
        // You can fetch data for the new page using API calls or adjust your data array
        console.log(`Page: ${page}, Page Size: ${pageSize}`);
        setStart((pre) => page === 1 ? 1 : page * 10 - 9)
        setend((pre) => page * 10 > tableData.length ? tableData.length : page * 10)
    };

    const paginationConfig = {
        onChange: handlePaginationChange,
    };


    return (
        <div className='lg:relative text-secondary font-[400] text-[16px]'>
            <Table className='admin__Table' columns={columns} dataSource={tableData} pagination={paginationConfig} scroll={{ x: 1000 }} />
            <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
    )
}

export default SuspendedAdminTable