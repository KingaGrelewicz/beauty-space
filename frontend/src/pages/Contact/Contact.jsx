import { SlLocationPin } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

import {
  Container,
  Map,
  ContactData,
  ContactTitle,
  AddressContainer,
  StyledLink,
  IgIcon,
  ContactParagraph,
} from "./Contact.styled";

const Contact = () => {
  return (
    <>
      <ContactTitle>Kontakt</ContactTitle>
      <Container>
        <Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2493.1130570424443!2d16.62832407611599!3d51.32744032383471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f9b594b16af6b%3A0x65f72a24a67fe66d!2sTadeusza%20Ko%C5%9Bciuszki%2017B%2C%2056-100%20Wo%C5%82%C3%B3w!5e0!3m2!1spl!2spl!4v1743785698331!5m2!1spl!2spl"
            width="650"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Map>
        <ContactData>
          <AddressContainer>
            <BsFillTelephoneFill aria-label="Telefon" />
            <ContactParagraph>123456789</ContactParagraph>
          </AddressContainer>

          <AddressContainer>
            <SlLocationPin aria-label="Adres" />
            <ContactParagraph>
              Kościuszki 17B, Wołów
              <br />
              Wejście przez salon Fryzjersko-kosmetyczny MK.
            </ContactParagraph>
          </AddressContainer>

          <AddressContainer>
            <FaArrowRight aria-label="Formularz kontaktowy" />
            <StyledLink to="/contact-form">Przejdź do formularza</StyledLink>
          </AddressContainer>

          <AddressContainer>
            <IgIcon />
            <StyledLink
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Obseruj mnie na Instagramie 🥰
            </StyledLink>
          </AddressContainer>
        </ContactData>
      </Container>
    </>
  );
};

export default Contact;
