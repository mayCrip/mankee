import Router from 'next/router'
import { useFormik } from 'formik'
import styled from 'styled-components'
import Layout from '../../components/Layout'

interface DeckValues {
    name: string,
}

const NewDeckForm = () => {
    const formik = useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: async (values: DeckValues) => {
            await fetch('/api/decks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })
            Router.push('/')
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <button type="submit">Add</button>
        </form>
    )
}

const HeaderInput = styled.input`
  border: none;
  border-bottom: 1px solid #6b6b6b;
  font-family: 'Open Sans Condensed';
  font-size: 2em;

  &:focus {
    border: none;
    border-bottom: 1px solid #538efc;
    outline: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 5vw;
`

const AddDeck = () => (
  <Layout>
    <Wrapper>
      <label>Deck name</label>
      <HeaderInput placeholder="Deck name" />
    </Wrapper>
  </Layout>
)

export default AddDeck
