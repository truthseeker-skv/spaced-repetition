import styled from 'styled-components';

export const IrregularVerbLabel = styled.div`
  position: relative;
  padding: 8px 0;

  &::after {
    content: 'Irregular verb';
    font-size: 12px;
    font-style: italic;
    color: #acacac;
  }
`;

