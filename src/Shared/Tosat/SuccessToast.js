import { Icon } from "@iconify/react"
import { IconButton } from "@mui/material"
import { toast } from "react-hot-toast"

export const SuccessToast = (text)=>{
    return toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-[#E6F9ED] shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 pt-0.5 h-[40px] w-[40px] bg-[#B0EBC8] rounded-[16px]">
                  <Icon icon="basil:checked-box-solid" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-[19px] font-medium text-[#0D1A29]">
                    Success
                </p>
                <p className="mt-1 text-[13px] font-[400] text-[#0D1A29]">
                  {text}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <IconButton
                onClick={() => toast.dismiss(t.id)}
            >
                <Icon icon="icon-park-outline:close" />
            </IconButton>
          </div>
        </div>
      ))
}