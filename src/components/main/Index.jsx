import { useRef, useState } from 'react'
import NavBar from '../NavBar/Index.jsx'
import Socials from '../Socials/Index.jsx'
import Art from '../art/Index.jsx'
import AboutMe from '../AboutMe/Index.jsx'
import '../../App.css'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Main(){

    const [sonaType, setSonaType] = useState('gon')
    const mainRef = useRef(null)

    gsap.set(mainRef.current, { autoAlpha: 0 });

    gsap.to(mainRef.current, {
      autoAlpha: 1,
      duration: 1.5,
      scrollTrigger: 
          {
          trigger: mainRef.current,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
          }
      });
        
    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', sonaType)
    }, [sonaType])

    return (
            <div ref={mainRef} className='main-container'>
                
                <NavBar currentSona={sonaType} sonaUpdate={setSonaType} />
                
                <div className='content-container'>
                    <h2>ABOUT</h2>
                    <AboutMe sonaUpdate={sonaType}></AboutMe>
                    <h2 id='art' >ART</h2>
                    <Art sonaUpdate={sonaType}></Art>
                    <Socials></Socials>
                
                </div>
            </div>
    )
}