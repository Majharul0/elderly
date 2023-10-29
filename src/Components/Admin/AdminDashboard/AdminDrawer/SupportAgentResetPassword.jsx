import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FormDrawer from '../../../../Shared/Drawer/FormDrawer';
import CustomToast from '../../../../Shared/Tosat/CustomToast';
import PasswordInput from '../../../../Shared/input/PasswordInput';

const SupportAgentResetPassword = ({creactDrawer,setCreactDrawer}) => {

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
    
          setCreactDrawer(false)
          // Display the success toast
          toast.custom((t) => <CustomToast t={t} text="Temporary password has been successfully changed" />);
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
            title={"Reset Password"}
            button={"Save Changes"}
            handleSubmit={handleSubmit(onSubmit)}
         >

            <PasswordInput 
                lable={"Temporary password"}
                lable2={"At least 8 characters long"}
                register={register("password")}
                placeholder={"***********"}
            />


         </FormDrawer>

    </div>
  )
}

export default SupportAgentResetPassword