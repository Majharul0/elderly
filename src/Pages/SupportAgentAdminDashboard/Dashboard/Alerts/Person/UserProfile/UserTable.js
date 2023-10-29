import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Table } from 'antd';
import { Icon } from '@iconify/react';
import UserProfileDialog from './UserProfileDialog';
import { Switch } from 'antd';
import DeleteDialog from '../../../../../../Shared/Delete/DeleteDialog';
import CustomToast from '../../../../../../Shared/Tosat/CustomToast';
import { toast } from 'react-hot-toast';

function createData(name, id, calories, fat, carbs, protein, admin) {
    return { name, calories, id, fat, carbs, protein, admin };
}

const AllUser = [
    {
        name: 'Frozen yoghurt',
        id: 1,
        relation: 'Sister',
        contactNumber: '01395302532',
        age: 12,
        role: 'user',
        isActive: true
    },

    {
        name: 'Devid Tom',
        id: 2,
        relation: 'son',
        contactNumber: '01395302532',
        age: 28,
        role: 'admin',
        isActive: true
    },
    {
        name: 'Ice cream sandwich',
        id: 3,
        relation: 'Brother',
        contactNumber: '01395302532',
        age: 37,
        role: 'admin',
        isActive: true
    },
    {
        name: 'Eclair',
        id: 4,
        relation: 'Father',
        contactNumber: '01395302532',
        age: 62,
        role: 'user',
        isActive: true
    },
    {
        name: 'Cupcake',
        id: 5,
        relation: 'Mother',
        contactNumber: '01395302532',
        age: 5,
        role: 'user',
        isActive: true
    },
    {
        name: 'Gingerbread',
        id: 6,
        relation: 'Sister',
        contactNumber: '01395302532',
        age: 56,
        role: 'user',
        isActive: true
    },
    {
        name: 'Frozen yoghurt',
        id: 7,
        relation: 'Sister',
        contactNumber: '01395302532',
        age: 12,
        role: 'user',
        isActive: true
    },
    {
        name: 'Ice cream sandwich',
        id: 9,
        relation: 'Brother',
        contactNumber: '01395302532',
        age: 27,
        role: 'user',
        isActive: true
    }
];



let myUserName = 'Devid Tom'

export default function UserTable() {

    const [creact, setCreate] = React.useState(false)
    const [deleUserOpen, setDeleteUserOpen] = React.useState(false)
    const [userId, setUserId] = React.useState()
    const [users, setUsers] = React.useState(AllUser)

    const rows = users.map(user => {
        const { name, id, relation, contactNumber, age, role } = user;
        return createData(name, id, relation, contactNumber, age, role);
    });

    const openDeleteModal = (id) => {
        setUserId(id)
        setDeleteUserOpen(true);
    }

    const handleUserDelete = () => {
        if (userId) {
            const updatedUsers = AllUser.filter(user => user.id !== userId);
            setDeleteUserOpen(false);
            setUsers(updatedUsers);
            toast.custom((t) => <CustomToast t={t} text={"Delete User Successfully!"} />)
        }

    }

    const handleToggle = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const columns = [
        {
            title: 'NAME',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.name}</p>
            )
        },
        {
            title: 'RELATION',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.calories}</p>
            )
        },
        {
            title: 'CONTACT NUMBER',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.fat}</p>
            )
        },
        {
            title: 'AGE',
            render: (data) => (
                <p className='text-lg text-[#5D6670]'>{data.carbs}</p>
            )
        },

        {
            title: 'ACTIONS',
            key: 'action',
            align: 'center',
            render: (data) => (
                <div className='flex gap-4 items-center justify-end'>
                    <Switch defaultChecked={true} onChange={handleToggle} color="primary" disabled={data?.name === myUserName} />
                    <button
                        className={` text-white px-3 py-2.5 font-medium items-center gap-1 rounded-[10px] text-xs ${data?.name !== myUserName ? ' bg-blue-500 cursor-pointer' : 'bg-[#8ABDF8] cursor-not-allowed'}`}
                    >
                        Make Admin
                    </button>
                    <button
                        onClick={() => openDeleteModal(data?.id)}
                        className={`${data?.name !== myUserName ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    >
                        <Icon className="text-lg" icon="basil:trash-outline" />
                    </button>
                </div>)
        }
    ];

    return (
        <>
            <div id='user-table' className='bg-white rounded-[10px] pb-3'>
                <div className='flex justify-between items-center p-6'>
                    <h1 className='text-2xl font-medium text-[#3D4854]'>Family Members</h1>
                    <div onClick={() => setCreate(true)} className='cursor-pointer flex bg-blue-500 text-white p-2 text-xs items-center gap-1 font-medium rounded-[10px]'>
                        <AddIcon fontSize='small' />
                        <p>Add Member</p>
                    </div>
                </div>
                <Table id='alerts-table' className='support-agent-dashboard  ' columns={columns} dataSource={rows} pagination={false} />

            </div>
            {/* Add Member */}
            <UserProfileDialog creactDrawer={creact} setCreactDrawer={setCreate} />

            {/* -----------------delete user------------------ */}
            <DeleteDialog
                open={deleUserOpen}
                setOpen={setDeleteUserOpen}
                onDelete={handleUserDelete}
                title2={"Are you sure to delete this user?"}
            />
        </>
    );
}