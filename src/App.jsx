import React, { useRef } from 'react'
import Row1 from './components/Row1'
import Row2 from './components/Row2'
import Row3 from './components/Row3';

function App() {
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);
  const bgMusicRef = useRef(new Audio("/forever.m4a"));

  const scrollToRow2 = () => {
    bgMusicRef.current.loop = true;
    bgMusicRef.current.play();
    row2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

   const scrollToRow3 = () => {
    row3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div >
      <Row1 onScrollToRow2={scrollToRow2} />
      <div ref={row2Ref}>
        <Row2 onScrollToRow3={scrollToRow3} bgMusicRef={bgMusicRef} />
      </div>
      <div ref={row3Ref}>
        <Row3 bgMusicRef={bgMusicRef} />
      </div>
     
    </div>
  )
}

export default App