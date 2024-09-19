import { useState } from 'react'
import portfolioPic from '../assets/vecteezy_website-presentation-with-smartphone-mockup_13097385.jpg'
import portfolioPic2 from '../assets/Artboard-4-opy.png'
import portfolioPic3 from '../assets/9ab84ae714d32afef91719f328483dec.jpg'
import portfolioPic4 from '../assets/bf33a96f96931c776d27b03ba3dd7ed5.jpg'
const Projects = () => {
    const projects = [
        {
            title:'portfolio',
            imgURL: portfolioPic,
            link:'#',
            summery: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illum voluptatibus molestiae nihil ipsa? Modi, natus unde necessitatibus minus corrupti quo harum assumenda" ,
            technologies:[]
        },
        {
            title:'portfolio',
            imgURL: portfolioPic2,
            link:'#',
            summery: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illum voluptatibus molestiae nihil ipsa? Modi, natus unde necessitatibus minus corrupti quo harum assumenda" ,
            technologies:[]
        },
        {
            title:'portfolio',
            imgURL: portfolioPic3,
            link:'#',
            summery: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illum voluptatibus molestiae nihil ipsa? Modi, natus unde necessitatibus minus corrupti quo harum assumenda" ,
            technologies:[]
        },
        {
            title:'portfolio',
            imgURL: portfolioPic4,
            link:'#',
            summery: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque illum voluptatibus molestiae nihil ipsa? Modi, natus unde necessitatibus minus corrupti quo harum assumenda" ,
            technologies:[]
        },
    ]
    const [selProject,setSelProject] = useState(projects[0])
    return ( 
        <section id='projects' className="w-full justify-center z-10 flex mt-16 p-2 shadow-[#17106E20] shadow-xl bg-[#F3F2FF]  ">
            <div className="max-w-5xl w-full flex-1 flex gap-x-8 gap-4 flex-col md:flex-row">
                <div className="grid flex-1 grid-cols-2 gap-2">
                    {projects.map((project,index)=>
                        <div key={index}
                         className="bg-cover flex p-4 items-end bg-center shadow-md min-h-40 rounded-md text-cyan-50"
                         style={{backgroundImage:`url(${project.imgURL})`}}
                         onClick={()=>setSelProject(projects[index])}
                         >
                            we are here
                        </div>
                    )}
                </div> 
                
                    <div className="justify-end overflow-hidden flex-col min-h-80  text-lg text-white rounded-lg flex bg-cover bg-center flex-1" style={{backgroundImage:`url(${selProject.imgURL})`}}>
                        <div className='flex flex-col p-4  gap-2  bg-gradient-to-t from-slate-950 to-transparent'>
                            <div className='text-whte font-semibold text-lg justify-between flex gap-4'> 
                                {selProject.title}
                                <div className='backdrop-blur-sm flex gap-4 p-2 bg-[#00000030]'>
                                    {['ts','git','sanity'].map((tech,i)=><span key={i}>{tech}</span>)}
                                </div>
                            </div>
                            <p className='text-sm'>{selProject.summery}</p>
                            <div className='text-whte flex gap-4'><div className='bg-white px-2 rounded-md text-slate-950'>visit</div> <div>details</div></div>
                        </div>
                    </div>

            </div>
        </section>
     );
}
 
export default Projects;