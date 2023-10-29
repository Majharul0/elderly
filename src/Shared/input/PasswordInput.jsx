import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const PasswordInput = ({lable,lable2,register,placeholder}) => {
    const [show,setShow] = useState(false)

  return ( 
         <div className="flex flex-col items-start w-full mt-5 relative">
            <label htmlFor="otp" className="mb-1 font-semibold">
            {lable}
            </label>
            <input
            className="py-3 px-2 text-gray-500 rounded-[10px] w-full outline-none focus:border-primary border-[#90969D]  border-[1px]"
            type={show ? "text" :"password"}
            placeholder={placeholder}
            id="otp"
            {...register}
            />
            <div className=' absolute top-[33%] right-0'>
                <IconButton onClick={()=>setShow(pre=>!pre)}>
                    {
                        show ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />
                    }
                </IconButton>
            </div>
            <label className="label mt-2">
                {lable2}
            </label>
        </div>       
  )
}

export default PasswordInput