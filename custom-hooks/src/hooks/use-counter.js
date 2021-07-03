import {useState, useEffect} from "react";

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    //   console.log("Useeffect")
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => {
      //   console.log("Clean up!");
      clearInterval(interval);
    };
  }, [forwards]);

  return counter;
};

export default useCounter;
