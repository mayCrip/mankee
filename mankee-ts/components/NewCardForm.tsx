import { KeyboardEvent } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import * as Yup from 'yup';

import WordExampleEditor from './WordExampleEditor'
import FormInput from './FormInput'

const InlineForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ExamplesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  margin: 10px 0;
  min-width: 10vw;
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
  cursor: pointer;

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

const NewWordSchema = Yup.object().shape({
  original: Yup.string()
    .min(2, 'Too short!')
    .max(150, 'Too long!')
    .required('Required'),
  translation: Yup.string()
    .min(2, 'Too short!')
    .max(200, 'Too long!')
    .required('Required'),
  dictionaryRecord: Yup.string().max(250),
});


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
    validateOnBlur: true,
    validationSchema: NewWordSchema,
    onSubmit: handleSubmit
  })

  const handleExampleTextChanged = (exampleText: string, index: number) => {
    formik.values.examples[index] = exampleText;
    formik.setFieldValue('examples', formik.values.examples);
  }

  const handleKeyUp = async (e: KeyboardEvent) => {
    if (e.altKey && e.ctrlKey && e.code === 'Enter') {
      await formik.validateForm();

      if (formik.isValid) {
        handleSubmit(formik.values);
      }

      return;
    }

    if (e.ctrlKey && e.code === 'Enter') {
      formik.setFieldValue('examples', [...formik.values.examples, '']);
    }
  }

  console.log(formik.touched);

  return (
    <InlineForm onKeyUp={handleKeyUp} onSubmit={formik.handleSubmit}>
      <HeaderArea>
        <h2>New word</h2>
        <ControlsArea>
          <PrimaryButton>Cancel</PrimaryButton>
          <PrimaryButton type="submit">Save</PrimaryButton>
        </ControlsArea>
      </HeaderArea>
      <FormInput
        label="Original"
        id="original"
        value={formik.values.original}
        error={formik.errors.original}
        touched={formik.touched.original}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormInput
        label="Translation"
        id="translation"
        value={formik.values.translation}
        error={formik.errors.translation}
        touched={formik.touched.translation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormInput
        label="Dictionary Record"
        id="dictionaryRecord"
        value={formik.values.dictionaryRecord}
        error={formik.errors.dictionaryRecord}
        touched={formik.touched.dictionaryRecord}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
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
