import './AboutMe.css'
import { aboutMe } from './About'
import { useState } from 'react'

export default function AboutMe({sonaUpdate}){
    const currentSona = aboutMe.find(sona => sona.sona === sonaUpdate);

    return(
        <>
                {aboutMe.map(currentSona => 
                    {
                        if (sonaUpdate == currentSona.sona)
                            {
                                return (
                                <div key={currentSona.key} id='#about' className="about-container">
                                    <p>{currentSona.text}</p>
                                    <img src={currentSona.image} alt={currentSona.alt}></img>
                                </div>
                                )
                            }
                    } ) 
                }
        </>
    )
}