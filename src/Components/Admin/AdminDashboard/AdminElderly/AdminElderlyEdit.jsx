import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import FormDrawer from '../../../../Shared/Drawer/FormDrawer';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import InputBox from '../../../../Shared/input/InputBox';



const AdminElderlyEdit = ({creactDrawer,setCreactDrawer,item}) => {

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
      phone:item.contactNumber,
    }
  });

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);
      setCreactDrawer(false)
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
         title={"Edit Elderly Profile"}
         button={"Save Changes"}
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
              lable={"Customer’s E-Mail "}
              type={"email"}
              register={
                  register("email",{
                  required: {
                      value: true,
                      message: "Please enter Customer’s E-Mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter Customer’s E-Mail"}

            />

            <InputBox 
              lable={"Customer’s Phone number"}
              type={"text"}
              register={
                  register("phone")
              }
              placeholder={"Enter Customer’s Phone number"}

            />

        </FormDrawer>
    </div>
  )
}

export default AdminElderlyEdit