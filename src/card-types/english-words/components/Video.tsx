import React from 'react';
import styled, { css } from 'styled-components';

import { isDesktop } from '../../../anki/utils/device';
import { TextWithKeys } from '../../_common/components/TextWithKeys';

interface IVideoContextProps {
  word: string | Array<string>;
  title: string;
  phraseEn: string;
  phraseRu: string;
  fileName: string;
}

export const VideoContext = (props: IVideoContextProps) => {
  const handlePhrase = (phrase: string) => {
    return phrase.replace(/[*{}]/gmi, '');
  };

  return (
    <Container>
      <Title>
        {props.title}
      </Title>
      <Subtitle>
        <TextWithKeys targetKey={props.word}>
          {handlePhrase(props.phraseEn)}
        </TextWithKeys>
      </Subtitle>
      <Subtitle isRus>
        {handlePhrase(props.phraseRu)}
      </Subtitle>

      {!isDesktop() && (
        <video
          src={props.fileName}
          controls
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  padding: 24px 36px;
  margin: 8px 0 24px;
  border: 1px solid #292929;
  border-left: 2px solid #828282;
  border-radius: 4px;
  background: rgba(24, 24, 24, 0.2);
  
  & video {
    max-width: 100% !important;
    width: 100% !important;
    margin-top: 16px;
    outline: none !important;
  }
`;

const Title = styled.h4`
  margin: 0 0 24px !important;
  color: rgba(256, 256, 256, 0.7) !important;
  text-decoration: underline !important;
  font-weight: bold !important;
`;

interface ISubtitleProps {
  isRus?: boolean;
}

const Subtitle = styled.div<ISubtitleProps>`
  position: relative;
  margin-bottom: 8px;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  
  ${props => props.isRus && css`
    color: #ffdc95;
    font-size: 14px;
  `}
  
  &::before {
    position: absolute;
    left: -8px;
    content: '- ';
    color: #acacac;
  }
`;

// const InnerVideo = styled.video`
//   max-width: 100% !important;
//   width: 100% !important;
//   outline: none !important;
//   margin-top: 16px;
// `;
