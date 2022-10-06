import { useState } from "react";
import Card from "./components/Card";
import Button from "./components/Button";
import cardImages from "./models/cardImages";
import symbols from "./models/symbols";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [currentPic, setCurrentPic] = useState(cardImages[count]);

  const changeCount = () => {
    console.log("CurrentCount:", count);

    setCount(count + 1);
    // change current count

    setCurrentPic(cardImages[count]);
    // reassign image based on counter
  };

  const reverseCount = () => {
    console.log("CurrentCount:", count);

    setCount(count - 1);
    // change current count

    setCurrentPic(cardImages[count]);
    // reassign image based on counter
  };
  return (
    <div className="App">
      <Card currentCount={count} images={cardImages[count]} />
      <Button picToggler={reverseCount} symbols={symbols.left} />
      <Button picToggler={changeCount} symbols={symbols.right} />
    </div>
  );
}

export default App;