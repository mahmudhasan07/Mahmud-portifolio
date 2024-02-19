import "./Project.css"
import project from "../../../public/projects.json"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project = () => {
    // console.log(project);

    useEffect(()=>{
        AOS.init()
    },[])

    return (
        <section data-aos="fade-down"
        // data-aos-offset="500"
        // data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
            className="bg-black h-full">
            <div>
                <span id="projects" className="lg:text-8xl md:text-7xl text-6xl text-gray-800 opacity-60 font-extrabold absolute ">Projects</span>
                <h1 className="lg:text-6xl md:text-5xl text-4xl text-center relative text-white font-bold lg:top-5 md:top-4 top-3">My <span className="text-blue-800">Projects</span></h1>
            </div>
            <div className="py-10">
                <div className=" flex justify-end mr-5">
                <select className="text-xl" name="" id="">
                <option value="default">Default</option>
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                </select>
                </div>
                <div>
                <div className="flex  flex-wrap gap-5 justify-center lg:my-10 my-5">
                    {
                        project.map((element,idx)=> <Card key={idx} id={idx} card={element} ></Card>)
                    }
                </div>
                </div>
            </div>
        </section>
    );
};

const Card=({card, id})=>{
    const navigate = useNavigate()
    const handleproject =()=>{
        navigate(`/projects/${card.projectNo}`)
    }
    return(
        <div data-aos="fade-right"
        // data-aos-offset="500"
        data-aos-easing="ease-in-sine"
        data-aos-delay={`${id*200+1000}`}
        data-aos-duration="1500" className="w-96 text-white  flex flex-col border p-3 rounded-xl lg:m-0 mx-3  ">
            <img id="projectimage" className="w-96 h-56 object-top object-cover" src={card.image} alt="" />
            <h1 className="my-2"><span className="font-semibold ">Name: </span>{card.name}</h1>
            <h1><span>Note: </span>{card.note}</h1>
            <div className="mt-auto">
            <button onClick={handleproject} className="button w-full mt-3">
                <span className="button-content">Details</span>
            </button>
            </div>
        </div>
    )

}

export default Project;