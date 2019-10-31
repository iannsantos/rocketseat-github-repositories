import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
    ${props =>
      props.loading &&
      css`
        animation: ${rotate} 2s linear infinite;
      `}
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  margin-left: 2px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* adiciona o estilo somente em quem tiver um LI antes do & (this) */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #fff;
      font-weight: bold;
      text-decoration: none;
      background: #7159c1;
      padding: 4px 6px;
      border-radius: 4px;
    }
  }
`;
