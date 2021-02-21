import { useState } from 'react';
import styled from 'styled-components'
import Layout from '../../components/Layout'
import NewCardForm from '../../components/NewCardForm'

const HeaderInput = styled.input`
  border: none;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.palette.common.lightGray};
  font-family: 'Open Sans Condensed';
  font-size: 2em;

  &:focus {
    border-bottom-color: ${(props) => props.theme.palette.primary.main};
    outline: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: auto;
`

const WordsArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`

const AddDeck = () => {
  const [words, setWords] = useState<any>([]);

  const handleWordSubmitted = (word: any) => {
    setWords([...words, word]);
  }

  return (
    <Layout>
        <Wrapper>
          <label>Deck name</label>
          <HeaderInput placeholder="Deck name" />
          <WordsArea>
            <div>
              <h2>Words</h2>
              <div>
                {
                  words && words.map((item: any) => (<p>{item.original}</p>))
                }
              </div>
            </div>
            <NewCardForm onSubmit={handleWordSubmitted} />
          </WordsArea>
        </Wrapper>
    </Layout>
  )
}

export default AddDeck
