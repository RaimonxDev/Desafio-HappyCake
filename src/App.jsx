import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "../src/views/Home";
import Contacto from "../src/views/Contacto";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Navbar />
      <section className="container-lg items-center flex align-items-center  mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
