import { motion } from 'framer-motion';
import profile from '../assets/AboutMe.png';
import decoration2 from '../assets/Asset 3.svg'
const About = () => {

    return ( 
        <>
        <img src={decoration2} className ="absolute top-[130vh] lg:top-[80vh] -translate-x-[120%] lg:-translate-x-[100%] brightness-125 w-[250px] lg:w-[400px]"  alt="" />
        <motion.section
         id='about'
         initial={{y:100,opacity:0}}
         transition={{duration:.5}} 
         whileInView={{y:0,opacity:1}} 
         className="bg-white shadow-lg relative shadow-[#17106E20] z-20 w-full flex justify-center  p-4">
            <div className="flex-1 flex md:flex-row flex-col  gap-8 md:gap-16 max-w-5xl w-full">
                
                <div className=" flex bg-indigo-500 lg:h-96 h-60  rounded-md md:aspect-square  ">
                    <div className=" bg-indigo-900 overflow-hidden flex-1 bg-center bg-no-repeat bg-contain rounded-md translate-x-2 translate-y-2 " style={{backgroundImage:`url(${profile})`}}>
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="font-mono text-4xl my-4 font-bold">About me</h3>
                    <p className="text-slate-700 text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta debitis numquam a voluptatibus, atque, ad minima sunt, ab doloremque nobis error rerum facere iste itaque vero! Doloremque, ratione possimus.</p>
                </div>
            
            </div>
        </motion.section>
        </>
     );
}
 
export default About;            