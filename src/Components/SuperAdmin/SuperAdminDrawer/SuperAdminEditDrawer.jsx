import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FormDrawer from '../../../Shared/Drawer/FormDrawer';
import CustomToast from '../../../Shared/Tosat/CustomToast';
import InputBox from '../../../Shared/input/InputBox';

const SuperAdminEditDrawer = ({creactDrawer,setCreactDrawer,item}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:{
      firstName:item.firstName,
      lastName:item.lastName,
      email:item.email,
      businessName:item.businessName,
      businessAdress:item.businessAdress,
      contactPerson:item.contactPerson,
      contactNumber:item.contactNumber,
    }
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);

      setCreactDrawer(false); 

      // Display the success toast
      toast.custom((t) => <CustomToast t={t} text="Changes has been successfully made" />);
    } catch (error) {
      // Handle API call or other errors
      console.error('An error occurred:', error);
      toast.error('An error occurred while creating a new admin.');
    }
  };
  return (
    <div>
      <FormDrawer 
         creactDrawer={creactDrawer}
         setCreactDrawer={setCreactDrawer}
         title={"Edit Admin Details"}
         button={"Create Admin"}
         handleSubmit={handleSubmit(onSubmit)}
         >
            <div className='flex items-center gap-4'>
            <InputBox 
              lable={"First Name"}
              type={"text"}
              register={
                  register("firstName",{
                  required: {
                      value: true,
                      message: "Please enter first name",
                      },
                  })
              }
              error={errors.firstName}
              placeholder={"Enter First Name"}

            />

            <InputBox 
              lable={"Last Name"}
              type={"text"}
              register={
                  register("lastName",{
                  required: {
                      value: true,
                      message: "Please enter last name",
                      },
                  })
              }
              error={errors.lastName}
              placeholder={"Enter Last Name"}

            />
            </div>

            <InputBox 
              lable={"Business E-mail"}
              type={"email"}
              register={
                  register("email",{
                  required: {
                      value: true,
                      message: "Please enter E-mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter Business E-mail"}

            />
            <InputBox 
              lable={"Business Name"}
              type={"text"}
              register={
                  register("businessName")
              }
              placeholder={"Enter Business Name"}

            />

          <InputBox 
              lable={"Business Address"}
              type={"text"}
              register={
                  register("businessAdress")
              }
              placeholder={"Business Address"}

            />

          <InputBox 
              lable={"Contact Person"}
              type={"text"}
              register={
                  register("contactPerson")
              }
              placeholder={"Enter Contact Person"}

            />

            <InputBox 
              lable={"Contact Number"}
              type={"text"}
              register={
                  register("contactNumber")
              }
              placeholder={"Enter Contact Number"}

            />

        </FormDrawer>
    </div>
  )
}

export default SuperAdminEditDrawer