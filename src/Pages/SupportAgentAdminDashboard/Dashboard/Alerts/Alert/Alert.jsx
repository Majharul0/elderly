import React from 'react';
import { Table } from 'antd';
import { Icon } from '@iconify/react';
import { Link} from "react-router-dom";


const Alert = ({alertsData}) => {
    const columns = [
        {
            title: 'ID',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>#{data.id}</p>
            )
        },
        {
            title: 'NAME',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.name}</p>
            )
        },
        {
            title: 'ADDRESS',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.address}</p>
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (data) => (
                <p className='text-sm text-[#5D6670]'>{data.contactNumber}</p>
            )
        },
        {
            title: 'DATE',
            render: (data) => (
                <p className='text-sm text-[#5D6670]'>{data.date}</p>
            )
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            render: (data) => (
                <Link to={`/support-agent/dashboard/user/${data.id}`} ><Icon className='mx-auto text-lg text-[#3D4854]' icon="ph:eye" /></Link>
            )
        }
    ];
    const [start,setStart] = React.useState(1)
    const [end,setEnd] = React.useState(10)
    const handlePaginationChange = (page, pageSize) => {
        setStart((pre)=> page===1 ? 1 : page*10 - 9)
        setEnd((pre)=> page*10 > alertsData.length ?  alertsData.length : page*10)
      };

    const paginationConfig = {
        onChange: handlePaginationChange,
      };
    return (
        <div className='lg:relative mt-5 overflow-x-auto'>
        <Table id='alerts-table' className='support-agent-dashboard' columns={columns} dataSource={alertsData} pagination={paginationConfig} />
        <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing {start} to {end} of {alertsData?.length} entries</div></div>
    );
};

export default Alert;