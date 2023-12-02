The following is code. You can further tinker by forking [this link](https://codesandbox.io/p/sandbox/simpler-timer-79r62r?file=%2Fsrc%2FApp.js%3A1%2C1-22%2C1&utm_source=dotnew) 

```
import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <h1>Timer</h1>
      <div>{time}</div>
      {time % 5 === 0 && <p>{time} is divisible by 5</p>}
    </div>
  );
}
```
