import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Footer } from "../src/components/Footer/Footer";
import { Logout } from "./pages/Logout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;