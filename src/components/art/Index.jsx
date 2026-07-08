import "./Art.css"
import { artGallery } from "./ArtGalery";

export default function Art({sonaUpdate}){



    artGallery.map(art => {
        
    });

    return (
        <>
        <div className="art-container">
            {artGallery.map(art => {
                if (art.sona.includes(sonaUpdate))
                return(
                <div key={art.id} className="artist-container">
                    <img src={art.src} alt={art.alt}></img>
                    <a href={art.href}>{art.artist}</a>
                </div>)
                })
            }
            
        </div>
        </>
    )
}