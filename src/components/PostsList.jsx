import Post from "./Post";
import classes from './PostsList.module.css';

function PostsList(){
    return <ul className = {classes.posts}>
        <Post author="Yuda" body ="React.js"/>
        <Post author="Hernawan" body="aaa" />
    </ul>
}

export default PostsList;