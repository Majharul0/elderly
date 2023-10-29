import React from 'react'
import { Table } from 'antd'
import CustomDialog from '../../../../../../../Shared/Dialog/CustomDialog'

const AdminElderlyOverViewRightActivitsAll = ({ open, setOpen, tableData }) => {

  const [start, setStart] = React.useState(1)
  const [end, setend] = React.useState(5)

  const columns = [
    {
      title: 'DATE',
      dataIndex: 'date',
      sorter: (a, b) => a.date - b.date,
    },
    {
      title: 'ACTIVITY',
      dataIndex: 'title'
    },
  ]


  const handlePaginationChange = (page, pageSize) => {
    // You can fetch data for the new page using API calls or adjust your data array
    console.log(`Page: ${page}, Page Size: ${pageSize}`);
    setStart((pre) => page === 1 ? 1 : page * 5 - 4)
    setend((pre) => page * 5 > tableData.length ? tableData.length : page * 5)
  };

  const paginationConfig = {
    onChange: handlePaginationChange,
    pageSize: 5
  };

  return (
    <>
      <CustomDialog open={open} setOpen={setOpen} title="All Activities">
        <div className='relative text-secondary text-[16px] mx-[-20px]'>
          <Table columns={columns} className='admin__Table' dataSource={tableData} pagination={paginationConfig} />
          <div className='lg:block text-[#90969D] font-medium text-[13px] lg:absolute bottom-[25px] left-6 hidden '>Showing{start} to {end} of {tableData?.length} entries</div>
        </div>
      </CustomDialog>
    </>
  )
}

export default AdminElderlyOverViewRightActivitsAll