import name from "./components/name";
import price from "./components/price";
import image from "./components/image";
import description from "./components/description";

import "./App.css";

function App() {
  return (
    <>
      <div className="card" style="width: 18rem;">
        <image />
        <name />
        <price />
        <description />
      </div>
      <h4> “Hello, there!”</h4>
    </>
  );
}

export default App;
