/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { getprojects, urlFor } from '../../sanityClinet'
import { Link } from 'react-router-dom';
import { AiOutlineLink, AiOutlineMore } from 'react-icons/ai';
import Loading from './Loading';

const Projects = () => {
    const [projects, setprojects] = useState([]);
    const [selProject,setSelProject] = useState(projects[0])
    const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  useEffect(()=>{
      setloading(true)
      seterror(false)
      getprojects()
        .then(data =>{ 
            setprojects(data)
            
            setloading(false)
            })
        .catch(error=>{
                setloading(false)
                seterror(error)
            })
      
        console.log(projects)
    },[])
    useEffect(()=>setSelProject(projects[0]),[projects])
    return ( 
        <section id='projects' className="w-full min-h-60 justify-center z-10 flex mt-16 p-2 shadow-[#17106E20] shadow-xl bg-[#F3F2FF]  ">
            
            <Loading error={error} loading={loading} />
           {!(loading||error)&& <div className="max-w-5xl w-full flex-1 flex gap-x-8 gap-4 flex-col md:flex-row">
                <div className="grid flex-1 relative grid-cols-2 gap-2">
                    {projects.map((project,index)=>
                        <div key={index}
                         className="bg-cover flex p-4 items-end bg-center shadow-md min-h-40 max-h-52 rounded-md text-cyan-50"
                         style={{backgroundImage:`url(${project?urlFor(project?.image):''})`}}
                         onClick={()=>setSelProject(projects[index])}
                         >{project?.name}</div>
                    )}
                <Link title='more projects' to={'/projects'}
                 className='absolute right-0 self-center'>
                    <AiOutlineMore className='  rotate-90 rounded-full p-2 shadow-md bg-white ' size={30}/>
                </Link>
                </div> 
                    <div className="justify-end overflow-hidden flex-col min-h-80  text-lg text-white rounded-lg flex bg-cover bg-center flex-1" style={{backgroundImage:`url(${selProject?urlFor(selProject?.image):''})`}}>
                        <div className='flex flex-col p-4  gap-2  bg-gradient-to-t from-slate-950 to-transparent'>
                            <div className='text-whte font-semibold text-lg justify-between flex gap-4'> 
                                {selProject?.name}
                                <div className='backdrop-blur-sm flex gap-4 rounded-md p-2 bg-[#00000030]'>
                                    {selProject?.tech.map((tech,i)=>
                                    <div className='flex size-10' key={i}>
                                        <img src={urlFor(tech.logo)} className='flex-1' />
                                    </div>)}
                                    
                                </div>
                            </div>
                            <p className='text-sm'>{selProject?.shortDescription}</p>
                            <div className='text-whte flex gap-4'><a href={selProject?.url||''} className='bg-white flex gap-2 px-2 rounded-md items-center text-slate-950'><AiOutlineLink size={22} /> visit</a> <Link to={`project/${selProject?.slug}`}>details</Link></div>
                        </div>
                    </div>

            </div>}
            
            
        </section>
     );
}
 
export default Projects;