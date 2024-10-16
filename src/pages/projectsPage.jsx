import { useEffect, useState } from "react";
import { getprojects, urlFor } from "../../sanityClinet";
import Loading from "../comps/Loading";
import { AiOutlineLink } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProjectsPage = () => {
  const [projects, setprojects] = useState([]);
  const [error, seterror] = useState(false);
  const [isloading, setisloading] = useState(true);
  useEffect(()=>{
    getprojects()
      .then(data=>{
        setprojects(data)
        setisloading(false)
      })
      .catch(error=>{
        seterror(error)
        setisloading(false)
      })
  },[])
  return (
    <>
    <div className="translate-y-16 max-w-5xl  w-full">


    </div>



      {projects.map((project,i)=> 
        <div key={i}  className="flex flex-col md:flex-row gap-2 min-h-56 rounded-md overflow-hidden bg-white shadow-md">
            <div className="flex-1 p-2 items-end bg-slate-500 min-h-32 bg-cover flex" style={{backgroundImage:`url(${urlFor(project.image)})`}}>
            <div className='text-whte flex gap-4'>
              <a href={''} className='bg-white flex gap-2 px-2 rounded-md items-center text-slate-950'><AiOutlineLink size={22} /> Visit</a>
            
             <Link className="border-2 border-white px-2 rounded-md text-white p-1" to={`project/${project.slug}`}>Details</Link></div>
            </div>
            <div className="flex-1 flex-col p-2"> 
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm">{project.shortDescription}</p>
            </div>
        </div>
      )}
      <Loading loading={isloading} error={error} />
    </>
  )
}

export default ProjectsPage