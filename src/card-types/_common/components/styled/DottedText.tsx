import styled from 'styled-components';

export const DottedText = styled.span`
  position: relative;
  
  &::after {
    content: '…';
    color: #d6d6d6;
    background: #444444;
    border-radius: 4px;
    padding: 0 4px;
  }
`
