import { useState } from "react";
import treatments from "../Treatments/treatmentsData";
import {
  FormButton,
  Form,
  FormInput,
  FormParagraph,
  FormTextArea,
  FormTitle,
  TreatmentSelect,
} from "./ContactForm.styled";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Wiadomość wysłana");
        setFormData({
          name: "",
          email: "",
          phone: "",
          treatment: "",
          message: "",
        });
      } else {
        alert(
          "Błąd wysyłki. Spróbuj ponownie lub skontaktuj się telefonicznie"
        );
      }
    } catch (error) {
      console.error("Błąd:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Formularz kontaktowy</FormTitle>
      <FormParagraph>Wszystkie pola z "*" są wymagane</FormParagraph>

      <FormInput
        type="text"
        name="name"
        value={formData.name}
        placeholder="imię i nazwisko*"
        onChange={handleChange}
        required
      />

      <FormInput
        type="number"
        name="phone"
        value={formData.phone}
        placeholder="telefon kontaktowy*"
        onChange={handleChange}
        required
      />

      <FormInput
        type="text"
        name="email"
        value={formData.email}
        placeholder="adres email*"
        onChange={handleChange}
        required
      />

      <TreatmentSelect
        name="treatment"
        value={formData.treatment}
        onChange={handleChange}
        required
      >
        <option value="">Wybierz zabieg*</option>
        {treatments.map((treatment) => (
          <option key={treatment.id} value={treatment.name}>
            {treatment.name}
          </option>
        ))}
      </TreatmentSelect>

      <FormTextArea
        name="message"
        value={formData.message}
        rows="8"
        placeholder="tutaj możesz wpisać terminy, które Ci pasują"
        onChange={handleChange}
      />

      <FormButton type="submit">Wyślij</FormButton>
    </Form>
  );
};

export default ContactForm;
