import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import myself from "/myself.jpg";
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
  const [comments, setComments] = useState(
    /** @type {{name: string, message: string}[]} */ []
  );
  const [formInput, setFormInput] = useState({ name: "", message: "" });
  const [nViewers, setNViewers] = useState(0);
  /** @type {React.ChangeEventHandler<HTMLInputElement>} */
  const handleFormInputChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { name, value },
  }) => {
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /** @type {React.FormEventHandler<HTMLFormElement>} */
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    setComments((prev: never[]) => [...prev, formInput] as never[]);
    setFormInput({ name: "", message: "" });
    event.preventDefault();
  };
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    setNViewers(Math.ceil(initialCount + 1));
    localStorage.setItem("pageVisits", (initialCount + 0.5).toString());
  }, []);
  return (
    <div class="bg-cyberBase h-screen">
      <div
        name="menuFrame"
        class="flex flex-row w-full h-10 border-b-2 border-cyberSub py-1"
      >
        <button name="titleButton" class="cursor-auto text-cyberSub px-3">
          網路攻防實習
        </button>
        <button
          name="aboutButton"
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-cyberSub border-l-2 px-3"
          onClick={() => {
            setPage(0);
          }}
        >
          About
        </button>
        <button
          name="chatButton"
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-cyberSub border-l-2 px-3"
          onClick={() => {
            setPage(1);
          }}
        >
          Chat
        </button>
        <button
          name="nViewersButton"
          class="cursor-auto text-cyberSub border-l-2 px-3"
        >
          瀏覽人數: {nViewers}
        </button>
      </div>
      {page === 0 ? (
        <>
          <div
            name="aboutContentFrame"
            class="flex flex-row w-full h-5/6 py-5 bg-cyberSub"
          >
            <div name="picFrame" class="pr-5 border-r-2 h-full w-1/5">
              <img src={myself} class=""></img>
            </div>

            <div name="bioFrame" class="pl-3 text-cyberBase">
              大家好，我是陳威儒，目前為臺灣大學電機系大四生。
            </div>
          </div>
          <div name="toolFrame" class="flex flex-row">
            <a
              href="https://vitejs.dev"
              target="_blank"
              class="px-6 pt-6 hover:animate-bounce"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              class="px-6 pt-6 hover:animate-bounce"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </>
      ) : (
        <>
          <div class="w-full h-5/6 snap-y">
            <p class="text-cyberAccent">Write comments below</p>
            <form
              class="bg-cyberAccent w-full mx-3"
              onSubmit={handleFormSubmit}
            >
              <input
                name="name"
                value={formInput.name}
                placeholder="name"
                onChange={handleFormInputChange}
              />
              <input
                name="message"
                class="w-2/3"
                value={formInput.message}
                placeholder="message"
                onChange={handleFormInputChange}
              />
              <input type="submit" value="Submit" class="self-end" />
            </form>
            {comments.map((comment, index) => (
              <div
                key={index}
                class="rounded-tl-lg bg-cyberSub mx-3 mt-3 min-h-20"
              >
                {comment.name === "" ? (
                  <p class="mx-2 border-b-2">unknown</p>
                ) : (
                  <p class="mx-2 border-b-2">{comment.name}</p>
                )}
                <p class="mx-2">{comment.message}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
