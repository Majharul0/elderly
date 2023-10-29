import { Box, IconButton } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import AdminElderlyEdit from './AdminElderlyEdit';
import DeleteDialog from '../../../../Shared/Delete/DeleteDialog';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import { Tooltip } from 'antd';
import { SidebarContext } from '../../../../Context/SidebarContext';

const AdminElderlyActions = ({ row }) => {
  const [edit, setEdit] = useState(false)
  const [deleteItem, setDeleteItem] = useState(false)
  const navigate = useNavigate()
  const {setBrackCount} = useContext(SidebarContext)

  const deleteElderly = () => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);
      setDeleteItem(false)
      // Display the success toast
      toast.custom((t) => <CustomToast t={t} text="Elderly profile has been successfully deleted" />);
    } catch (error) {
      // Handle API call or other errors
      console.error('An error occurred:', error);
      toast.error('An error occurred while creating a new admin.');
    }
  }

  return (
    <div>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: "0px",
        zIndex:"99999",
      }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => setEdit(true)}>
            <Icon icon="basil:edit-outline" className='text-[20px] hover:text-[#0070F0] text-secondary' />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={() => setDeleteItem(true)}>
            <Icon icon="basil:trash-outline" className='text-[20px] hover:text-red-500 text-secondary' />
          </IconButton>
        </Tooltip>
        <Tooltip title="View">
          <IconButton onClick={() => {setBrackCount("Elderly"); navigate(`/admin/dashboard/elderly/${row.id}`)}}>
            <Icon icon="ph:eye" className='text-[20px] text-secondary hover:text-[#0070F0]' />
          </IconButton>
        </Tooltip>
      </Box>
      {/* =========Admin Elderly edit modal start=========*/}
      <AdminElderlyEdit item={row} creactDrawer={edit} setCreactDrawer={setEdit} />

      {/* =========Admin Elderly Delete modal start=========*/}
      <DeleteDialog open={deleteItem} setOpen={setDeleteItem} onDelete={deleteElderly} title={"Are you sure to delete this elderly profile? This process is"} title2={" irreversible."} />
    </div>
  )
}

export default AdminElderlyActions


