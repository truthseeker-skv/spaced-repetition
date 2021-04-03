import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import styled, { css, createGlobalStyle } from 'styled-components';

import { useIsRendered } from '../hooks/useIsRendered';
import { appearanceAnimation } from '../transitions/appearance';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography: {
    h1: {
      fontSize: '32px',
    },
    h2: {
      fontSize: '26px',
    },
    h3: {
      fontSize: '22px',
    },
  },
})

export interface ICardContainerProps {
  children?: React.ReactChild;
}

export const CardContainer = ({ children }: ICardContainerProps) => {
  const isRendered = useIsRendered();

  return (
    <Cover>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Wrapper isRendered={isRendered}>
          {children}
        </Wrapper>
      </ThemeProvider>
    </Cover>
  );
};

const GlobalStyles = createGlobalStyle`
  html,
  body,
  .ankidroid_dark_mode,
  .card {
    position: relative;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #262626 !important;
    font-family: Roboto, sans-serif;
  }
  
  #card {
    display: block !important;
  }

  * {
    font-family: Roboto, sans-serif;
  }
`;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 0;
`;

interface IWrapperProps {
  isRendered: boolean;
}

const Wrapper = styled.div<IWrapperProps>`
  visibility: hidden;
  padding: 32px;
  width: 100%;
  max-width: 720px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #2f2f31;
  box-shadow: 0 0 10px 4px #222222;
  white-space: pre-wrap;
  
  ${({ isRendered }) => isRendered && css`
    visibility: visible;
    animation: ${appearanceAnimation} .3s;
  `};

  @media (max-width: 480px) {
    padding: 32px 16px;
  }
`;
