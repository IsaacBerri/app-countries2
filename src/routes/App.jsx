import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from "./../components/Navbar";
import Home from "../pages/Home";
import CreateCountry from "../pages/CreateCountry";
import ManageCountry from "../pages/ManageCountry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-country" element={<CreateCountry />} />
        <Route path="/manage-country" element={<ManageCountry />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
