import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import ContactForm from "../pages/ContactForm/ContactForm";
import Treatments from "../pages/Treatments/Treatments";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/treatments" element={<Treatments />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-form" element={<ContactForm />} />
    </Routes>
  );
};

export default AppRoutes;
