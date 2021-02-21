import styled from 'styled-components'
import Layout from '../../components/Layout'

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
