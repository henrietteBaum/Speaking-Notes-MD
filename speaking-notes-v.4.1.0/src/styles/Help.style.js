import styled from "styled-components";

export const StyledHelp = styled.section`
  margin: 2rem;

  h1, h2, h3 {
    color: orange;
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