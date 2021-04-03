import axios from 'axios';
import FormData from 'form-data';
import { toInteger, orderBy } from 'lodash';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';

import { withCache } from '../../../../utils/cache';
import { escapeQuotes } from '../../../../utils/format';
import { getCacheDir } from '../../../../utils/paths';
import { trimTags } from './utils';

export interface IPuzzleEnglishVideoContext {
  id: number;
  title: string;
  phraseEn: string;
  phraseRu: string;
  filePath: string;
}

const _fetchVideoContext = (
  word: string,
  translation: string
): TE.TaskEither<Error, Array<IPuzzleEnglishVideoContext>> => async () => {
  const form = new FormData();
  form.append('ajax_action', 'ajax_cards_getWordVideos');
  form.append('word', JSON.stringify(word));
  form.append('translation', JSON.stringify(translation));
  form.append('exclude_ids', JSON.stringify([]));

  try {
    const resp = await axios.post('https://puzzle-english.com', form, { headers: form.getHeaders() });

    const result: Array<IPuzzleEnglishVideoContext> = orderBy(
      (resp.data?.videos || []),
      (it) => it.phraseRu?.indexOf(translation) >= 0,
      ['desc'],
    )
      .map((v: any) => ({
        id: toInteger(v.id),
        title: escapeQuotes(v.post_title),
        phraseEn: escapeQuotes(trimTags(v.phrase_en)).replace('\\', '/'),
        phraseRu: escapeQuotes(trimTags(v.phrase_ru)).replace('\\', '/'),
        filePath: `https://images.puzzle-english.com/video_pieces/mp4/${v.post_id}/${v.piece_index}.mp4`,
      }));

    return E.right(result);
  } catch (err) {
    return E.right([]);
  }
}

export const fetchVideoContext = withCache({
  dir: getCacheDir('pe-video-context'),
  cacheKey: (...args) => args.filter(Boolean).join('—'),
})((word, translation) => _fetchVideoContext(word, translation));
