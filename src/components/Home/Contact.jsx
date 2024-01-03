import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
import { NavLink } from 'react-router-dom';
import facebook from "../../../public/icons/icons8-facebook-48.png"
import linkedin from "../../../public/icons/icons8-linkedin-48.png"
import whatsapp from "../../../public/icons/icons8-whatsapp-48.png"
import email from "../../../public/icons/icons8-email-48.png"
import github from "../../../public/icons/icons8-github-50.png"

const Contact = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_k66xk9s', 'template_kvkgfri', form.current, 'hBm6FCmTz2fLTfKOC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <section
            data-aos="fade-down"
            data-aos-duration="2000"
            className="bg-black lg:h-screen h-full">
            <span className='lg:text-8xl md:text-6xl text-4xl font-extrabold text-gray-800 opacity-60 absolute' id='contactme'>Contact Me</span>
            <h1 className='lg:text-6xl md:text-5xl text-3xl text-center z-50 text-white font-bold relative lg:top-6 md:top-3 top-1 lg:mb-10 mb-5'>Get <span className='text-blue-800'>In Touch</span></h1>
            <div className='flex flex-wrap justify-around'>
                <div className='lg:my-16 my-7 text-white lg:w-1/5 w-2/3 p-1'>
                    <h1 className='text-3xl font-bold uppercase'>Stay Connect with me</h1>
                    <p>Don't Shy to your thought with me. Get in touch with me to discuss new projects, creative ideas or opportunities.</p>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com/mahmudnirob.t' target='blank' >
                            <button className="facebook-button text-lg">
                                <img src={facebook} className="facebook-svgIcon" alt="" />
                            </button>
                        </a>
                        <a href='https://www.linkedin.com/in/mahmud-hasan-8873b221a' target='blank' >
                            <button className="linkedin-button text-lg">
                                <img src={linkedin} className="linkedin-svgIcon" alt="" />
                            </button>
                        </a>
                        <a href='https://github.com/mahmudhasan07' target='blank' >
                            <button className="github-button text-lg">
                                <img src={github} className="github-svgIcon bg-gray-400 rounded-full" alt="" />
                            </button>
                        </a>
                        <a href='https://wa.me/1625598782' target='blank' >
                            <button className="whatsapp-button text-lg">
                                <img src={whatsapp} className="whatsapp-svgIcon" alt="" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className=' lg:my-16 my-7 lg:w-2/5'>
                    <form ref={form} onSubmit={sendEmail}>
                        
                        <div className='flex flex-wrap justify-between p-1'>
                        <input className=' w-60 p-2 rounded-3xl' placeholder='Your Name' type="text" name="user_name" />
                        
                        <input className=' w-60 p-2 rounded-3xl' placeholder='Your Email' type="email" name="user_email" />
                        </div>
                        <br />
                        <textarea className=' w-full  h-36 p-2 rounded-3xl' placeholder='Your Message' name="message" />
                        <input className='btn' type="submit" value="Send" />
                    </form>
                </div>

            </div>

        </section>
    );
};

export default Contact;