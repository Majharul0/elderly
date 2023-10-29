import { Icon } from '@iconify/react';
import React, { useEffect, useRef, useState } from 'react'

const AdminElderlyOverViewLeftCallAudio = ({item}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);
  
    useEffect(() => {
        const handleTimeUpdate = () => {
          setCurrentTime(audioRef?.current?.currentTime);
        };
    
        const handleAudioEnded = () => {
          setIsPlaying(false);
          setCurrentTime(0);
        };
    
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('ended', handleAudioEnded);
    
        // return () => {
        //   audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
        //   audioRef.current.removeEventListener('ended', handleAudioEnded);
        // };
      }, [audioRef?.current?.duration]);
    
      const togglePlay = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      };
  
    const formatTime = (timeInSeconds) => {
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = Math.floor(timeInSeconds % 60);
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

  return (
    <div className="flex items-center justify-between gap-5 mt-2">
      <div className='w-[40px]'>
        <button className=" w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center" onClick={togglePlay}>
          {isPlaying ? <span className=' text-[18px] rotate-90'>=</span> : <Icon icon="bi:play-fill" className="text-[15px]"/>}
        </button>
      </div>
      <div className="flex items-center gap-2 w-full">
        <progress
          className="w-full h-2 bg-primary text-primary"
          max={audioRef?.current?.duration}
          value={currentTime}
        />
        <div className='w-[5px] h-[5px] bg-gray-400 rounded-full'></div>
        <div className="">
            {formatTime(audioRef?.current?.duration ? audioRef?.current?.duration: 28)}
        </div>
      </div>
      <audio
        ref={audioRef}
        src={item.audio}
      />
    </div>
  )
}

export default AdminElderlyOverViewLeftCallAudio