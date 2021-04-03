import React from 'react';
import styled, { css } from 'styled-components';
import groupBy from 'lodash/groupBy';

import { WordDialect, IWordMain } from '../../../preloaders/english/services/cambridge-dictionary/models';
import { Transcription } from './styled/Transcription';
import { Country } from './styled/Flag';
import { PronunciationAudio } from './PronunciationAudio';

interface ITranscription {
  dialect: Country;
  value: string;
  audioSrc?: string;
}

export interface ISizable {
  size: 'medium'|'large';
}

export interface IWordWithPronunciationProps extends IWordMain, Partial<ISizable> {
}

export const WordWithPronunciation = ({
  pronunciations,
  transcriptions,
  word,
  size = 'large',
}: IWordWithPronunciationProps) => {
  const dialects = Object.keys(transcriptions) as Array<WordDialect>;

  const dialectsData = dialects.reduce((acc: Partial<Record<WordDialect, ITranscription>>, item: WordDialect) => {
    acc[item] = {
      dialect: item,
      value: transcriptions[item] || '',
      audioSrc: pronunciations[item] || '',
    };
    return acc;
  }, {});

  const groupedDialects = groupBy(Object.values(dialectsData), 'value');

  return (
    <Container>
      <Title size={size}>
        {word}
      </Title>

      <TranscriptionsList size={size}>

        {Object.keys(groupedDialects).map((trans) => (
          <TranscriptionWrapper key={trans}>
            {groupedDialects[trans].map((transData) => (
              <PronunciationAudio
                key={transData!.dialect}
                src={transData!.audioSrc || ''}
                country={transData!.dialect}
              />
            ))}

            {!!trans && (
              <Transcription>
                {trans}
              </Transcription>
            )}
          </TranscriptionWrapper>
        ))}

      </TranscriptionsList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

WordWithPronunciation.Container = Container;

const size = (params: Record<ISizable['size'], any>) =>
  ({ size }: ISizable) => params[size];

const Title = styled.span<ISizable>`
  display: inline-block;
  margin-right: 8px;
  
  ${size({
    medium: css`
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
    `,
    large: css`
      font-size: 36px;
      line-height: 28px;
      font-weight: 600;
    `,
  })}
`;

const TranscriptionsList = styled.div<ISizable>`
  display: flex;
  
  ${size({
    medium: css`
      margin-top: 4px;
    `,
    large: css`
      margin-top: 24px;
    `,
  })}
`;

const TranscriptionWrapper = styled.div`
  display: flex;
  align-items: center;
  
  & > ${PronunciationAudio.Container} {
    align-self: center;
    margin-right: 4px;
  }

  & > ${Transcription} {
    margin: 0 16px 0 4px;
  }
`;
