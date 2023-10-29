import React from 'react'

const MainButton = ({icon,title,onSubmit}) => {
  return (
    <button onClick={onSubmit} className='cursor-pointer text-[13px] h-[40px] font-[500] flex bg-primary text-white px-4 py-[10px] items-center gap-[2px] rounded-[10px]'>
    {icon}
    <p>{title}</p>
    </button>
  )
}

export default MainButton