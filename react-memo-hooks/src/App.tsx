import { memo, useState } from "react";
import "./App.css";

interface ChildComponentProps {
  count: number;
}

// Memoized childComponent with Typescript type annotation
const ChildComponent = memo(({ count }: ChildComponentProps) => {
  console.log("Rendering ChildComponent");
  return <div>Count: {count}</div>;
});

function App() {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <>
      <h1>React Memo Hook</h1>
      <div className="card">
        <ChildComponent count={count} />
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
