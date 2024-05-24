import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-2 rounded-3xl">
          <button
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
          >
            grey
          </button>
          <button
            className="px-4 py-1 rounded-full outline-none text-white shadow-lg"
            style={{ backgroundColor: "Green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
