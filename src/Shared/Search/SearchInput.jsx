import { Icon } from '@iconify/react'
import React from 'react'

const SearchInput = ({search,setSearch,style,placeholder}) => {
  return (
    <div className=' relative'>
        <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder ? placeholder : "Search..."} className='text-[13px] font-[500] outline-none w-full  py-[9px] px-3 pr-10 flex items-center justify-between border-[1px] border-[#90969D] focus:border-primary rounded-[10px]'/>
        <Icon icon="material-symbols:search" className='text-[25px] text-[#90969D] absolute top-[7px] right-[7px]' />
    </div>
  )
}

export default SearchInput