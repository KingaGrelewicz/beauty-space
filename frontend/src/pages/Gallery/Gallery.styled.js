import styled from "styled-components";

export const GalleryTitle = styled.h2`
  font-size: 34px;
  margin: 12px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.buttonColor};
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  padding: 20px;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
