import SkillCard from "./SkillCard";
import sideArt from '../assets/sideArt.svg'
import line from '../assets/line.svg'
import { motion } from "framer-motion";
import { useEffect } from "react";
import { getTech } from "../../sanityClinet";
import { useState } from "react";
const Skills = () => {
    const [tech, setTech] = useState([]);
    useEffect(()=>{
        getTech().then(data=>setTech(data))
    },[])
    return ( 
        <section id="skills" className="flex w-full min-h-[600px] md:h-auto px-2 z-10 relative overflow-x-hidden-hidden items-center flex-col" >
            <div className="max-w-5xl w-full flex flex-col">
                <h3 className="text-3xl font-mono text-center pb-16">Skills</h3>
                <div className="flex flex-wrap lg:px-8 gap-4 justify-center">
                    {tech.map((skill,index)=>
                    <motion.div 
                        
                        key={index}
                        initial = {{y:10+(30*index),x:0, opacity:0}}
                        transition={{type:'spring',duration:0.6}}
                        whileInView={{y:0,x:0, opacity:1}}
                    >
                        <SkillCard name ={skill.name} logo = {skill.logo}/>
                    </motion.div>)}
                </div>
            </div>
            <img src={sideArt} className="absolute w-48 right-0 -z-10 -translate-y-56 translate-x-24  " />
            <img src={line} className=" w-36 translate-y-40 lg:translate-y-32 self-start" />
        </section>
     );
}
 
export default Skills;