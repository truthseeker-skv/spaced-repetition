import React from 'react';
import styled, { css } from 'styled-components';

import { Flag, IFlagProps } from './styled/Flag';
import { Audio, IAudioProps } from './Audio';

interface IPronunciationAudio extends IAudioProps, IFlagProps {
}

export const PronunciationAudio = ({ src, country }: IPronunciationAudio) => {
  return (
    <Container isDisabled={!src}>
      <Audio src={src} />
      <Flag country={country} />
    </Container>
  );
};

interface IContainerProps {
  isDisabled?: boolean;
}

const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: auto;
  margin-right: 2px;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 1px 2px 1px #222;
  overflow: hidden;
  
  ${({ isDisabled }) => isDisabled && css`
    filter: grayscale(80%);
    box-shadow: none;
    cursor: default;
  `};
  
  & > ${Audio.Container} {
    opacity: 0;
    height: 14px;
    z-index: 1;
  }
  
  & > ${Flag} {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

PronunciationAudio.Container = Container;
