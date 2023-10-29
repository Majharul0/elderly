import { Icon } from '@iconify/react';
import { IconButton } from '@mui/material';
import { Table, Tooltip } from 'antd';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { SidebarContext } from '../../../../Context/SidebarContext';

const Alerts = ({ row }) => {
    return (
        <div>
            <div className='flex items-center gap-2'>

                {
                    row.alert === "alert" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF5959]/10`}>
                            <Icon icon="ant-design:alert-outlined" className="text-[20px] text-[#FF5959]" />
                        </div>
                    )
                }
                {
                    row.alert === "warning" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#FF974D]/10`}>
                            <Icon icon="ri:alert-line" className="text-[20px] text-[#FF974D]" />
                        </div>
                    )
                }
                {
                    row.alert === "bug" && (
                        <div className={`w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#5973FF]/10`}>
                            <Icon icon="ant-design:bug-outlined" className="text-[20px] text-[#5973FF]" />
                        </div>
                    )
                }
                <div>
                    {/* <h3 className='text-[16px] font-[500] text-secondary hidden xl:flex'>{row.title}</h3> */}
                    <h3 className='text-[16px] font-[500] text-[#5D6670]'>{row.title.slice(0, 35)}</h3>
                    <p className='text-[13px] font-[400] text-secondary2'>{row.name} <span className='font-[500]'>#{row.id}</span></p>
                </div>

            </div>
        </div>
    )
}

const LatestAlertsTable = ({ tableData }) => {
    const navigate = useNavigate()
    const [start, setStart] = React.useState(1)
    const [end, setend] = React.useState(tableData?.length > 5 ? 5 : tableData?.length)
    const {setBrackCount} = useContext(SidebarContext)
    const columns = [
        {
            title: 'ALERT',
            key: "id",
            render: (row) => (
                <Alerts row={row} />
            )
        },
        {
            title: 'CATEGORY',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.CATEGORY}</span>,
            sorter: (a, b) => a.CATEGORY - b.CATEGORY,
        },
        {
            title: 'AFFECTED  DEVICES',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.AFFECTEDDEVICES}</span>,
            sorter: (a, b) => a.AFFECTEDDEVICES - b.AFFECTEDDEVICES,
        },
        {
            title: 'DATE',
            render: (row) => <span className='text-[16px] font-[400] text-secondary2'>{row.DATE}</span>,
        },
        {
            title: 'ACTION',
            key: "id",
            render: (row) => (
                <Tooltip title="View">
                    <IconButton onClick={() => {setBrackCount("Alerts"); navigate(`/support-agent/dashboard/user/${row.id}`)}}>
                        <Icon icon="ph:eye" className='text-[20px] text-secondary hover:text-[#0070F0]' />
                    </IconButton>
                </Tooltip>
            )
        },
    ];

    const handlePaginationChange = (page, pageSize) => {
        console.log(`Page: ${page}, Page Size: ${pageSize}`);
        setStart((pre) => page === 1 ? 1 : page * 5 - 4)
        setend((pre) => page * 5 > tableData.length ? tableData.length : page * 5)
    };

    const paginationOptions = {
        pageSize: 5,
        onChange: handlePaginationChange,
    };

    const handelClick = (record, rowIndex)=>{
        navigate(`/support-agent/dashboard/user/${record.id}`)
    }

    return (
        <div className='lg:relative  text-secondary text-[16px]'>
            <Table id="admin__suppport__agent" columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationOptions} scroll={{ x: 750 }}
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

export default LatestAlertsTable