import * as React from 'react';
import { Table, } from 'antd';
import SuperAdminUserDataAction from './SuperAdminUserDataAction';
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';


const SuperAdminUserData = ({ tableData }) => {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(10)

    const columns = [
        {
            title: 'ADMIN',
            key: "admin",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT PERSON',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.contactPerson}</span>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.businessName}</span>,
        },
        {
            title: 'BUSINESS ADDRESS',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.businessAdress}</span>,
        },

        {
            title: 'LAST SING IN',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.LASTSINGIN}</span>,
        },
        {
            title: '',
            key: 'action',
            render: (row) => (
                <SuperAdminUserDataAction data={row} />
            )
        }
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
        <div className='lg:relative text-secondary text-[16px]'>
            <Table className='admin__Table' columns={columns} dataSource={tableData} pagination={paginationConfig} scroll={{ x: 1000 }} />
            <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
    )
}

export default SuperAdminUserData