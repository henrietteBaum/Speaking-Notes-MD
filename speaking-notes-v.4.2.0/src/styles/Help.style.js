import styled from "styled-components";

export const StyledHelp = styled.section`
  padding: 1em 3em;
  background-color: rgb(76, 0, 0);
  height: 100%;
  border: none;
  outline: none;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: larger;

  h1, h2, h3 {
    color: orange;
    letter-spacing: 1px;
  }

  h1 {
    font-size: xx-large;
  }

  h2 {
    font-size: x-large;
  }

  a {
    color: whitesmoke;
    font-size: larger;
    
    &:hover {
      color: orange;
      font-size: x-large;
    }
  }
`;