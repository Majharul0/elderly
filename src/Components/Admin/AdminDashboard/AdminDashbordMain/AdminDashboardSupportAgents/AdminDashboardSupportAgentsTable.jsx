import React from 'react'
import { Table, } from 'antd';
import { Icon } from '@iconify/react';
import SupportAgentAdminFiled from '../../../../../Shared/AdminFiled/SupportAgentAdminFiled';
import { useNavigate } from 'react-router-dom';

function AdminDashboardSupportAgentsTable({ tableData }) {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(5)

    const navigate = useNavigate()

    const columns = [
        {
            title: 'SUPPORT AGENT',
            key: "id",
            render: (row) => (
                <SupportAgentAdminFiled data={row} />
            )
        },
        {
            title: 'CLOSED CASES',
            render: (row) => <span className='text-[16px] cursor-pointer font-[400] text-secondary2'>{row.CLOSEDCASES}</span>,
            sorter: (a, b) => a.CLOSEDCASES - b.CLOSEDCASES,
        },
        {
            title: 'RATING',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.RATING}</span>,
            sorter: (a, b) => a.RATING - b.RATING,
        },
        {
            title: 'COMMENTS',
            key: "id",
            render: (row) => (
                <div className=' flex items-center gap-1'>
                    <Icon icon="basil:chat-outline" className='text-[20px]' />
                    <span>{row.COMMENTS}</span>
                </div>
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
        navigate(`/admin/dashboard/Support-Agents/${record.id}`)
    }


    return (
        <div className='lg:relative text-secondary text-[16px]'>
            <Table id="admin__suppport__agent" columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationOptions} scroll={{ x: "550px" }}
            
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

export default AdminDashboardSupportAgentsTable