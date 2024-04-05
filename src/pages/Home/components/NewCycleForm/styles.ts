import { css, styled } from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.GRAY_100};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  ${({ theme }) => css`
    border-bottom: 2px solid ${theme.GRAY_500};
    color: ${theme.GRAY_100};

    &:focus {
      box-shadow: none;
      border-color: ${theme.BLUE_500};
    }

    &::placeholder {
      color: ${theme.GRAY_500};
    }
  `}
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
