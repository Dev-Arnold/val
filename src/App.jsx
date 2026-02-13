import React, { useRef } from 'react'
import Row1 from './components/Row1'
import Row2 from './components/Row2'
import Row3 from './components/Row3';

function App() {
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  const scrollToRow2 = () => {
    row2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

   const scrollToRow3 = () => {
    row3Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" hidden md:block">
      <Row1 onScrollToRow2={scrollToRow2} />
      <div ref={row2Ref}>
        <Row2 onScrollToRow3={scrollToRow3}/>
      </div>
      <div ref={row3Ref}>
        <Row3 />
      </div>
     
    </div>
  )
}

export default App