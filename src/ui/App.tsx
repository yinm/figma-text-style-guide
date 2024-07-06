import { Button } from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button
        onClick={() => {
          parent.postMessage({ pluginMessage: {} }, "*");
        }}
      >
        Create
      </Button>
    </div>
  );
}

export default App;
