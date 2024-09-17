import { motion } from 'framer-motion';
import profile from '../assets/portfolio about me pic.png';

const About = () => {

    return ( 
        <motion.section
         id='about'
         initial={{y:100,opacity:0}}
         transition={{duration:.5}} 
         whileInView={{y:0,opacity:1}} 
         className="bg-white shadow-lg shadow-[#17106E20]  w-full flex justify-center  p-4">
            <div className="flex-1 flex md:flex-row flex-col  gap-8 md:gap-16 max-w-5xl w-full">
                
                <div className=" flex bg-indigo-500 lg:h-96 h-48 rounded-md md:aspect-square  ">
                    <div className=" bg-indigo-900 overflow-hidden flex justify-end flex-1 rounded-md translate-x-2 translate-y-2 ">
                        <img src={profile} className='max-h-full relative lg:left-12 left-8 ' alt="monzer avatar" />
                    </div>
                </div>

                <div className="flex-1">
                    <h3 className="font-mono text-3xl font-bold">About me</h3>
                    <p className="text-slate-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dicta debitis numquam a voluptatibus, atque, ad minima sunt, ab doloremque nobis error rerum facere iste itaque vero! Doloremque, ratione possimus.</p>
                </div>
            
            </div>
        </motion.section>
     );
}
 
export default About;            