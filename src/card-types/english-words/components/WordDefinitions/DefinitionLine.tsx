import React from 'react';
import styled from 'styled-components';

import { TextWithKeys } from '../../../_common/components/TextWithKeys';
import { LangLevel } from '../styled/LangLevel';
import { Subtitle } from '../styled/Subtitle';
import { IWordDefinitionItem } from './DefinitionItem';

interface IDefinitionLineProps {
  word: string | Array<string>;
  item: IWordDefinitionItem;
  shouldHideWordKeys: boolean;
  shouldShowExamples: boolean;
}

export const DefinitionLine = ({ item, word, shouldHideWordKeys }: IDefinitionLineProps) => {
  return (
    <Container>
      {!!item.langLevel && (
        <LangLevel>
          {item.langLevel}
        </LangLevel>
      )}
      {!!item.tag && (
        <Subtitle>{`[${item.tag}]`}</Subtitle>
      )}
      <TextWithKeys targetKey={word} shouldHideKeys={shouldHideWordKeys}>
        {item.definition}
      </TextWithKeys>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  position: relative;
  padding-left: 32px;
  margin-bottom: 8px;
  line-height: 22px;
  font-size: 18px;

  &::before {
    position: absolute;
    left: 8px;
    top: 1px;
    content: '➠ ';
    font-size: 14px;
    color: #5a5a5a;
    clear: both;
  }
  
  ${LangLevel} {
    top: -2px;
    margin-right: 4px;
  }

  & > ${Subtitle} {
    bottom: 2px;
    margin-right: 8px;
  }
`;
