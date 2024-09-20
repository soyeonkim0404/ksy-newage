"use client";
import styled from "styled-components";
const BtnStyled = styled.button`
  border: 2px solid ${props => props.customColor};
  padding: 10px 30px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 500;
  color:${props => props.customColor};
  &:hover {
    background:${props => props.customColor};
    color:#fff;
  }
`;

export default function Btn({ text, onClick, customColor }) {
  return (
    <BtnStyled
      onClick={onClick}
      customColor={customColor}
    >
      {text}
    </BtnStyled>
  );
}
