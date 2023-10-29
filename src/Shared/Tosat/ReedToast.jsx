import React from 'react'
import { toast } from "react-hot-toast";
import img1 from "../../assets/icon/Cross2.png"
import svg from "../../assets/icon/Icon.svg"

const ReedToast = ({ t,text,title }) => {
  return (
    <div
      className={`${t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-[#FF2727] relative shadow-lg text-white rounded-lg pointer-events-auto flex items-center justify-between ring-1 ring-black ring-opacity-5`}
    >
        <div className="flex-1 w-0 p-4">
        <div className="flex items-start flex-col">
          <div className="flex-shrink-0 pt-0.5 flex items-center gap-2">
            <img src={svg} alt="" className='mb-[6px]'/>
            <p className="text-[19px] font-medium mb-1">
              {title}
            </p>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-[13px] font-[400]">
              {text}
            </p>
          </div>
        </div>
      </div>
        <button
          className='py-2 px-3 absolute top-0 right-0'
          onClick={() => toast.dismiss(t.id)}
        >
          <img src={img1} alt="" />
        </button>
    </div>
  )
}

export default ReedToast