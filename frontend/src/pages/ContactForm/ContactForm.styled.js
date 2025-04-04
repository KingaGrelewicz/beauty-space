import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 20px;
  grid-gap: 14px;
`;

export const FormTitle = styled.h2`
  font-size: 34px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const FormParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  font-style: italic;
`;

export const FormInput = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  box-shadow: 2px 2px 3px 0px rgba(66, 68, 90, 0.5);
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;

export const TreatmentSelect = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  box-shadow: 2px 2px 3px 0px rgba(66, 68, 90, 0.5);
  font-size: 16px;
`;

export const FormTextArea = styled.textarea`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primaryTextColor};
  box-shadow: 2px 2px 3px 0px rgba(66, 68, 90, 0.5);
  font-size: 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primaryTextColor};
  }
`;

export const FormButton = styled.button`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  background: ${({ theme }) => theme.colors.buttonColor};
  box-shadow: 2px 2px 3px 0px rgba(66, 68, 90, 0.5);
  border-radius: 5px;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 14px 0;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.1);
  }

  &:active {
    filter: brightness(115%);
  }
`;
