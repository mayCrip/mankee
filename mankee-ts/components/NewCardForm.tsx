// import { useFormik } from 'formik'
import styled from 'styled-components'
import { KeyboardEvent } from 'react';
import { useFormik } from 'formik'
import WordExampleEditor from './WordExampleEditor'

const InlineForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ExamplesWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
  min-width: 10vw;
`

const CardInput = styled.input`
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.palette.common.lightGray};
  font-family: 'Open Sans Condensed';
  font-size: 1.2rem;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.palette.primary.main};
  }
`

const CardLabel = styled.label`
  color: ${(props) => props.theme.palette.common.darkGray};
  text-transform: uppercase;
  font-size: 0.8rem;
  margin-top: 8px;
`

const PrimaryButton = styled.button`
  font-family: 'Open Sans Condensed';
  padding: 5px 10px;
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-size: 1.2rem;
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};

  &:focus {
    outline-color: ${(props) => props.theme.palette.secondary.main};
  }

  &:active {
    outline: none;
    color: ${(props) => props.theme.palette.common.lightGray};
  }
`

const ControlsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`

const HeaderArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`

type WordValues = {
  original: string,
  translation: string,
  dictionaryRecord: string,
  examples: string[]
}

type Props = {
  onSubmit?: (item: WordValues) => void
}

export default function NewCardForm({
  onSubmit,
}: Props) {
  const handleSubmit = (values: WordValues) => {
    console.log(values);
    onSubmit && onSubmit(values);
  }

  const formik = useFormik<WordValues>({
    initialValues: {
      original: '',
      translation: '',
      dictionaryRecord: '',
      examples: ['']
    },
    onSubmit: handleSubmit
  })

  const handleExampleTextChanged = (exampleText: string, index: number) => {
    formik.values.examples[index] = exampleText;
    formik.setFieldValue('examples', formik.values.examples);
  }

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.altKey && e.ctrlKey && e.code === 'Enter') {
      handleSubmit(formik.values);

      return;
    }

    if (e.ctrlKey && e.code === 'Enter') {
      formik.setFieldValue('examples', [...formik.values.examples, '']);
    }
  }

  return (
    <InlineForm onKeyUp={handleKeyUp} onSubmit={formik.handleSubmit}>
      <HeaderArea>
        <h2>New word</h2>
        <ControlsArea>
          <PrimaryButton>Cancel</PrimaryButton>
          <PrimaryButton>Save and Add</PrimaryButton>
          <PrimaryButton>Save</PrimaryButton>
        </ControlsArea>
      </HeaderArea>
      <CardLabel htmlFor="original">Original</CardLabel>
      <CardInput
        id="original"
        name="original"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.original}
      />
      <CardLabel htmlFor="translation">Translation</CardLabel>
      <CardInput
        id="translation"
        name="translation"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.translation}
      />
      <CardLabel>Dictionary record</CardLabel>
      <CardInput
        id="dictionaryRecord"
        name="dictionaryRecord"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.dictionaryRecord}
      />
      <CardLabel>Examples</CardLabel>
      <ExamplesWrapper>
        {
          formik.values.examples.map((_, index) => (
            <WordExampleEditor
              key={`word-example-${index}`}
              rows={5} cols={33}
              placeholder="Example goes here"
              onChange={(text) => { handleExampleTextChanged(text, index); }}
              highlight={formik.values.original}
            />
          ))
        }
      </ExamplesWrapper>
    </InlineForm>
  )
}
