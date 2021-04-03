import React from 'react';
import * as ReactDOM from 'react-dom';

import { selectWord } from '../../preloaders/english/services/selectors';
import { CardContainer } from '../_common/components/CardContainer';
import { CardInput } from '../_common/components/CardInput';
import { CardSide } from '../_common/components/styled/CardSide';
import { useStorage } from '../_common/hooks/useStorage';
import { Frequency } from './components/Frequency';
import { IrregularVerbLabel } from './components/styled/IrregularVerbLabel';
import { WithThumbnail } from './components/WithThumbnail';
import { SideHeader } from './components/styled/SideHeader';
import { renderWordDefinitions } from './components/definitionsList';

export const FrontSide = (): JSX.Element => {
  const W = selectWord(window.CARD_DATA);
  const state = useStorage(W.word);

  return (
    <CardContainer>
      <CardSide>
        <SideHeader>
          {!!W.frequency && (
            <Frequency freq={W.frequency} />
          )}
          {!!W.verbFormsArray.length && (
            <IrregularVerbLabel />
          )}
        </SideHeader>

        {!!W.thumbnailSrc && (
          <WithThumbnail src={W.thumbnailSrc} />
        )}

        {renderWordDefinitions(W, {
          shouldLimitResults: true,
          shouldHideWordKeys: true,
        })}

        <CardInput onChange={state.onChangeValue} />
      </CardSide>
    </CardContainer>
  );
}

ReactDOM.render(<FrontSide />, document.getElementById('card'));
