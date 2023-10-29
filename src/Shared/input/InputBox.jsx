import React from 'react'

const InputBox = ({lable,type,register,error,placeholder}) => {
  return (
    <div className="flex flex-col items-start w-full mt-5">
        <label htmlFor="otp" className="mb-1 font-[500] text-[13px] text-[#3D4854]">
         {lable}
        </label>
        <input
        className="py-3 px-2 text-[#3D4854] placeholder:text-[#90969D] rounded-[10px] w-full text-[16px] outline-none border-[#90969D] border-[1px] focus:border-primary"
        type={type}
        placeholder={placeholder}
        id="otp"
        {...register}
        />
        <label className="label">
        {error?.type === "required" && (
            <span className=" text-sm mt-1 text-red-500">
            {error.message}
            </span>
        )}
        </label>
  </div>
  )
}

export default InputBox