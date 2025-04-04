import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 0;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 2px 2px 4px 2px ${({ theme }) => theme.colors.secondaryBackground};
`;

export const Logo = styled.img`
  width: 100px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 24px 0;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 600;
  list-style: none;
  margin: 0 40px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.textActive};
  }
`;
