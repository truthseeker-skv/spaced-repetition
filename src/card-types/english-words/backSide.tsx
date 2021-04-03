import React from 'react';
import * as ReactDOM from 'react-dom';

import { EVerbForms } from '../../preloaders/english/services/cambridge-dictionary/models';
import { selectWord } from '../../preloaders/english/services/selectors';
import { CardContainer } from '../_common/components/CardContainer';
import { CardInput } from '../_common/components/CardInput';
import { Separator } from '../_common/components/styled/Separator';
import { CardSide } from '../_common/components/styled/CardSide';
import { useStorage } from '../_common/hooks/useStorage';
import { Frequency } from './components/Frequency';
import { IrregularVerbLabel } from './components/styled/IrregularVerbLabel';
import { WithThumbnail } from './components/WithThumbnail';
import { VerbForms } from './components/VerbForms';
import { VideoContext } from './components/Video';
import { WordWithPronunciation } from './components/WordWithPronunciation';
import { renderWordDefinitions } from './components/definitionsList';
import { SideHeader } from './components/styled/SideHeader';

function BackSide(): JSX.Element {
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

        <WithThumbnail src={W.thumbnailSrc}>
          <WordWithPronunciation
            word={W.word}
            transcriptions={W.transcriptions}
            pronunciations={W.pronunciations}
          />
        </WithThumbnail>

        {!!state.value && (
          <React.Fragment>
            <Separator />
            <CardInput
              value={state.value}
              disabled
            />
          </React.Fragment>
        )}

        {!!W.verbFormsArray.length && (
          <React.Fragment>
            <Separator />
            <VerbForms
              word={W.word}
              secondForm={W.verbForms[EVerbForms.Second]!}
              thirdForm={W.verbForms[EVerbForms.Third]!}
            />
          </React.Fragment>
        )}

        <Separator />

        {renderWordDefinitions(W, {
          shouldShowExamples: true,
        })}

        {!!W.videoContexts.length && <Separator />}

        {W.videoContexts.map(video => (
          <VideoContext
            key={video.id}
            word={W.word}
            title={video.title}
            phraseEn={video.phraseEn}
            phraseRu={video.phraseRu}
            fileName={video.filePath}
          />
        ))}
      </CardSide>
    </CardContainer>
  );
}

ReactDOM.render(<BackSide />, document.getElementById('card'));

