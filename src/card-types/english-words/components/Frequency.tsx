import round from 'lodash/round';
import React from 'react';
import styled, { css } from 'styled-components';

interface IFrequencyProps {
  freq: number;
  className?: string;
}

export const Frequency = ({ freq }: IFrequencyProps) => {
  return (
    <Container>
      <span>F: </span>
      <FreqValue freq={freq}>
        {round(freq, 2)}
      </FreqValue>
    </Container>
  );
};

const Container = styled.div`
  line-height: 24px;
  color: #acacac;
  font-size: 12px;
  margin-right: 16px;
`;

const FreqValue = styled.span<Pick<IFrequencyProps, 'freq'>>`
  ${({ freq }) => popularity(freq).isLower && css`
    color: #fa3332;
  `}

  ${({ freq }) => popularity(freq).isMedium && css`
    color: #ffcc4d;
  `}

  ${({ freq }) => popularity(freq).isHigh && css`
    color: #0fca04;
  `}
`;

function popularity(freq: number) {
  return {
    isLower: freq <= 8,
    isMedium: freq > 8 && freq <= 50,
    isHigh: freq > 50,
  };
}
