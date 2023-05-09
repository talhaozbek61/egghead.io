import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import Main from "./componenets/Main";


function App() {
  const changeMode = () => {
    const htmltag    = document.querySelector("html")

    if(htmltag.classList.value === "dark"){
        htmltag.classList.remove("dark")
    }else{
      htmltag.classList.add("dark")
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <div className="max-w-7xl mx-auto mt-5">
      <button onClick={changeMode} className="bg-blue-300 rounded p-1 text-white">Change Theme</button>
      </div>
    </div>
  );
}

export default App;
