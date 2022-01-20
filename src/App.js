import { useState } from "react";
// import Content from "./Content";
// import Content2 from "./Content2";
import Content3 from "./Content3";


function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show)
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={handleClick}>Toogle</button>
      {show && <Content3 />}
    </div>
  );
}

export default App;
