import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#root {
  @import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
  height: 100%;
}

`;
