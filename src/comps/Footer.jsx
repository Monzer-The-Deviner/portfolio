import { motion } from "framer-motion";
import logo from "../assets/logo.png"
import {AiFillLinkedin,AiFillInstagram, AiFillTikTok} from 'react-icons/ai'
const Footer = () => {
    return ( 
       <footer className=" w-full h-32 rounded-2xl justify-center flex items-center bg-slate-900">
         <div className="flex px-4 flex-1 max-w-5xl w-full items-center justify-between">
            <img src={logo} className="h-8 brightness-[1000%]" />
            <div className="flex gap-4">
              <motion.a 
              href="https://www.tiktok.com"
              initial={{y:0}}
              whileInView={{y:[0,-10,0]}}
              transition={{delay:0.2,duration:0.4}}
              className='text-[#9e4ed3] relative '>
                <AiFillTikTok size={24} color="#fff"  />
              </motion.a>
              <motion.a 
              href="https://www.instagram.com"
              initial={{y:0}}
              whileInView={{y:[0,-10,0]}}
              transition={{delay:0.4,duration:0.4}}
              className='text-[#9e4ed3] relative '>
                <AiFillInstagram size={24} color="#fff"  />
              </motion.a>
              <motion.a 
              href="https://www.linkedin.com"
              initial={{y:0}}
              whileInView={{y:[0,-10,0]}}
              transition={{delay:0.6,duration:0.4}}
              className='text-[#9e4ed3] relative '>
                <AiFillLinkedin size={24} color="#fff"  />
              </motion.a>
            </div>
         </div>
       </footer>
     );
}
 
export default Footer;