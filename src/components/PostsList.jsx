import { useState } from 'react';
import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";
import Modal from './Modal';

function PostsList({ isPosting, onStopPosting }) {


    // let modalContent;

    // if(modalIsVisible){
    //     <Modal onClose={hideModalHandler}>
    //             <NewPost
    //                 onBodyChange={bodyChangeHandler}
    //                 onAuthorChange={authorChangeHandler}
    //             />
    //         </Modal>
    // }
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost
                        // onBodyChange={bodyChangeHandler}
                        // onAuthorChange={authorChangeHandler}
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post key={post.body} author={post.author} body={post.body}
                        />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
        </>
    );
}

export default PostsList;
{/* <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Hernawan" body="aaa" /> */}