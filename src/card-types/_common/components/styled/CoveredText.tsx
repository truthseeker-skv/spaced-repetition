import React from 'react';
import styled, { css } from 'styled-components';

interface ICoveredText {
  children: JSX.Element | Array<JSX.Element>;
  isStretched?: boolean;
}

export const CoveredText = ({ children, isStretched }: ICoveredText) => {
  const id = Math.random().toString();

  return (
    <Container>
      <Input id={id} type="checkbox" />
      <Label htmlFor={id} isStretched={isStretched}>
        {children}
      </Label>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  outline: none;
  z-index: 0;
`;

CoveredText.Container = Container;

interface ILabelProps {
  isStretched?: boolean;
}

const Label = styled.label<ILabelProps>`
  position: relative;
  height: fit-content;
  width: 100%;
  
  ${props => props.isStretched && css`
    display: block;
  `}
  
  &::after {
    position: absolute;
    content: '';
    left: -2px;
    right: -2px;
    top: -4px;
    bottom: -4px;
    border-radius: 4px;
    background: #444444;
    cursor: pointer;
    z-index: 1;
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${Label}::after {
    display: none;
  }
`;
