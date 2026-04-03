import Card from "./Components/Card/Card";
import "./App.css";
import Users from "./Components/Card/Users";
const App = () => {
    return(
        <div className="container">
            {Users.map((user) => (
                <Card name={user.username} description={user.description} cover-photo={user.coverPhoto} profile-photo={user.profilePhoto} likes={user.likes} posts={user.posts} views={user.views}/>
            ))}
        </div>
    )
}

export default App;