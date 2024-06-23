import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>Rectangle Creator</h1>
      <p>
        <label>
          Number of rectangles:{" "}
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value, 10) || 0)}
          />
        </label>
      </p>
      <button
        type="button"
        onClick={() => {
          parent.postMessage({ pluginMessage: { count } }, "*");
        }}
      >
        Create
      </button>
    </div>
  );
}

export default App;
