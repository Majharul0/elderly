import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import FormDrawer from '../../../Shared/Drawer/FormDrawer';
import InputBox from '../../../Shared/input/InputBox';
// import { SuccessToast } from '../../../Shared/Tosat/SuccessToast';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../Shared/Tosat/CustomToast';


const SuperAdminCreateDrawer = ({creactDrawer,setCreactDrawer}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);

      reset();
      setCreactDrawer(false); 

      // Display the success toast
      toast.custom((t) => <CustomToast t={t} text="New admin has been created Successfully!" />);
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
         title={"Create An Admin"}
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
                  register("businessName",
                  {
                    required: {
                        value: true,
                        message: "Please enter Business Name",
                        },
                    }
                  )
              }
              error={errors.businessName}
              placeholder={"Enter Business Name"}

            />

          <InputBox 
              lable={"Business Address"}
              type={"text"}
              register={
                  register("businessAdress",
                  {
                    required: {
                        value: true,
                        message: "Please enter Business Adress",
                        },
                    })
              }
              error={errors.businessAdress}
              placeholder={"Business Address"}

            />

          <InputBox 
              lable={"Contact Person"}
              type={"text"}
              register={
                  register("contactPerson",
                  {
                    required: {
                        value: true,
                        message: "Please enter Contact Person",
                        },
                    })
              }
              error={errors.contactPerson}
              placeholder={"Enter Contact Person"}

            />

            <InputBox 
              lable={"Contact Number"}
              type={"text"}
              register={
                  register("contactNumber",
                  {
                    required: {
                        value: true,
                        message: "Please enter Contact Number",
                        },
                    })
              }
              error={errors.contactNumber}
              placeholder={"Enter Contact Number"}

            />

        </FormDrawer>
    </div>
  )
}

export default SuperAdminCreateDrawer