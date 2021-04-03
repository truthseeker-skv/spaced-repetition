import React from 'react';

import styled from 'styled-components';

export interface IWithThumbnailProps {
  src?: string;
  children?: React.ReactNode;
}

export const WithThumbnail = ({ src, children }: IWithThumbnailProps) => {
  return (
    <Container>
      {!!src && (
        <WordThumbnail src={src} />
      )}
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: start;
  }
`;

const WordThumbnail = styled.img`
  max-width: 140px;
  max-height: 140px;
  width: auto;
  height: auto;
  margin-right: 32px;
  border-radius: 4px;

  @media (max-width: 480px) {
    max-width: unset;
    max-height: unset;
    width: 100%;
    margin-right: 0;
    margin-bottom: 24px;
  }
`;
