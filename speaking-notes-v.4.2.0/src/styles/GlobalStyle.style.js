import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

.App {
  background-color: rgb(76, 0, 0);
  text-align: left;
}

.linkText {
  font-size: larger;
  font-weight: bold;
  color: orange;
}

.linkText:hover{
  color: yellow;
}

.linkText:active {
  color: orange;
}


body {
  background-color: #282c34;
  /* background-color: maroon; */
  color: whitesmoke;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
