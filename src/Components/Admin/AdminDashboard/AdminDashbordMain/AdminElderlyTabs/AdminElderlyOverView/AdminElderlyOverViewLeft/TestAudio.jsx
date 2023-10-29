import React, { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import WaveSurfer from 'wavesurfer.js';

const TestAudio = ({item}) => {
    const [playing, setPlaying] = useState(false);
    const waveformRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const url =
          "https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3";
    
        const waveformInstance = WaveSurfer.create({
          barWidth: 3,
          barRadius: 3,
          barGap: 2,
          barMinHeight: 1,
          cursorWidth: 1,
          container: "#waveform",
          backend: "WebAudio",
          height: 30,
          progressColor: "#0070F0",
          responsive: true,
          waveColor: "#C4C4C4",
          cursorColor: "transparent",
        });
    
        waveformInstance.load(url);
        waveformInstance.on("finish", () => {
            setPlaying(false);
          });
        waveformRef.current = waveformInstance;
    
        return () => {
          waveformInstance.destroy();
        };
      }, []);
    
      const handlePlay = () => {
        setPlaying(!playing);
        waveformRef.current.playPause();
      };

  return (
  <div className="flex items-center justify-between gap-5 mt-2">
    <div className='w-[40px]'>
      <button className=" w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center" onClick={handlePlay}>
        {playing ? <span className=' text-[18px] rotate-90'>=</span> : <Icon icon="bi:play-fill" className="text-[15px]"/>}
      </button>
    </div>
        <div className='w-full h-[30px]'>
          <div id="waveform" className='w-full h-[30px]'>
            
            </div>
        </div>
        <div className='flex items-center gap-1'>
                    <div className='w-[5px] h-[5px] bg-gray-400 rounded-full'></div>
                    <div className='text-[12px] font-[600] text-[#3D4854]'>
                        0.25
                    </div>
                </div>
    <audio ref={trackRef} src="" />
  </div>
  )
}

export default TestAudio