import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Alimentos from "./pages/Alimentos"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/alimentos" element={<Alimentos />}> </Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App
