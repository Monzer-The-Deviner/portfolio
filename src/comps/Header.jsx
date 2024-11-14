/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/favicon.png"
import menu from "../assets/menu.svg"
const Header = ({nav,cta}) => {
    const [visible,setvisible] = useState(false)
    const [hide, setHide] = useState(false);
    const [Shadow, setShadow] = useState(false);
    let lastScrollPos = scrollY

    //show and hide header whilw scrolling
            addEventListener('scroll',()=>{
                setHide((scrollY>lastScrollPos)?'-translate-y-[100%]':'translate-y-0');
                lastScrollPos = scrollY
                setShadow(scrollY>50?'shadow-lg':'')
            })

    //scrooling to section
        const handleScrollTo = (e)=>{
            e.preventDefault()
            const targetId =e.target.getAttribute('href').substring(1)
            console.log(targetId);
            const selectedElemnt = document.getElementById(targetId)
                scrollTo({
                    top:selectedElemnt.offsetTop,
                    behavior:'smooth'
                })
                console.log('scrolling');
            }
            
            
    return ( 
        <header  className={`${hide} duration-150 items-center w-full top-0 bg-white ${Shadow} flex fixed px-4 z-50 justify-center`}>
            <div className="flex justify-between max-w-5xl w-full">
            <img src={logo} className = 'h-10' alt="logo" />
            <button 
            onClick={()=>setvisible(prev=>!prev)}
            className='btn lg:invisible'><img src={menu} className=' flex-1 w-8' alt="" /></button>
                <nav className={`nav ${visible?'visible':'invisible lg:visible'}`}>
                    <Link to={"/"}>Home</Link>
                    <Link to={'/projects'}>Gallary</Link>
                    {nav.map((element,index)=>
                    ( <li key={index}>
                        <a href={`#${element}`} 
                        className={cta==element?'cta-btn':''}
                         onClick={handleScrollTo}>
                            {element}
                        </a>
                    </li>)
                )} 

                </nav>

            </div>
        </header>
     );
}
 
export default Header;