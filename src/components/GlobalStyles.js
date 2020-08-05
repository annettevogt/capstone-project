import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
:root{
  --dark-green: #837e47;
  --light-green: #dcdbce;
  --dark-green-transparent: rgba(131, 126, 71, 0.15);
  --dark-blue: #2c3f58;
  --medium-grey: #979797;
  --dark-brown: #292827;
  --dark-orange-brown: #504831;

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

main {
  overflow-y: scroll;
  position: relative;
}

h2 {
  color: var(--dark-blue);
  font-size: 26px;
  line-height: 1.64;
  font-stretch: normal;
}

h3 {
  font-family: 'Didact Gothic', sans-serif;
  color: var(--dark-blue);
  font-size: 22px;
  line-height: 1.44;
}
`
