import React from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const FormDrawer = ({creactDrawer,setCreactDrawer,title,button,handleSubmit,children }) => { 

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setCreactDrawer( open );
  };


  return (
    <div>
        <Drawer
            anchor={"right"}
            open={creactDrawer}
            onClose={toggleDrawer(false)}
          >
            <div className='md:w-[590px] sm:w-full bg-white py-5 px-5'>
                <div className='flex items-center justify-between'>
                    <h2 className=' text-[23px] font-[500] text-[#3D4854]'>{title}</h2>
                    <IconButton onClick={()=>setCreactDrawer(false)}>
                        <CloseIcon className=' text-black'/>
                    </IconButton>
                </div>
                <form onSubmit={handleSubmit} className="w-full mt-[0px]">
                    <div className='mt-[10px]'>
                       {children}
                    </div>
                    <div className="mt-[38px] flex items-center gap-5">
                        <button
                        type="submit"
                        className="font-[500] text-[16px] h-[44px]  px-5 rounded-[10px] bg-primary border border-primary text-white "
                        >
                        {button}
                        </button>
                        <button
                        type="button"
                        onClick={()=>setCreactDrawer(false)}
                        className="font-[500] text-[16px] h-[44px] px-5 rounded-[10px] bg-transparent text-[#90969D] border border-secondary"
                        >
                        Cancel
                        </button>
                    </div>
                 </form>
            </div>
          </Drawer>
    </div>
  )
}

export default FormDrawer