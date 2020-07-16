import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
  --secondary-dark: #837e47;
  --secondary-medium-light: #dcdbce;
  --secondary-light: rgba(131, 126, 71, 0.15);
  --primary-dark: #2c3f58;
  --primary-light: #979797;
  --tertiary-dark: #292827;
  --tertiary-medium-dark: #504831;

  scroll-behavior: smooth;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Didact Gothic", sans-serif;
  overscroll-behavior: none;
}

h2 {
  color: var(--primary-dark);
  font-size: 26px;
  line-height: 1.64;
  font-stretch: normal;
}

h3 {
  font-family: 'Didact Gothic', sans-serif;
  color: var(--primary-dark);
  font-size: 22px;
  line-height: 1.44;
}
`
