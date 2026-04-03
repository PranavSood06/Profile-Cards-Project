import "./Card.css";

import {
    RiInstagramLine,
    RiThreadsLine,
    RiTwitterXLine
} from "@remixicon/react";
const Card = (props) => {
    return (
        <div className="parent">
            <div className="top">
                <button>+</button>
                <img id="cover" src={props["cover-photo"]} alt="Cover Photo" />
                <img id="profile" src={props["profile-photo"]} alt="Profile Photo" />
            </div>
            <div className="middle">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            <div className="bottom">
                <div className="likes">
                    <h2 className="tag">{props.likes}</h2>
                    <p className="number">Likes</p>
                </div>
                <div className="posts">
                    <h2 className="tag">{props.posts}</h2>
                    <p className="number">Posts</p>
                </div>
                <div className="views">
                    <h2 className="tag">{props.views}</h2>
                    <p className="number">Views</p>
                </div>
            </div>
            <div className="foot">
                <RiInstagramLine/>
                <RiThreadsLine/>
                <RiTwitterXLine/>
            </div>
        </div>
    )
}

export default Card;

