import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20vh);
  }

  30% {
    opacity: 0.5;
  }

  90% {
    transform: translateY(0);
    opacity: 0.8;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const fromCenter = keyframes`
  0% {
    transform: translateY(120%);
  }

  100% {
    transform: translateY(0);
  }
`;

const CardRoot = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  min-width: 30vw;
  min-height: 25vh;
  box-shadow:  5px 5px 10px #d6d6d6;
  font-family: 'Open Sans Condensed';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

`;

const AWord = styled.h1`
  transform: translateY(120%);

  .visible & {
    animation: 0.5s cubic-bezier(0.645, 0.045, 0.355, 1.000) 0s 1 normal both running ${fromCenter};
  }
`;

const Translation = styled.p`
  font-size: 1.5em;
  margin: 6px;
  transform: translateY(20vh);

  .visible & {
    animation: 0.40s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal both running ${fadeUp};
  }
`;

const UsageExample = styled.p`
  font-style: italic;
  font-size: 1.2em;
  margin: 2px;
  color: #7d7d7d;
  transform: translateY(20vh);

  .visible & {
    animation: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s 1 normal both running ${fadeUp};
  }
`;

function Card({ backsideShown }) {
  return (
    <CardRoot className={backsideShown ? 'visible' : ''}>
      <AWord>to figure things out for myself</AWord>
      <Translation>приравнивать</Translation>
      <UsageExample>I heard something special happend here</UsageExample>
      <UsageExample>It seems like you're doing something wrong</UsageExample>
    </CardRoot>
  );
};

export default Card;
