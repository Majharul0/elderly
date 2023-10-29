import React from "react";
import img1 from "../../../assets/login/Smart home-pana 1.png";
import img2 from "../../../assets/logo.png";
import { useForm } from "react-hook-form";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };

  return (
    <div className="md:flex w-full ">
      <div className="md:h-[100vh] md:w-[40%] w-full md:pt-10 pt-5 md:flex justify-center">
        <div className=" lg:w-[70%] px-5">
          <img src={img2} alt="logo" className="w-52" />
          <div className=" md:mt-40 mt-20">
            <h1 className="font-bold text-2xl">Personal Information</h1>
            <p className="text-[#6b6b6b]">
              Enter your e-mail address and your password.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
              <div className="flex flex-col items-start ">
                <label htmlFor="otp" className="mb-1 font-semibold">
                  Email
                </label>
                <input
                  className="py-3 px-2 text-gray-500 rounded w-full  border-[1px]"
                  type="email"
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
                  Password
                </label>
                <input
                  className="py-3 px-2 text-gray-500 rounded w-full  border-[1px]"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
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
          </div>
        </div>
      </div>
      <div className="md:h-[100vh] mt-5 md:mt-0 md:w-[60%] md:flex items-center justify-center bg-[#FBFCFD]">
        <div className="">
          <img src={img1} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
