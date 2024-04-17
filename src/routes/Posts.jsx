import PostsList from "../components/PostsList";
import { useState } from 'react';
import { Outlet } from "react-router-dom";

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHander() {
  //   setModalIsVisible(true);
  // }
  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  return (
    <>
      {/* <MainHeader onCreatePost={showModalHander} /> */}
      <Outlet />
      <main>
        <PostsList
          // isPosting={modalIsVisible}
          // onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default Posts;
