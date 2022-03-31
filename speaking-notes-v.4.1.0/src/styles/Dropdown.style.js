import styled from "styled-components";

export const StyledDpContainer = styled.div`
  width: 4em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 34px;
  z-index: 4;
`

export const StyledDropdown = styled.div`
  height: 3em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: self-start;

  &:hover {
    color: yellow;
  }

  &.active {
    font-weight: bold;
    color: orange;
    text-decoration: underline;
  }

`

export const StyledUl= styled.ul`
  background-color: rgb(23, 23, 31);
  color: whitesmoke;
  width: 100%;
  height: 3em;
  margin-top: 7em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  margin-left: 0;
  padding-bottom: 8px;
  padding-top: 12px;

  &:hover {
    color: yellow;
  }
`;

export const StyledList = styled.li`
  list-style-position: inside;
  list-style-type: '';
  width: 100%;
  height: 3rem;
  color: whitesmoke;
  background-color: rgb(23, 23, 31);
  text-decoration: none;
  padding: 0;
  margin: 0;

  &:hover {
    color: yellow;
  }

  &.active {
    font-weight: bold;
    color: orange;
  }

`