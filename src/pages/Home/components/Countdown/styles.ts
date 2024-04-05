import { styled } from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;

  line-height: 8rem;
  color: ${({ theme }) => theme.GRAY_100};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${({ theme }) => theme.GRAY_700};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.p`
  color: ${({ theme }) => theme.BLUE_500};
  padding: 2rem 0;

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.GRAY_800};
`
