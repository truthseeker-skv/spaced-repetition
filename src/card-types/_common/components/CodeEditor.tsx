import React from 'react';
import styled from 'styled-components';

import { Editor, presets, EditorModes } from '@truthseeker-skv/react-code-mirror/lib/Editor';

import '@truthseeker-skv/react-code-mirror/lib/Editor/code-mirror.css';

interface ICodeEditorProps {
  value: string;
  lang?: EditorModes;
  isReadOnly?: boolean;
  onChange?: (value: string) => void;
}

export const CodeEditor = ({ lang, value, isReadOnly, onChange }: ICodeEditorProps) => {
  const commonEditorModsPreset = presets.useCommonModsPreset({
    isVimMode: true,
    onEditorExit: () => void 0,
  });

  return (
    <StyledEditor
      value={value}
      mods={commonEditorModsPreset}
      mode={lang}
      isReadOnly={!!isReadOnly}
      onChange={onChange}
    />
  );
};

const StyledEditor = styled(Editor)`
  margin: 16px 0;
  border: 1px solid #4a4a4a;

  & div.CodeMirror {
    height: auto;
  }
`;
