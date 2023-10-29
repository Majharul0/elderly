import { Icon } from '@iconify/react';
import React, { useRef, useEffect, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioSurfer = () => {
    const wavesurferRef = useRef(null);
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: wavesurferRef.current,
            barWidth: 3,
            barRadius: 3,
            barGap: 2,
            barMinHeight: 1,
            cursorWidth: 1,
            // container: "#waveform",
            backend: "WebAudio",
            height: 30,
            progressColor: "#0070F0",
            responsive: true,
            waveColor: "#C4C4C4",
            cursorColor: "transparent",
        });

        wavesurfer.load('https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3'); // Replace with the actual audio file URL

        // Attach event listeners to update Wavesurfer's play state
        audioRef.current.addEventListener('play', () => {
            setIsPlaying(true);
            wavesurfer.play();
        });
        audioRef.current.addEventListener('pause', () => {
            setIsPlaying(false);
            wavesurfer.pause();
        });
        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
            wavesurfer.stop();
            audioRef.current.currentTime = 0;
        });

        return () => {
            wavesurfer.destroy();
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
    };

    return (
        <div>
            <div className='flex gap-2 mt-3 mb-3 items-center'>
                <div className='w-[40px]'>
                    <button className=" w-[25px] h-[25px] bg-primary rounded-full text-white flex items-center justify-center" onClick={togglePlay}>
                        {isPlaying ? <span className=' text-[18px] rotate-90'>=</span> : <Icon icon="bi:play-fill" className="text-[15px]" />}
                    </button>
                </div>
                <div className='w-full h-[30px]'>
                    <div ref={wavesurferRef} />
                </div>
                <div className='flex items-center gap-1'>
                    <div className='w-[5px] h-[5px] bg-gray-400 rounded-full'></div>
                    <div className='text-[12px] font-[600] text-[#3D4854]'>
                        0.25
                    </div>
                </div>
            </div>



            <audio ref={audioRef} src="https://api.twilio.com//2010-04-01/Accounts/AC25aa00521bfac6d667f13fec086072df/Recordings/RE6d44bc34911342ce03d6ad290b66580c.mp3" />

        </div>
    );
};

export default AudioSurfer;
