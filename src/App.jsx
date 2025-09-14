import HeaderLeft from "./components/HeaderLeft";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex min-h-screen w-full overflow-x-clip subpixel-antialiased bg-[#D9D9D7]">
      <HeaderLeft />
      <main className="flex-[3]">
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
