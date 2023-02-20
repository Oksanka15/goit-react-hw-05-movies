import styled from "styled-components";

export const Details = styled.div`
padding: 40px;
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 25px`

export const DetailsOverview = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 15px;`

export const TextDetails = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 1.25;
margin-bottom: 15px;`;

export const ButtonGoBack = styled.button`
flex-shrink: 0;
  border-radius: 20%;
  width: 80px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  background-color: #8FBC8F;
  border: 1px solid #2F4F4F;
  cursor: pointer;
  &:hover,
  &:focus {

    color: #2F4F4F;
    background-color: #ecf5f0;
  }
`;

export const PosterDetails = styled.img`
  width: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 5px;
`;