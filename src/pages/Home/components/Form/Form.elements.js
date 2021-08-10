import styled from 'styled-components'
import { Field } from 'formik';

export const FieldComponent = styled(Field)`
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:focus{
      outline: none;
  }
`
