import React from 'react';
import * as ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';

import { CardContainer } from '../_common/components/CardContainer';
import { CodeEditor } from '../_common/components/CodeEditor';
import { Markdown } from '../_common/components/Markdown';
import { CardSide } from '../_common/components/styled/CardSide';
import { Separator } from '../_common/components/styled/Separator';
import { useStorage } from '../_common/hooks/useStorage';
import { getInitialCardData } from './utils';

export const FrontSide = (): JSX.Element => {
  const storage = useStorage('md-code');

  return (
    <CardContainer>
      <CardSide>
        <Markdown
          source={getInitialCardData()}
        />
        <Separator />
        <Typography variant="h3">
          Answer
        </Typography>
        <CodeEditor
          lang="tsx"
          value={storage.value || `\n\n\n`}
          onChange={storage.onChangeValue}
        />
      </CardSide>
    </CardContainer>
  );
}

ReactDOM.render(<FrontSide />, document.getElementById('card'));
