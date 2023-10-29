import { Icon } from '@iconify/react'
import React from 'react'

const TrendsAvater = ({row}) => {


  return (
        <div className='flex items-center gap-2 w-full cursor-pointer'>
            <div className='w-[40px] h-[40px] bg-[#E7E8EA] rounded-[4px] flex items-center justify-center'>
                            {row?.title === 'Waking up time' && (<Icon icon="gala:clock"  className='text-[20px]'/>)}
                            {row?.title === 'Going in bed time' && (<Icon icon="mdi:bed-time"  className='text-[20px]'/>)}
                            {row?.title === 'Rooms Visited' && (<Icon icon="bx:door-open"  className='text-[20px]'/>)}
                            {row?.title === 'Time at Home' && (<Icon icon="heroicons:home"  className='text-[20px]'/>)}
                            {row?.title === 'Time outdoors' && (<Icon icon="bx:walk"  className='text-[20px]'/>)}
                            {row?.title === 'Device Usage Time' && (<Icon icon="gridicons:phone"  className='text-[20px]'/>)}
                            {row?.title === 'Sleeping Score' && (<Icon icon="icon-park-twotone:sleep-two"  className='text-[20px]'/>)}
                            {row?.title === 'Showers' && (<Icon icon="material-symbols:shower-outline"  className='text-[20px]'/>)}
                            {row?.title === 'Coffees' && (<Icon icon="ph:coffee"  className='text-[20px]'/>)}
                            {row?.title === 'Bathroom Visited' && (<Icon icon="mdi:toilet"  className='text-[20px]'/>)}
            </div>
            <div>
                <h3 className='text-[16px] text-[#5D6670] font-[500]'>{row.title}</h3>
                <p className=' text-[13px] font-[400] text-[#5D6670]'>{row.sub}</p>
            </div>
        </div>
  )
}

export default TrendsAvater