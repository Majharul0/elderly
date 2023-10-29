import React from 'react'
import { suspendedErrorData } from '../../../../assets/admin/data'
import img from "../../../../assets/suspended/Icon.png"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const SuspendAdminTop = ({setCreate}) => {

    // className=' flex items-center gap-5 flex-col md:flex-row overflow-x-auto'

  return (
    <div className='w-full grid grid-cols-1' id="suspendAdmin__swiper">
            <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    className="mySwiper2"
                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1224: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
                  >
                {
            suspendedErrorData.map((item,i)=>{
                return(
                  <SwiperSlide key={i}>
                    <div className={`w-full rounded-[10px] text-white  relative`} style={{background:item.bg}}>
                        <div className='p-5'>
                            <h2 className=' text-[16px] font-[500]'>{item.name}</h2>
                            <span className='text-[13px] mt-[6px] font-[700]'>{item.data}</span>
                            <p className='text-[16px] font-[500] mt-[10px]'>{item.dec}</p>
                            <button onClick={()=>setCreate(true)} className='mt-5 bg-white/20 py-[10px] px-3 rounded-[10px] font-[500] text-[13px] text-white'>Set New Admin</button>
                        </div>

                        <div className=' absolute right-0 top-[25px]'>
                            <img src={img} alt="" />
                        </div>
                    </div>
                    </SwiperSlide>
                   
                )
            })
        }
        </Swiper>
    </div>
  )
}

export default SuspendAdminTop