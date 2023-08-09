import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  gap: 5rem;
  margin: 1rem;
`;
export const MainTitle = styled.h1`
  font-size: 4rem;
  color: #dc143c;
`;
export const MainCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #6495ed;
`;
export const CardImage = styled.img`
  width: 25rem;
`;

export const MainCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 3rem;
  margin: 1rem;
  font-size: 2rem;
  color: #000000;
`;

export const MainCardTitle = styled.h2`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 2.5rem;
`;

export const MainCardSpecialText = styled.p`
  font-size: 4rem;
  color: #ffd700;
`;
export const MainCardTextRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
`;
export const MainFooter = styled.div``;
export const MainFooterTitle = styled.h3`
  font-size: 4rem;
  color: #dc143c;
`;
export const MainProductRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 70rem;
  height: 15rem;
  overflow-x: scroll;
  margin: 1rem;
`;

export const ProductImages = styled.img`
  width: 10rem;
  margin: 1rem;
`;
