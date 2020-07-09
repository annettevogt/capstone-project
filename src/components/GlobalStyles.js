import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
  --secondary-dark: #837e47;
  --secondary-medium-light: #dcdbce;
  --secondary-light: rgba(131, 126, 71, 0.15);
  --primary-dark: #2c3f58;
  --primary-light: #979797;
  --tertiary-dark: #504831;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: grid;
}

main {
  overflow: scroll;
  line-height: 1.5;
  display: grid;
  padding: 72px 24px;
  height: 100%;
}
`
