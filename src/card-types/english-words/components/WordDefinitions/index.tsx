import React from 'react';
import styled from 'styled-components';

import { Subtitle } from '../styled/Subtitle';
import { GroupedList } from '../GroupedList';
import { DefinitionItem, IWordDefinitionItem } from './DefinitionItem';
import { mergeWordDefinitions, sortWordDefinitions } from './utils';

interface IWordDefinitionProps {
  word: string | Array<string>;
  items: Array<IWordDefinitionItem>;
  shouldShowExamples?: boolean;
  shouldHideWordKeys?: boolean;
  shouldLimitResults?: boolean;
  isVerbsOnly?: boolean;
}

export const WordDefinitions = (props: IWordDefinitionProps) => {
  const items = mergeWordDefinitions(props.items);
  const shouldShowExamples = !!props.shouldShowExamples;
  const shouldHideWordKeys = !!props.shouldHideWordKeys;
  const shouldLimitResults = !!props.shouldLimitResults;
  const isVerbsOnly = !!props.isVerbsOnly;

  return (
    <Container>
      <GroupedList
        groupBy={'partOfSpeech'}
        items={items}
        limitation={{ groupsOnly: [isVerbsOnly ? 'verb' : ''].filter(Boolean) }}
      >
        {(groupName, items) => (
          <PosGroup key={groupName}>
            <PartOfSpeech as={'div'}>
              {groupName}
            </PartOfSpeech>

            <GroupedList
              groupBy={'meaning'}
              items={items}
              limitation={{
                numVisibleGroups: shouldLimitResults ? 3 : null,
                numItemsInGroup: shouldLimitResults ? [5, 3, 3] : null,
              }}
            >
              {(groupName, items, { isOnlyGroup }) => (
                <MeaningGroup key={groupName}>
                  {!(isOnlyGroup && groupName === 'unknown') && (
                    <Subtitle>{groupName}</Subtitle>
                  )}
                  {sortWordDefinitions(items).map((it, idx) => (
                    <DefinitionItem
                      key={idx}
                      word={props.word}
                      item={it}
                      shouldShowExamples={shouldShowExamples}
                      shouldHideWordKeys={shouldHideWordKeys}
                    />
                  ))}
                </MeaningGroup>
              )}
            </GroupedList>
          </PosGroup>
        )}
      </GroupedList>
    </Container>
  );
};

const Container = styled.div`
`;

const PosGroup = styled.div`
  margin-bottom: 24px;
`;

const PartOfSpeech = styled.div`
  font-size: 20px;
  line-height: 32px;
  color: #ffbd37;
  text-decoration: white;
  font-style: italic;
`;

const MeaningGroup = styled.div`
  margin-top: 8px;
  margin-bottom: 24px;
  
  & > ${Subtitle} {
    text-transform: uppercase;
    text-decoration: underline;
    margin-bottom: 4px;
    color: #cacaca;
    font-weight: 600;
  }
`;
