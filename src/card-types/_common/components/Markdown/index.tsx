import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import gfm from 'remark-gfm';
import styled from 'styled-components';
import Box from '@material-ui/core/Box'
import { Variant } from '@material-ui/core/styles/createTypography';
import Typography from '@material-ui/core/Typography';

import { CodeEditor } from '../CodeEditor';
import { Separator } from '../styled/Separator';


export interface IMarkdownProps {
  source: string;
}

export function Markdown({ source }: IMarkdownProps) {
  return (
    <ReactMarkdown
      plugins={[gfm]}
      source={source}
      renderers={getRenderers()}
      allowDangerousHtml
    />
  );
}

type RenderersType = {[name: string]: (...args: any) => JSX.Element};

/**
 * break: 'br',
 * paragraph: 'p',
 * emphasis: 'em',
 * strong: 'strong',
 * thematicBreak: 'hr',
 * blockquote: 'blockquote',
 * delete: 'del',
 * link: 'a',
 * image: 'img',
 * linkReference: 'a',
 * imageReference: 'img',
 * table: SimpleRenderer.bind(null, 'table'),
 * tableHead: SimpleRenderer.bind(null, 'thead'),
 * tableBody: SimpleRenderer.bind(null, 'tbody'),
 * tableRow: SimpleRenderer.bind(null, 'tr'),
 * tableCell: TableCell,
 * root: Root,
 * text: TextRenderer,
 * list: List,
 * listItem: ListItem,
 * definition: NullRenderer,
 * heading: Heading,
 * inlineCode: InlineCode,
 * code: CodeBlock,
 * html: Html,
 * virtualHtml: VirtualHtml,
 * parsedHtml: ParsedHtml
 */
function getRenderers(): RenderersType {
  return {
    text: (params) => (
      <StyledText>
        {params.children}
      </StyledText>
    ),
    break: () => (
      <br />
    ),
    code: ({ language, value }) => {
      if (!language) {
        return (
          <StyledText>
            {value}
          </StyledText>
        );
      }

      return (
        <CodeEditor
          lang={language}
          value={value}
          isReadOnly
        />
      );
    },
    inlineCode: (params) => (
      <StyledInlineCode>
        {params.children}
      </StyledInlineCode>
    ),
    heading: (params) => (
      <Typography variant={`h${params.level}` as Variant}>
        {params.children}
      </Typography>
    ),
    thematicBreak: (params) => (
      <Separator />
    ),
  };
}

const StyledInlineCode = styled.code`
  display: inline-block;
  margin: 1px 0;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: rgb(38, 38, 38);
`;

const StyledText = styled(Box)`
  display: inline;
  line-height: 24px;
`;
