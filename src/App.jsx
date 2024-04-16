import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from 'react';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHander() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHander} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default App;
