import React, { useEffect, useState } from "react";
import img1 from "../../../assets/login/Smart home-pana 1.png";
import img2 from "../../../assets/logo.png";
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Icon } from '@iconify/react';
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import CustomErrorToast from "../../../Shared/Tosat/CustomErrorToast";
import CustomToast from "../../../Shared/Tosat/CustomToast";
import { Helmet } from "react-helmet";
import { setRoleInLocalStorage } from "../../../utils/setAndGetRoleLocalStorage";

const Login = () => {
  const [show, setShow] = useState(false)
  // const [backgroundColor, setBackgroundColor] = useState('transparent'); // Initial background color
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {

    // console.log(data)

    if (data.email === "admin@gmail.com" || data.email === "support@gmail.com" || data.email === "super@gmail.com") {

      if (data.email === "admin@gmail.com") {
        setRoleInLocalStorage('admin')
        navigate("/admin/dashboard")
      }
      if (data.email === "support@gmail.com") {
        setRoleInLocalStorage('supportAgent')
        navigate("/support-agent/dashboard")
      }
      if (data.email === "super@gmail.com") {
        setRoleInLocalStorage('superAdmin')
        navigate("/super-admin/dashboard")

      }
      reset();
      toast.custom((t) => <CustomToast t={t} text={"Admin successfully logged into the admin dashboard."} />)
    } else {
      toast.custom((t) => <CustomErrorToast t={t} text={"There are items that require your attention"} title={"Error"} />)

    }
  };
  const handleBack = () => {
    navigate("/")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      let div1 = document.getElementById('div1');
      if (div1) {
        div1.style.width = '30px';
        div1.style.transition = 'width 1s';
        div1.style.backgroundColor = '#0070F0';
      }
      let div2 = document.getElementById('div2');
      if (div2) {
        div2.style.width = '13px';
        div2.style.transition = 'width 1s';
        div2.style.backgroundColor = '#D9D9D9';
      }
    }, 200);


    return () => {
      clearTimeout(timer);
    };
  }, []);


  return (
    <>

      <Helmet>
        <meta charSet="utf-8" />
        <title>Smart Home | Login</title>
        <link rel="canonical" href="" />
      </Helmet>

      <div className="md:flex w-full ">
        <div className="flex items-center h-[100vh] md:w-[40%] w-full md:pt-10 pt-5 md:flex justify-center">
          <div className="lg:w-[70%] w-full px-6 lg:px-5 flex flex-col items-start h-full">
            <img src={img2} alt="logo" className="w-52" />
            <div className="flex items-center justify-center h-full w-full">
              <div className="w-full">
                <h1 className="font-bold text-2xl">Personal Information</h1>
                <p className="text-[#6b6b6b]">
                  Enter your e-mail address and your password.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
                  <div className="flex flex-col items-start ">
                    <label htmlFor="otp" className="mb-1 font-semibold text-[#0D1A29]">
                      Email
                    </label>
                    <input
                      className="py-3 px-2 text-gray-500 rounded-[10px] w-full  border-[1px] focus:outline-primary"
                      type="email"
                      placeholder={"Enter Your Email"}
                      id="otp"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter a valid e-mail address",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="flex flex-col items-start mt-5 mb-2">
                    <label htmlFor="otp" className="mb-1 font-semibold">
                      <p>Password</p>
                    </label>
                    <input
                      className="py-3 px-2 text-gray-500 rounded-[10px] w-full  border-[1px] focus:outline-primary"
                      type={show ? "text" : "password"}
                      placeholder={"Enter Your Password"}
                      id="otp"
                      {...register}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className=" text-sm mt-1 text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                    <div className="flex w-full justify-end">
                      <IconButton sx={{ marginTop: "-46px" }} onClick={() => setShow(pre => !pre)}>
                        {
                          show ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />
                        }
                      </IconButton>
                    </div>
                  </div>

                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="font-bold  py-3 rounded-[10px] bg-primary text-white w-full"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className=" flex justify-between mt-[50px]">
                  <div className='flex items-center gap-[10px]'>
                    <div id='div2' className='bg-primary w-[13px] h-[13px]  rounded-[10px] '></div>
                    <div id='div1' className='bg-[#D9D9D9] w-[13px] h-[13px] rounded-[10px] mr-2.5'></div>

                  </div>

                  <div className=''>
                    <button
                      onClick={handleBack}
                      type="submit"
                      className="text-primary bg-white border border-primary rounded-[10px] px-3 py-2 text-sm font-medium flex items-center"
                    >
                      Back
                      <Icon className='ml-2.5 ' icon="bi:arrow-left" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:h-[100vh] mt-5 md:mt-0 md:w-[60%] md:flex items-center justify-center bg-[#FBFCFD]">
          <div className="">
            <img src={img1} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
