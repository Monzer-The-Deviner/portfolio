/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = ({nav,cta}) => {
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
        <header  className={`${hide} duration-150 w-full top-0 bg-white ${Shadow} flex fixed px-4 z-50 justify-center`}>
            <div className="flex justify-between max-w-5xl w-full">
            <img src="../assets/logo.png" alt="logo" />

            <ul className="flex items-center lg:gap-6 gap-4 py-2">
                {nav.map((element,index)=>
                ( <li key={index}>
                    <a href={`#${element}`} 
                    className={cta==element?'cta-btn':''}
                     onClick={handleScrollTo}>
                        {element}
                    </a>
                </li>)
            )}
                <li><Link>CV</Link></li>
            </ul>

            </div>
        </header>
     );
}
 
export default Header;