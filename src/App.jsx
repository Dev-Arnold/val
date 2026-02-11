import React, { useRef } from 'react'
import Row1 from './components/Row1'
import Row2 from './components/Row2'

function App() {
  const row2Ref = useRef(null);

  const scrollToRow2 = () => {
    row2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" hidden md:block">
      <Row1 onScrollToRow2={scrollToRow2} />
      <div ref={row2Ref}>
        <Row2 />
      </div>
    </div>
  )
}

export default App