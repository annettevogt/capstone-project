import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
  --secondary-dark: #837e47;
  --secondary-medium-light: #837e47;
  --secondary-light: #dcdbce;
  --primary-dark: #837e47;
  --tertiary-dark: #504831;
  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'DidactGothic', sans-serif;
}

body {
  color: var(--primary-dark);
  font-size: 18px;
  font-weight: 300;
  display: grid;
  grid-template-rows: 48px auto 48px;
  background: var(--primary-light-8);
}

main {
  overflow: scroll;
  line-height: 1.5;
  display: grid;
  padding: 72px 24px;
  height: 100%;
}
`
