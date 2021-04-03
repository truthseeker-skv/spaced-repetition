import React from 'react';

import { DottedText } from './styled/DottedText';
import { HighlightedText } from './styled/HighlightedText';

interface ITextWithKeys {
  targetKey: string | Array<string>;
  children: string;
  shouldHideKeys?: boolean;
}

export const TextWithKeys = (props: ITextWithKeys) => {
  const text = props.children;
  const targetKeys: Array<string> = Array.isArray(props.targetKey) ? props.targetKey : [props.targetKey];
  const shouldHideKeys = props.shouldHideKeys ?? false;

  const matches = text.matchAll(new RegExp(targetKeys.join('|'), 'gi'));
  let lastIndex = 0;

  const items = Array.from(matches).reduce((acc: Array<JSX.Element | string>, it) => {
    acc.push(text.slice(lastIndex, it.index));
    lastIndex = it.index! + it[0].length;
    acc.push(
      shouldHideKeys
        ? <DottedText />
        : <HighlightedText>{text.slice(it.index, lastIndex)}</HighlightedText>
    );

    return acc;
  }, []);

  items.push(text.slice(lastIndex, text.length));

  return <>{React.Children.toArray(items)}</>;
};
