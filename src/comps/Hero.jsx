/* eslint-disable react/no-unescaped-entities */
// import heroBanner from '../assets/heroBanner.svg'
import { motion } from 'framer-motion';
import selfpic from '../assets/heroimg.png'
import decor from '../assets/Asset 4.svg'

const Hero = () => {


        const handleScrollTo = (id)=>{
            const selectedElemnt = document.getElementById(id)
                scrollTo({
                    top:selectedElemnt.offsetTop - 30,
                    behavior:'smooth'
                })
                console.log('scrolling');
        }
    return ( 
        <section id='hero' className='min-h-[90vh] items-start pt-8 gap-4 px-4 md:px-8  relative overflow-hidden flex w-full justify-center' >
                <img src={decor} className ="absolute -top-8 left-80 brightness-125 w-[500px]"  alt="" />
                
                <div className=' flex gap-4 flex-1 flex-col   lg:flex-row justify-between max-w-5xl w-full'>
                        <div className='pt-16 gap-8 relative  flex-1 flex flex-col'>
                            <div>
                               <h1 className='text-3xl mb-4 font-sans text-center lg:text-start text-[#18133b]'>hey my name is Munzer</h1>
                               <h1 className='text-4xl  text-center lg:text-start font-bold text-[#13103a]'>
                                    and I'm in
                                     <div className='flex my-2 lg:justify-start justify-center'>
                                        L
                                        <motion.span initial={{y:0}} whileInView={{y:[0,-10,0]}} transition={{delay:0.2,duration:0.4}} className='text-[#9e4ed3] relative '>O</motion.span>
                                        <motion.span initial={{y:0}} whileInView={{y:[0,-10,0]}} transition={{delay:0.4,duration:0.4}} className='text-[#9e4ed3]'>O</motion.span>
                                        <motion.span initial={{y:0}} whileInView={{y:[0,-10,0]}} transition={{delay:0.6,duration:0.4}} className='text-[#9e4ed3]'>O</motion.span>
                                        <motion.span initial={{y:0}} whileInView={{y:[0,-10,0]}} transition={{delay:0.8,duration:0.4}} className='text-[#9e4ed3]'>O</motion.span>
                                        <motion.span initial={{y:0}} whileInView={{y:[0,-10,0]}} transition={{delay:1,duration:0.4}} className='text-[#9e4ed3]'>O</motion.span>
                                        VE
                                    </div>
                                     with UIs
                                </h1>
                             </div>
                             <div className='flex w-full gap-4 justify-center lg:justify-start rounded-md bg-transparent'>
                                {/* <button className='border-4 mt-8 text-lg flex-1 lg:flex-grow-0 lg:min-w-fit border-purple-800 text-purple-800 font-semibold py-2 px-4 rounded-md'> Download CV</button> */}
                                <motion.button
                                 onClick={()=>handleScrollTo('projects')}
                                 initial={{y:0,rotate:0}}
                                 whileHover={{y:[0,-10,-10,-10,-10,-10,-10,0],rotate:[0,5,-5,5,-5,0]}}
                                 className='cta-btn py-2 px-10 lg:px-4 rounded-md '>
                                     My Work
                                </motion.button>
                             </div>
                        </div>
                        <div className='flex  pt-8 items-end justify-center lg:justify-end'>
                            <img src={selfpic} className='lg:max-w-xl w-[450px] max-w-md  z-10 '/>
    
                        </div>

            </div>
            
        </section>
     );
}
 
export default Hero;