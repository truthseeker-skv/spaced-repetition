import React from 'react';
import styled from 'styled-components';

import { TextWithKeys } from '../../../_common/components/TextWithKeys';
import { DefinitionLine } from './DefinitionLine';
import { cleanExample } from './utils';

export interface IWordDefinitionItem {
  meaning: string;
  definition: string;
  langLevel: string | null;
  tag: string | null;
  examples: Array<string>;
  partOfSpeech: string;
  meaningOrder: number;
  definitionOrder: number;
}

interface IDefinitionItemProps {
  word: string | Array<string>;
  item: IWordDefinitionItem;
  shouldShowExamples: boolean;
  shouldHideWordKeys: boolean;
}

export const DefinitionItem = ({ item, word, shouldShowExamples, shouldHideWordKeys }: IDefinitionItemProps) => {
  return (
    <Container>
      <DefinitionLine
        word={word}
        item={item}
        shouldHideWordKeys={shouldHideWordKeys}
        shouldShowExamples={shouldShowExamples}
      />
      {shouldShowExamples && !!item.examples.length && (
        <ExamplesList>
          {item.examples.map((ex, idx) => (
            <Example key={idx}>
              <TextWithKeys targetKey={word} shouldHideKeys={shouldHideWordKeys}>
                {cleanExample(ex)}
              </TextWithKeys>
            </Example>
          ))}
        </ExamplesList>
      )}
    </Container>
  );
};

const Container = styled.div``;

const ExamplesList = styled.ul`
  padding: 0 0 0 16px !important;
  margin: 4px 0 16px 32px !important;
  border-left: 2px solid #444444;
`;

const Example = styled.li`
  position: relative;
  padding: 0 0 0 8px;
  margin: 0;
  list-style: none;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  font-style: italic;
  
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '-  ';
  }
`;
