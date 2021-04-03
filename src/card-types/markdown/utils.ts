import { decodeAnkiContent } from '../../anki/utils/formatting';

export const getInitialCardData = (() => {
  const data = document.getElementById('card')?.innerHTML || '';

  return (extraData?: string) => extraData
    ? `${extraData}\r\n${decodeAnkiContent(data)}`
    : decodeAnkiContent(data);
})();
