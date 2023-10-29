import React, { useState,useRef } from 'react';
import { Icon } from '@iconify/react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull';

export default function VideoScreenasd({ videoUrl,room,icon,runningStatus, isActive, onClickSmallScreen }){
    const playerRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false)
    const handleFullScreenClick = () => {
      screenfull.toggle(playerRef.current);
      setFullscreen(!fullscreen)
    };
 
    return (
        <div  onClick={isActive ? () => {} : onClickSmallScreen} ref={playerRef} className={`w-full ${isActive? 'h-[400px]': 'h-[130px]'} rounded-[10px] overflow-hidden relative bg-black`}>
        <div className='absolute top-2.5 left-2.5 text-white font-medium text-sm flex items-center rounded-[10px] px-2 py-1  bg-[#5f584680]' >
        <Icon className='mr-2.5' icon={icon} />
        <p >{room}</p>
        </div>
        <ReactPlayer
        url={videoUrl}
        muted={true}
        playing={true}
        width="100%"
        height="100%"
        />
        {isActive && (
            <div className='absolute bottom-2.5 w-full'>
            <div className='flex justify-between text-white mx-2.5 '>
                <div className='flex items-center'>
                    <button className=' p-2 rounded-full mr-1 bg-[#96969627]'>
                    <span className="relative flex h-2 w-2">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${runningStatus? 'bg-success':'bg-[#96969627]'}  `}></span>
                    <span className={`relative inline-flex rounded-full h-2 w-2 ${runningStatus? 'bg-success':'bg-[#979795a1]'} `}></span>
                    </span>
                        </button>
                    <div className=' px-2 py-1 rounded-[10px] font-medium text-sm bg-[#5f584661]'>07/31/2023 - 04:15 PM</div>
                </div>
                <button onClick={handleFullScreenClick} className=' p-2 rounded-full bg-[#5f584661]'><Icon icon={`${fullscreen? 'ic:sharp-fullscreen-exit':'ic:round-fullscreen'}`} /></button>
            </div>
            </div>
        )}
        </div>
    );
};

//  VideoScreen;