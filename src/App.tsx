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
  interface Comment {
    name: string;
    message: string;
  }
  const initialComment: Comment = {
    name: "",
    message: "",
  };
  const [page, setPage] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [formInput, setFormInput] = useState<Comment>(initialComment);
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
    setComments((prev: Comment[]) => [...prev, formInput] as Comment[]);
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
    <div className="bg-cyberBase h-screen">
      <div className="flex flex-row w-full h-10 border-b-2 border-cyberSub py-1">
        <button name="titleButton" className="cursor-auto text-cyberSub px-3">
          網路攻防實習
        </button>
        <button
          name="aboutButton"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-cyberSub border-l-2 px-3"
          onClick={() => {
            setPage(0);
          }}
        >
          About
        </button>
        <button
          name="chatButton"
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-cyberSub border-l-2 px-3"
          onClick={() => {
            setPage(1);
          }}
        >
          Chat
        </button>
        <button
          name="nViewersButton"
          className="cursor-auto text-cyberSub border-l-2 px-3"
        >
          瀏覽人數: {nViewers}
        </button>
      </div>
      {page === 0 ? (
        <>
          <div className="flex flex-row w-full h-5/6 py-5 bg-cyberSub">
            <div className="pr-5 border-r-2 h-full w-1/5">
              <img src={myself} className=""></img>
            </div>

            <div className="pl-3 text-cyberBase">
              大家好，我是陳威儒，目前為臺灣大學電機系大四生。
            </div>
          </div>
          <div className="flex flex-row">
            <a
              href="https://vitejs.dev"
              target="_blank"
              className="px-6 pt-6 hover:animate-bounce"
            >
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a
              href="https://react.dev"
              target="_blank"
              className="px-6 pt-6 hover:animate-bounce"
            >
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-5/6 snap-y">
            <p className="text-cyberAccent">Write comments below</p>
            <form
              className="bg-cyberAccent w-full mx-3"
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
                className="w-2/3"
                value={formInput.message}
                placeholder="message"
                onChange={handleFormInputChange}
              />
              <input type="submit" value="Submit" className="self-end" />
            </form>
            {comments.map((comment, index) => (
              <div
                key={index}
                className="rounded-tl-lg bg-cyberSub mx-3 mt-3 min-h-20"
              >
                {comment.name === "" ? (
                  <p className="mx-2 border-b-2">unknown</p>
                ) : (
                  <p className="mx-2 border-b-2">{comment.name}</p>
                )}
                <p className="mx-2">{comment.message}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
