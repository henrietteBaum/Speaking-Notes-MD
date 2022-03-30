# Speaking Notes Markdown

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Style

[Styled-Components](https://styled-components.com/docs/api#attrs)

`NavBar` and `NavLink` use seperate styled-components.
### active link:

```js
const StyledLink = styled(NavLink)`
  color: whitesmoke;

  &.active {
    color: orange;
  }
`;
```


## Learning Recources:

[Codeevolution: React Router Tutorial](https://www.youtube.com/watch?v=tIUuqZaq_8s&list=PLC3y8-rFHvwjkxt8TOteFdT_YmzwpBlrG&index=4)