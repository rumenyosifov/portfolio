import Navbar from "./components/Navbar/Navbar";
import './App.scss'
import Hero from "./containers/Hero/Hero";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        {/* <About /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
