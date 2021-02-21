import { ChangeEvent, useRef, useState, useEffect } from 'react'
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown'

const WordExampleTextarea = styled.textarea`
  resize: none;
  border: none;
  border-left-width: 1px;
  border-left-style: solid;
  border-left-color: ${(props) => props.theme.palette.common.lightGray};

  &:focus {
    outline: none;
    border-left-color: ${(props) => props.theme.palette.primary.main};
  }
`
const JustItalicParent = styled.div`
  font-style: italic;
  font-size: 1.2em;
`

type Props = {
  onChange: (text: string) => void,
  rows: number,
  cols: number,
  placeholder: string,
  highlight: string
}

export default function WordExampleEditor({
  onChange,
  rows,
  cols,
  placeholder,
  highlight
}: Props) {
  const elementRef = useRef<HTMLTextAreaElement>(null);
  const [exampleText, setExampleText] = useState<string>('');
  const [resultText, setResultText] = useState<string>('');

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    elementRef.current.focus();
  }, [])

  useEffect(() => {
    const highlightPrepared = highlight.trim();

    if (highlightPrepared === '')
    {
      return;
    }

    const formattedValue = exampleText.split(' ').map(
      (word) => (word === highlightPrepared ? `**${highlightPrepared}**` : word)
    ).join(' ');

    setResultText(formattedValue);
    onChange(formattedValue);
  }, [highlight])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setExampleText(text);

    const formattedValue = text.split(' ').map(
      (word) => (word === highlight ? `**${highlight}**` : word)
    ).join(' ');

    setResultText(formattedValue);
    onChange(formattedValue);
  }

  return (
    <div>
      <WordExampleTextarea
        ref={elementRef}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={exampleText}
        onChange={handleChange}
      />
      <JustItalicParent>
        <ReactMarkdown>{resultText}</ReactMarkdown>
      </JustItalicParent>
    </div>
  )
}
