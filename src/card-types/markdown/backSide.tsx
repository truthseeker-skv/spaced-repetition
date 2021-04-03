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

export const BackSide = (): JSX.Element => {
  const storage = useStorage('md-code');

  return (
    <CardContainer>
      <CardSide>
        {!!storage.value && (
          <React.Fragment>
            <Typography variant="h3">
              Answer
            </Typography>
            <CodeEditor
              lang="tsx"
              value={storage.value.trim()}
              isReadOnly
            />
            <Separator />
          </React.Fragment>
        )}

        <Markdown
          source={getInitialCardData()}
        />
      </CardSide>
    </CardContainer>
  );
}

ReactDOM.render(<BackSide />, document.getElementById('card'));
