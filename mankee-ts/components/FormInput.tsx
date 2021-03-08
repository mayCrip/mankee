import styled from 'styled-components'

const CardInput = styled.input`
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.palette.common.lightGray};
  font-family: 'Open Sans Condensed';
  font-size: 1.2rem;
  margin-bottom: 8px;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.palette.primary.main};
  }
`

interface CardLabelProps {
  readonly error?: boolean;
}

const CardLabel = styled.label<CardLabelProps>`
  color: ${(props) => props.error ? 'red' : props.theme.palette.common.darkGray};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 8px;
  margin-right: 4px;
`

type Props = {
  id: string,
  label?: string,
  value: string,
  error: string | undefined,
  touched: boolean | undefined,
  onChange: (e: any) => void,
  onBlur: (e: any) => void
}

export default function FormInput({
  label,
  id,
  value,
  error,
  touched,
  onChange,
  onBlur
}: Props) {
  return (
    <div>
      <div>
        <CardLabel htmlFor={id}>{label}</CardLabel>
        {
          error && touched && (
            <CardLabel error htmlFor={id}>{error}</CardLabel>
          )
        }
      </div>
      <CardInput
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
