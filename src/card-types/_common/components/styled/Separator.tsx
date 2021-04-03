import styled from 'styled-components';

export const Separator = styled.div`
  position: relative;
  padding: 32px 0;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    width: 100%;
    border-bottom: 1px dashed #4a4a4a;
    box-sizing: border-box;
  }
`;
