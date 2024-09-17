import SkillCard from "./SkillCard";
import gitHub from '../assets/circle.svg'
import sideArt from '../assets/sideArt.svg'
// import CssIcon from '../assets/Artboard 4.png'
// import JsIcon from '../assets/Artboard 4.png'
// import nodejs from '../assets/Artboard 4.png'
import line from '../assets/line.svg'
import { motion } from "framer-motion";
const Skills = () => {
    const skillList = [
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
        {name: "github" ,iconURL: gitHub},
    ]
    return ( 
        <section id="skills" className="flex w-full h-[600px] md:h-auto px-2 relative overflow-x-hidden-hidden items-center flex-col" >
            <div className="max-w-5xl w-full flex flex-col">
                <h3 className="text-3xl font-mono text-center pb-16">Skills</h3>
                <div className="flex flex-wrap lg:px-8 gap-4 justify-center">
                    {skillList.map((skill,index)=>
                    <motion.div 
                        
                        key={index}
                        initial = {{y:10+(30*index),x:0, opacity:0}}
                        transition={{type:'spring',duration:0.6}}
                        whileInView={{y:0,x:0, opacity:1}}
                    >
                        <SkillCard name ={skill.name} iconURL = {skill.iconURL}/>
                    </motion.div>)}
                </div>
            </div>
            <img src={sideArt} className="absolute w-48 -z-10 right-0 translate-y-56 translate-x-24  " />
            <img src={line} className=" w-36 translate-y-12 lg:translate-y-32 -z-10 self-start" />
        </section>
     );
}
 
export default Skills;