import * as React from 'react';
import AdminElderlyActions from './AdminElderlyActions';
import AdminFiled from '../../../../Shared/AdminFiled/AdminFiled';
import { Table, } from 'antd';
import { useNavigate } from 'react-router-dom';



const AdminElderlyTable = ({ tableData }) => {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(10)
    const navigate = useNavigate()

    const columns = [
        {
            title: 'ELDERLY',
            key: "id",
            render: (row) => (
                <div onClick={()=>handelClick(row)}  className="w-full cursor-pointer">
                    <AdminFiled onClick={()=>handelClick(row)} data={row} />
                </div>
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (row) => <div onClick={()=>handelClick(row)}  className="w-full cursor-pointer">
                <span className='text-[16px] font-[400] text-secondary2'>{row.contactNumber}</span>
            </div>,
        },
        {
            title: 'ADDRESS',
            render: (row) => <div onClick={()=>handelClick(row)} className="cursor-pointer w-full">
                <span className='text-[16px] font-[400] text-secondary2'>{row.businessAdress}</span>
            </div>,
        },
        {
            title: 'CRITICAL',
            render: (row) => <div onClick={()=>handelClick(row)} className="cursor-pointer w-full">
                <span className='text-[16px] font-[400] text-secondary2'>{row.CRITICAL}</span>
            </div>,
        },
        {
            title: 'WARNING',
            render: (row) =><div onClick={()=>handelClick(row)} className="cursor-pointer w-full">
                 <span className='text-[16px] font-[400] text-secondary2'>{row.WARNING}</span>
            </div>,
        },
        {
            title: 'PROBLEM',
            render: (row) =><div onClick={()=>handelClick(row)} className="cursor-pointer w-full">
                 <span className='text-[16px] font-[400] text-secondary2'>{row.PROBLEM}</span>
            </div>,
        },
        {
            title: "ACTIONS",
            key: "id",
            render: (row) => (
                <AdminElderlyActions row={row} />
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

    const handelClick = (record) => {
        navigate(`/admin/dashboard/elderly/${record.id}`)
    }



    return (
        <div className='lg:relative text-secondary text-[16px] w-full'>
            <Table columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationOptions} scroll={{ x: 1100 }}
            />
            <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
    )
}

export default AdminElderlyTable