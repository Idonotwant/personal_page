import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // return (
  //   <>
  //     <div>
  //       <a href="https://vitejs.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
  const [page, setPage] = useState(0);
  return (
    <div className="bg-white dark:bg-slate-800">
      <div>
        <p className="dark:text-white">test</p>

        <button onClick={() => setPage((page) => (page === 0 ? 1 : 0))}>
          {page === 0 ? (
            <div className="dark:text-white">about</div>
          ) : (
            <div className="dark:text-white">chat</div>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
