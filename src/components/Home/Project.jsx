import "./Project.css"
import project from "../../../public/projects.json"
import { useNavigate } from "react-router-dom";
const Project = () => {
    console.log(project);
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
        data-aos-duration="1500" className="w-96 border p-3 rounded-xl lg:m-0 mx-3  ">
            <img className="w-96" src={card.image1} alt="" />
            <h1 className=""><span>Name: </span>{card.name}</h1>
            <h1><span>Note: </span>{card.note}</h1>
            <button onClick={handleproject} className="button w-full my-2">
                <span className="button-content">Details</span>
            </button>
        </div>
    )

}

export default Project;