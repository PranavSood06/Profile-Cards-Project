import "./Card.css";
import {
    RiInstagramLine,
    RiThreadsLine,
    RiTwitterXLine,
    RiUserFollowLine
} from "@remixicon/react";
const Card = () => {
    return (
        <div className="parent">
            <div className="top">
                <button>+</button>
                <img id="cover" src="https://images.unsplash.com/photo-1596387451750-f7bfb51461ef?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cover Photo" />
                <img id="profile" src="https://images.pexels.com/photos/6748783/pexels-photo-6748783.jpeg" alt="Profile Photo" />
            </div>
            <div className="middle">
                <h2>Noah Thompson</h2>
                <p>Product Designer who focuses on simplicity and usability.</p>
            </div>
            <div className="bottom">
                <div className="likes">
                    <h2 className="tag">72.8K</h2>
                    <p className="number">Likes</p>
                </div>
                <div className="posts">
                    <h2 className="tag">85</h2>
                    <p className="number">Posts</p>
                </div>
                <div className="views">
                    <h2 className="tag">90K</h2>
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

