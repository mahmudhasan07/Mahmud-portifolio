import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import banner from "../../../public/image/image1-transformed.png"
import banner2 from "../../../public/image/image2-transformed.jpeg"
import myimage from "../../../public/image/myimage22.jpg"
import { FaGithub } from "react-icons/fa";

import "./Home.css"
import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";


const Home = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <section
            data-aos="fade-down"
            // data-aos-offset="500"
            // data-aos-easing="ease-out-cubic"
            data-aos-duration="2500"
            className="lg:pb-0 " style={{ backgroundImage: `url(${banner2})`, backgroundAttachment: "fixed", backgroundPosition: "center", backgroundSize: "cover" }}>
            {/* <Helmet>
                <meta name="keywords" content="this is a mahmud profile"></meta>
                <link rel="icon" type="image/x-icon" href="https://i.ibb.co/c64L2sJ/432044893-1400818297981947-8508382469092611163-n.jpg"/>
                <title>Hasan</title>
            </Helmet> */}
            <div className="flex h-screen justify-around lg:gap-0 gap-2 flex-wrap overflow-hidden" >
                <div
                    data-aos="fade-right"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000"
                    className="my-auto  " id="imagediv">
                    {/* <FaGithub className="border "></FaGithub> */}
                    <img id="image1" className=" lg:w-96 lg:h-96 md:w-80 md:h-80 w-64 h-64 rounded-full object-cover " src={myimage} alt="" />
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="1000"
                    data-aos-duration="3000"
                    className="lg:my-auto h-fit">
                    <div>
                        <p className="lg:text-6xl  md:text-5xl justify-center  text-3xl mb-5 font-extrabold flex gap-2 text-white">
                            - I'm  <p id="name" className="">Mahmud Hasan</p><span className="" id="zoom">.</span>
                        </p>

                    </div>
                    <div className="lg:text-5xl italic lg:mx-auto md:mx-auto mx-auto md:text-4xl text-2xl font-extrabold  relative lg:w-11/12 md:w-2/3 w-9/12">
                        <p id="text-slide" className="">MERN STACK DEVELOPER</p><p id="field" className="">MERN STACK DEVELOPER</p>
                    </div>
                    <div className="lg:w-[700px] text-center   text-white  lg:text-lg md:text-lg mx-1 my-5">
                        <p className="p-2">I specialize in developing dynamic digital experiences with the MERN stack, combining innovation with functionality to cater to a technology-forward world.</p>
                    </div>
                    {/* <div>
                        <button id="aboutbtn"  >More About Me</button>
                        
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Home;