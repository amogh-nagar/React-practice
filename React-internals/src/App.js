import React, {useState, seCallback} from "react";
import DemoOutput from "./components/Demo/DemoOutput";
import "./App.css";
import Button from "./components/UI/Button/Button";
function App() {
  const [showparagraph, setshowparagraph] = useState(false);

  const toggleparagraph = useCallback(() => {
    setshowparagraph((prevshowparagraph) => !prevshowparagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showparagraph} />
      <Button onClick={toggleparagraph}>Toggle</Button>
    </div>
  );
}

export default App;
