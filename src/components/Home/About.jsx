import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "./Aboutme.css"
import myimage from "../../../public/image/myimage.png"
import { FaBookOpenReader } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import CV from '../../../public/Mahmud-hasan-CV2.pdf';

const About = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    console.log(CV);
    return (

        <section data-aos="fade-down"
            // data-aos-offset="500"
            // data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" bg-black  h-full ">
            <p className="lg:text-8xl text-5xl text-gray-800 opacity-60 absolute lg:left-1/3 left-1/4  mx-auto font-extrabold " > About Me</p>
            <h1 className='lg:text-6xl text-4xl text-white text-center lg:top-5 top-2 relative font-bold'>My <span className='text-blue-800 '>Profile</span></h1>
            <div className='flex justify-around flex-wrap lg:my-12 my-5'>
                <div data-aos="fade-right"
                    // data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000" className=''>
                    <img src={myimage} id='myimage2' className='lg:w-72 w-60' alt="" />
                    {/* <span className='bg-gray-700 w-60 p-52 absolute top-28 opacity-15  rounded-full'>   </span> */}
                </div>
                <div data-aos="fade-right"
                    // data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000" className=' text-white my-auto'>
                    <h1 className='text-5xl italic text-center font-semibold'>Personal InFo</h1>
                    <hr className='w-3/4 mx-auto border-2 mt-1 rounded-xl' />
                    <div className='mt-5'>
                        <h1 className='text-lg mb-2'><span className='font-semibold'>Name: </span>Mahmud Hasan Siddique</h1>
                        <h1 className='text-lg mb-2'><span className='font-semibold'>Occupation: </span>Student</h1>
                        <h1 className='text-lg mb-2'><span className='font-semibold'>Freelancer: </span>Available</h1>
                        <h1 className='text-lg mb-2'><span className='font-semibold'>Nationality: </span>Bangladeshi</h1>
                        <h1 className='text-lg mb-2'><span className='font-semibold'>Language: </span>Bangla, English, Hindi(only listening understand)</h1>
                        <div>
                            <a href={CV} download={`Mahmud-CV`} rel='Mahmud CV'>
                                <button className='button z-40 flex gap-1 mt-5 border'>
                                    <span className="button-content text-lg  my-auto">Download CV</span>
                                    <span><MdFileDownload className=' root text-2xl top-3'></MdFileDownload></span>
                                </button>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>

            {/*//* Skill section */}
            <div className='text-white lg:my-12 ny-6'>
                <h1 className='text-4xl font-semibold text-center '>My <span className='text-blue-800'>Skills</span></h1>
                <hr className='w-1/3 text-center mx-auto border-2 my-6' />
                <div className='flex flex-wrap gap-5  justify-around'>
                    <div data-aos="fade-right"
                        // data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="500"
                        data-aos-duration="1200" className='boxdiv border w-60  p-3 text-lg rounded-xl'>
                        <h1 className='text-xl font-semibold'>Front-End Developer</h1>
                        <p>* HTML</p>
                        <p>* CSS</p>
                        <p>* JavaScript</p>

                    </div>
                    <div data-aos="fade-right"
                        // data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="600"
                        data-aos-duration="1200" className='boxdiv border w-60 p-3 text-lg rounded-xl'>
                        <h1 className='text-xl font-semibold'>MERN Stack Developer</h1>
                        <p>* React</p>
                        <p>* Node.js</p>
                        <p>* Express.js</p>
                        <p>* MongoDB</p>
                    </div>
                    <div data-aos="fade-right"
                        // data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="700"
                        data-aos-duration="1200" className='boxdiv border w-60  p-3 text-lg  rounded-xl'>
                        <h1 className='text-xl font-semibold'>FrameWork</h1>
                        <p>* Material-UI</p>
                        <p>* Bootstrap</p>
                        <p>* Tailwind</p>
                        <p>* Firebase</p>
                        <p>* Framer Motion</p>
                    </div>
                </div>
            </div>

            {/* // Experience & Education section*/}
            <div className='text-white'>
                <h1 className='text-4xl text-center font-semibold my-5 text-white'>Experience & <span className='text-blue-800'>Education</span></h1>
                <div className='flex flex-wrap py-5 justify-around'>
                    <div data-aos="fade-right"
                        // data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="500"
                        data-aos-duration="1200" className='lg:w-2/5 border-2 space-y-5'>
                        <div className='flex gap-10 '>
                            <FaBusinessTime className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBusinessTime>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>Front End Developer - <span>Freelancer</span></h1>
                                <span>Year: 2022- Present</span>
                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBusinessTime className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBusinessTime>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>MERN Developer <span>Freelancer</span></h1>
                                <p>Year: 2023- Present</p>
                                {/* <p className='text-wrap'>• Conducted debugging and testing procedures to optimize application performance and user experience.</p> */}
                            </div>
                        </div>
                    </div>
                    <hr className=' lg:flex hidden h-auto border border-blue-700' />
                    <div data-aos="fade-right"
                        // data-aos-offset="500"
                        data-aos-easing="ease-in-sine"
                        data-aos-delay="600"
                        data-aos-duration="1200" className='space-y-5  mx-1 lg:w-2/5'>
                        <div className='flex gap-10'>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>B.Sc Computer Science and Engineering </h1>
                                <span>Year: 2020-Present,</span><span> National University,</span>
                                <span> Result: 3.14</span>
                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>HSC</h1>
                                <span>Year: 2018, </span> <span> Board: Dhaka, </span> <span> Result: 3.92</span>
                            </div>
                        </div>
                        <div className='flex gap-10 '>
                            <FaBookOpenReader className='text-3xl z-40 bg-blue-800 text-white p-1 rounded-full'></FaBookOpenReader>
                            <hr className='border opacity-15 h-20 -ml-14' />
                            <div className='text-lg'>
                                <h1>SSC</h1>
                                <span>Year: 2016, Board: Dhaka, Result: 5.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;