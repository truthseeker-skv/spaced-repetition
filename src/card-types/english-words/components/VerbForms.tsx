import React from 'react';
import styled from 'styled-components';

import { IWordMain } from '../../../preloaders/english/services/cambridge-dictionary/models';
import { WordWithPronunciation } from './WordWithPronunciation';

interface IVerbFormsProps {
  word: string;
  secondForm: IWordMain;
  thirdForm: IWordMain;
}

export const VerbForms = (props: IVerbFormsProps) => {
  const { secondForm, thirdForm } = props;

 return (
   <Container>
     <FormWrapper formName="2-nd">
       <WordWithPronunciation
         {...secondForm}
         size="medium"
       />
     </FormWrapper>
     <FormWrapper formName="3-rd">
       <WordWithPronunciation
         {...thirdForm}
         size="medium"
       />
     </FormWrapper>
   </Container>
 );
};

const Container = styled.div`
  position: relative;
`;

VerbForms.Container = Container;

interface IFormWrapperProps {
  formName: string;
}

const FormWrapper = styled.div<IFormWrapperProps>`
  position: relative;
  margin-left: 56px;
  color: #cacaca;

  &:first-child {
    margin-bottom: 16px;
  }

  &::before {
    position: absolute;
    top: 6px;
    left: -56px;
    content: '${props => `${props.formName}: `}';
    font-size: 14px;
    color: #acacac;
  }
`;
