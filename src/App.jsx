import HeaderLeft from "./component/HeaderLeft";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />
        <main className="flex-[3]">
          <Home />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
