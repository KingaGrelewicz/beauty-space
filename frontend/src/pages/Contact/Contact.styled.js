import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiInstagramFill } from "react-icons/ri";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

export const Map = styled.div`
  padding: 24px;
`;

export const ContactData = styled.div``;

export const ContactTitle = styled.h2`
  font-size: 34px;
  margin: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const AddressContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 12px;
  align-items: center;
  font-size: 20px;
  margin: 12px;
  padding: 0;
`;

export const ContactParagraph = styled.p`
  margin: 0;
`;
  
export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.buttonColor};
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.textActive};
  }
`;

export const IgIcon = styled(RiInstagramFill)`
  font-size: 24px;
`;
