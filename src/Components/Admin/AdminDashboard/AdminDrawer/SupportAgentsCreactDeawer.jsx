import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import InputBox from '../../../../Shared/input/InputBox';
import FormDrawer from '../../../../Shared/Drawer/FormDrawer';
import { toast } from 'react-hot-toast';
import CustomToast from '../../../../Shared/Tosat/CustomToast';

const SupportAgentsCreactDeawer = ({creactDrawer,setCreactDrawer}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      // Simulate an API call
      // Replace this with your actual API call
      // await apiCallFunction(data);

      reset();
      setCreactDrawer(false); 

      // Display the success toast
      toast.custom((t) => <CustomToast t={t} text="New Support Agent has been created Successfully!" />);
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
            title={"Create A Support Agent"}
            button={"Create Support Agent"}
            handleSubmit={handleSubmit(onSubmit)}
         >

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

            <InputBox 
              lable={"E-mail"}
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
              placeholder={"Enter E-mail"}

            />
         </FormDrawer>
    </div>
  )
}

export default SupportAgentsCreactDeawer