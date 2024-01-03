import { NavLink, useParams } from "react-router-dom";
import "./ProjectInfo.css"
import project from "../../../public/projects.json"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectInfo = () => {
    const id = useParams()
    // console.log(id);
    const details = project.find(element => element.projectNo == id.id)
    // console.log(details);
    useEffect(() => {
        AOS.init()
    }, [])
    const [image, setimage] = useState(details?.image1)
    return (
        <section
            data-aos="fade-down"
            data-aos-duration="2000"
            className="bg-black ">
            <div>
                <span className="text-8xl text-gray-800 absolute opacity-60 font-extrabold" id="info">Project Info</span>
                <h1 className="text-6xl font-bold text-center lg:top-5 relative">Project <span className="text-blue-800">Details</span></h1>
            </div>
            <div className="my-20 flex flex-wrap justify-around">
                <div data-aos="fade-right"
                    // data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="500"
                    data-aos-duration="1200" className="w-2/5  relative">
                    <img src={image} alt="" />
                    <div className="flex justify-around  my-2 ">
                        <img onClick={() => setimage(details.image1)} className="w-24 " src={details.image1} alt="" />
                        <img onClick={() => setimage(details.image2)} className="w-24 " src={details.image2} alt="" />
                        <img onClick={() => setimage(details.image3)} className="w-24 " src={details.image3} alt="" />
                        <img onClick={() => setimage(details.image4)} className="w-24 " src={details.image4} alt="" />
                    </div>
                </div>
                <div data-aos="fade-left"
                    // data-aos-offset="500"
                    data-aos-easing="ease-in-sine"
                    data-aos-delay="500"
                    data-aos-duration="1200" className="w-2/5">
                    <h1 className="text-3xl font-semibold mb-1">{details.name}</h1>
                    <p>{details.note}</p>
                    <div className="flex gap-3 my-2">
                        <NavLink target="_blank" to={`${details.live_link}`}><p className="text-lg text-blue-800 underline font-bold">Live-Link </p></NavLink>
                        <NavLink target="_blank" to={`${details.client_github_link}`}><p className="text-lg text-blue-800 underline font-bold">GitHub-Client-Link </p></NavLink>
                        <NavLink target="_blank" to={`${details.sever_github_link}`}><p className="text-lg text-blue-800 underline font-bold">GitHub-Server-Link </p></NavLink>
                    </div>
                    <div className="flex gap-2 my-3">
                        <h1 className="text-xl my-auto">Technology Used: </h1>
                        {
                            details.technologyUse.map((element, idx) => <img className=" w-10 h-10" key={idx} src={element}></img>)
                        }
                    </div>
                </div>
            </div>

            {/* //* Features section */}
            <div>
                <h1 className="text-4xl font-semibold mb-5">Features Section</h1>
                <ul className="">
                    {
                        details.features.map((element, idx) => <li className="pb-2" key={idx}>{idx + 1}. {element}</li>)
                    }
                </ul>
            </div>
        </section>
    );
};

export default ProjectInfo;