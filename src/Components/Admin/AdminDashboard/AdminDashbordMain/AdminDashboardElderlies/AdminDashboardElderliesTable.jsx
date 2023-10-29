import React, { useContext } from 'react'
import { Table, Tooltip, } from 'antd';
import { Icon } from '@iconify/react';
import AdminFiled from '../../../../../Shared/AdminFiled/AdminFiled';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../../Context/SidebarContext';

function AdminDashboardElderliesTable({ tableData }) {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(5)
    const navigate = useNavigate()
    const {setBrackCount} = useContext(SidebarContext)

    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'MANAGED BY ',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.MANAGEDBY}</span>,
        },
        {
            title: 'ALERTS',
            key: "id",
            render: () => (
                <div className='flex items-center relative'>
                    <div className='w-[20px] h-[20px] rounded-full bg-[#FF5959] border-[2px] border-white'>

                    </div>
                    <div className='w-[20px] h-[20px] rounded-full bg-[#FF974D] ml-[-8px] border-[2px] border-white'>

                    </div>
                    <div className='w-[20px] h-[20px] rounded-full bg-[#5973FF] ml-[-8px] border-[2px] border-white'>

                    </div>
                </div>
            )
        },
        {
            title: '',
            key: "id",
            render: (row) => (
                <Tooltip title="View" placement="top">
                <IconButton onClick={() => {setBrackCount("Dashboard"); navigate(`/admin/dashboard/elderly/${row.id}`)}}>
                    <Icon icon="ph:eye" className='text-[20px] text-secondary2 hover:text-[#0070F0]' />
                </IconButton>
                </Tooltip>
            )
        },
    ];

    const handlePaginationChange = (page, pageSize) => {
        // You can fetch data for the new page using API calls or adjust your data array
        console.log(`Page: ${page}, Page Size: ${pageSize}`);
        setStart((pre) => page === 1 ? 1 : page * 5 - 4)
        setend((pre) => page * 5 > tableData.length ? tableData.length : page * 5)
    };

    const paginationOptions = {
        pageSize: 5,
        onChange: handlePaginationChange,
    };

    const handelClick = (record, rowIndex)=>{
        navigate(`/admin/dashboard/elderly/${record.id}`)
    }


    return (
        <div className='lg:relative text-secondary text-[16px]'>
            <Table id="admin__suppport__agent" columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationOptions} scroll={{ x: 550 }}
            
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

export default AdminDashboardElderliesTable