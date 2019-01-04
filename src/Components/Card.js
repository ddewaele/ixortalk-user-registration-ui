// @flow
import styled from '@emotion/styled'
import { width, space } from 'styled-system'

const Card = styled('div')(
  { borderRadius: 4 },
  ({ theme }) => ({ background: theme.colors.card }),
  width,
  space,
)

export { Card }