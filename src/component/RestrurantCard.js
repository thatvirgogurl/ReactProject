import {IMG_CDN_LINK} from '../config'
export const RestrauntCard=({name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
     
        return (
                <div className="card">
                <img src={IMG_CDN_LINK+cloudinaryImageId}></img>
                <h4>{name}</h4>
                <h5>{cuisines.join(' , ')}</h5>
                <h5>{lastMileTravelString}</h5>
                </div>
        )
}