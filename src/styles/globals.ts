'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  
  :root {
     --color-hiContrast: #000;
     --color-loContrast: #fff;
     --color-primary: #fc7703;
     --color-border: #ddd;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
   font-family: var(--default-font), sans-serif;
  }

@media (prefers-color-scheme: light) {
  html {
    color-scheme: light;
  }
  body {
    color: var(--color-hiContrast);
    background: var(--color-loContrast);
  }
 }
`
