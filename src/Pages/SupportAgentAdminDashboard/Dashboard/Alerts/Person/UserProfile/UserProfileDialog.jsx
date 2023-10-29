import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import FormDrawer from '../../../../../../Shared/Drawer/FormDrawer';
import CustomToast from '../../../../../../Shared/Tosat/CustomToast';
import InputBox from '../../../../../../Shared/input/InputBox';



const UserProfileDialog = ({creactDrawer,setCreactDrawer}) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    try {
      reset();
      setCreactDrawer(false)
      toast.custom((t) => <CustomToast t={t} text="New Elderly has been created Successfully!" />);
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred while creating a new admin.');
    }
  };


  return (
    <div>
        <FormDrawer 
            creactDrawer={creactDrawer}
            setCreactDrawer={setCreactDrawer}
            title={"Add Member"}
            button={"Add Member"}
            handleSubmit={handleSubmit(onSubmit)}
         >

            <div className=' flex items-center gap-4'>
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
              lable={"Member’s E-Mail  "}
              type={"email"}
              register={
                  register("email",{
                  required: {
                      value: true,
                      message: "Please enter Enter customer’s e-mail ",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter customer’s e-mail "}

            />


            <InputBox 
              lable={"Member’s Phone number "}
              type={"text"}
              register={
                  register("phone",{
                  required: {
                      value: true,
                      message: "Please enter E-mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter customer’s phone number"}

            />

            <InputBox 
              lable={"Member’s Address"}
              type={"text"}
              register={
                  register("adress",{
                  required: {
                      value: true,
                      message: "Please enter E-mail",
                      },
                  })
              }
              error={errors.email}
              placeholder={"Enter customer’s Address"}

            />


            <div className='mt-5'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title='google map of user'
            ></iframe>
            </div>
         </FormDrawer>
    </div>
  )
}

export default UserProfileDialog