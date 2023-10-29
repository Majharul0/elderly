import * as React from 'react';
import AdminSupportAgentTableAction from './AdminSupportAgentTableAction';
import { Table, } from 'antd';
import SupportAgentAdminFiled from '../../../../Shared/AdminFiled/SupportAgentAdminFiled';
import { useNavigate } from 'react-router-dom';


const AdminSupportAgentTable = ({ tableData }) => {
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(10)
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
            title: 'CONTACT NUMBER',
            render: (row) => <div onClick={()=>handelClick(row)} className=" cursor-pointer w-full">
                <span className='text-[16px] font-[400] text-secondary2'>{row.contactNumber}</span>
            </div>,
        },
        {
            title: 'BUSINESS NAME',
            render: (row) => <div onClick={()=>handelClick(row)} className=" cursor-pointer w-full">
                <span className='text-[16px] font-[400] text-secondary2'>{row.businessName}</span>
            </div>,
        },
        {
            title: 'BUSINESS ADDRESS',
            render: (row) => <div onClick={()=>handelClick(row)} className=" cursor-pointer w-full">
                <span className='text-[16px] font-[400] text-secondary2'>{row.businessAdress}</span>
            </div>,
        },
        {
            title: 'STATUS',
            key: "id",
            render: (row) => (
                <div onClick={()=>handelClick(row)} className={`py-1 px-1 rounded-full cursor-pointer  w-full flex items-center justify-center gap-1 ${row.status === "Active" ? "bg-[#E6F9ED]" : "bg-[#F1F3F7]"}`}>
                    <div className={`w-[10px] h-[10px] rounded-full  ${row.status === "Online" ? " bg-[#01BE4F]" : "bg-[#7288AD]"}`}>

                    </div>
                    <div className={` ${row.status === "Online" ? "text-[#01BE4F]" : "text-[#7288AD]"}`}>
                        {row.status}
                    </div>
                </div>
            ),
            sorter: (a, b) => a.status - b.status,
        },
        {
            title: "",
            key: "id",
            render: (row) => (
                <AdminSupportAgentTableAction data={row} />
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
        navigate(`/admin/dashboard/Support-Agents/${record.id}`)
    }



    return (
        <div className='lg:relative text-secondary text-[16px] w-full'>
            <Table columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationOptions} scroll={{ x: 1100 }}
            />
            <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
    )
}

export default AdminSupportAgentTable