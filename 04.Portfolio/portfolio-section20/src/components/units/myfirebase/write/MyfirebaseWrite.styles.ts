import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-top: 50px;
  height: 200px;
  width: 500px;
`;

export const InputWrapper = styled.div`
  padding-top: 50px;
`;

export const MyInput = styled.input`
  margin: 5px;
  width: 350px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid blue;

  :focus {
    outline: none;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 60px;
`;

export const MyButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: beige;
  border-color: yellow;

  cursor: pointer;
  :hover {
    font-weight: bold;
    background-color: yellow;
    border-color: yellowgreen;
  }
`;

export const InnerLogo = styled.span`
  font-size: 13px;
  font-weight: bold;
  font-family: "live";
  font-style: italic;
  color: #5729ff;
`;
