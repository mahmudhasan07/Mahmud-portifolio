import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div data-aos="fade-down" 
        data-aos-offset="500"
        data-aos-easing="ease-in-sine" 
        className="h-screen bg-yellow-600">
                <h1 className="text-6xl font-bold text-center">About Me</h1>
            </div>
    );
};

export default Skills;