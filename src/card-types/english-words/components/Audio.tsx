import React from 'react';
import styled from 'styled-components';

export interface IAudioProps {
  src: string;
}

export const Audio = (props: IAudioProps) => {
  return (
    <Container>
      <InnerAudio controls>
        <source src={props.src}/>
      </InnerAudio>
    </Container>
  );
};

const Container = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  background: white;
`;

Audio.Container = Container;

interface IInnerAudioProps {
  isLocalEnv?: boolean;
}

const InnerAudio = styled.audio<IInnerAudioProps>`
  position: absolute;
  left: -14px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  min-width: 150px;
`;
