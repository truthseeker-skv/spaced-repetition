import styled from 'styled-components';

export const Transcription = styled.span`
  position: relative;
  display: inline;
  font-style: italic;
  font-size: 16px;
  letter-spacing: 1px;
  color: #888888;

  &::before {
    content: '[';
  }
  &::after {
    content: ']';
  }
`;
