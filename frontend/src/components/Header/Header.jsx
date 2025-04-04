import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  LinkStyled,
  List,
  ListItem,
  Logo,
} from "./Header.styled";
import logo from "../../assets/bs-logo.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt="Logo salonu" />
      </Link>
      <List>
        <ListItem>
          <LinkStyled to="/">Strona główna</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/contact">Kontakt</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/treatments">Oferta</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/gallery">Galeria</LinkStyled>
        </ListItem>
        <ListItem>
          <LinkStyled to="/contact-form">Umów się</LinkStyled>
        </ListItem>
      </List>
    </HeaderWrapper>
  );
};

export default Header;
