import { useState } from 'react'
import { liked, noliked }from '../../assets/images/buttons'

type TrackProps = {
    title: string
    like: boolean
    albumName: string
    cover: {
        default: string
    }
}

const PlaylistItem = ({ title, like, cover, albumName }: TrackProps) => {
    const [isLiked, setIsLiked] = useState(like)

    const handlerLike =() =>{
        setIsLiked(!isLiked)
    }


    return (
        <div className="music-container"> 
            <div className="music-content">
                <img src={cover.default} alt={title} className="music-cover" />
                <div className="music-name">
                    <h3>{title}</h3> {' '} - {' '} <h4>{albumName}</h4>
                </div>
                <button onClick={() => handlerLike()} className="button-like">
                    <img src={isLiked? liked:noliked} alt="" className="like"  />
                </button>
            </div>
        </div>
    )
}
export default PlaylistItem;