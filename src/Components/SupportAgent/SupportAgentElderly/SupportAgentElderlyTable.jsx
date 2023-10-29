import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { Table, Tooltip, } from 'antd';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminFiled from '../../../Shared/AdminFiled/AdminFiled';
import { SidebarContext } from '../../../Context/SidebarContext';



const SupportAgentElderlyTable = ({ tableData }) => {
    const navigate = useNavigate()
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(10)
    const { setBrackCount } = React.useContext(SidebarContext)

    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                <AdminFiled data={row} />
            )
        },
        {
            title: 'CONTACT NUMBER',
            key: "contactNumber",
            render: (row) => (<span className='text-[16px] font-[400] text-secondary2'>{row.contactNumber}</span>)
        },
        {
            title: 'ADDRESS',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.businessAdress}</span>
        },
        {
            title: 'CRITICAL',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.CRITICAL}</span>
        },
        {
            title: 'WARNING',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.WARNING}</span>
        },
        {
            title: 'PROBLEM',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.PROBLEM}</span>
        },
        {
            title: "ACTIONS",
            key: "id",
            render: (row) => (
                <Tooltip title="View">
                    <IconButton onClick={() => { setBrackCount("Elderly"); navigate(`/support-agent/dashboard/user/${row.id}`) }}>
                        <Icon icon="ph:eye" className='text-[20px] text-secondary2 hover:text-[#0070F0]' />
                    </IconButton>
                </Tooltip>
            )
        }
    ];
    const handlePaginationChange = (page, pageSize) => {
        console.log(`Page: ${page}, Page Size: ${pageSize}`);
        setStart((pre) => page === 1 ? 1 : page * 10 - 9)
        setend((pre) => page * 10 > tableData.length ? tableData.length : page * 10)
    };

    const paginationOptions = {
        onChange: handlePaginationChange,
    };

    const handelClick = (record, rowIndex)=>{
        navigate(`/support-agent/dashboard/user/${record.id}`)
    }


    return (
        <div className='lg:relative text-secondary text-[16px]'>
            <Table id="admin__suppport__agent" className='admin__Table' columns={columns} dataSource={tableData} scroll={{ x: 1000 }}

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

export default SupportAgentElderlyTable