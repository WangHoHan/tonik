import styled from 'styled-components';

export const LoadingElem = styled.p`
  animation: blink-caret .75s step-end infinite, typing 1s steps(40, end);
  border-right: .15em solid #DCD2FE;
  letter-spacing: .15em;
  margin: 0.5rem auto 0 auto;
  max-width: min-content;
  overflow: hidden;
  white-space: nowrap;

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #DCD2FE; }
  }

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }
`;
