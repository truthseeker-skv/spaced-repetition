import axios from 'axios';
import * as TE from 'fp-ts/TaskEither';
import * as E from 'fp-ts/Either';
import { withCache } from '../../../../utils/cache';
import { getCacheDir } from '../../../../utils/paths';

const _fetchFrequency = (word: string): TE.TaskEither<Error, number | null> => async () => {
  try {
    const resp = await axios(`https://api.datamuse.com/words?sp=${word}&md=f&max=1`);
    const data = resp.data[0] || {};

    return E.right(data.tags?.length ? parseFloat(data.tags[0].replace('f:', '')) : null);
  } catch (err) {
    return E.right(null);
  }
}

// TODO: add caching into single file
export const fetchFrequency = withCache({
  dir: getCacheDir('eng-word-frequency'),
  cacheKey: word => word,
})((word) => _fetchFrequency(word));
