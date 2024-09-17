import { motion } from "framer-motion";
const Contact = () => {
    return ( 
        <section className="flex w-full justify-center z-10">
            <motion.div 
            initial={{x:300,opacity:0}}
            whileInView={{x:0,opacity:1}}
            className=" w-full flex max-w-5xl justify-end">
                <form className="shadow-[#17106E20] rounded-xl text-[#131339] shadow-xl w-96 p-4 bg-[#F3F2FF] flex gap-2 flex-col">
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="you name" className="bg-[#DDDCEF] p-1 rounded-md placeholder:text-[#8E8CD5]" id="name" />
                    <label htmlFor="name">Email:</label>
                    <input type="text" className="bg-[#DDDCEF] p-1 rounded-md placeholder:text-[#8E8CD5]"  id="email" placeholder="your Email" />
                    <label htmlFor="details">details</label>
                    <textarea type="text" id="details" className="bg-[#DDDCEF] p-1 rounded-md placeholder:text-[#8E8CD5]"  placeholder="details"/>
                    <button className="cta-btn">contact</button>
                </form>
            </motion.div>
        </section>
     );
}
 
export default Contact;