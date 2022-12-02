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
   -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

 .d-image-full {
    width: 100%;
  }

  .d-none {
    display: none !important;
  }
  .d-block {
    display: block !important;
  }

  .d-xs-none {
    @media (min-width: 0){
      display: none !important;
    }
  }
  .d-xs-block {
    @media (min-width: 0){
      display: block !important;
    }
  }

  .d-sm-none {
    @media (min-width: 576px){
      display: none !important;
    }
  }
  .d-sm-block {
    @media (min-width: 576px){
      display: block !important;
    }
  }

  .d-md-none {
    @media (min-width: 768px){
      display: none !important;
    }
  }
  .d-md-block {
    @media (min-width: 768px){
      display: block !important;
    }
  }

  .d-lg-none {
    @media (min-width: 992px){
      display: none !important;
    }
  }
  .d-lg-block {
    @media (min-width: 992px){
      display: block !important;
    }
  }

  .d-xl-none {
    @media (min-width: 1200px){
      display: none !important;
    }
  }
  .d-xl-block {
    @media (min-width: 1200px){
      display: block !important;
    }
  }

  .d-xxl-none {
    @media (min-width: 1400px){
      display: none !important;
    }
  }
  .d-xxl-block {
    @media (min-width: 1400px){
      display: block !important;
    }
  }

  @keyframes slideLeft {
      from {
	  	opacity: 0;
	  	transform: translateX(100%);
	  }
	  to {
	  	opacity: 1;
	  	transform: translateX(0%);
	  }
  }

  @keyframes slideRight {
      from {
	  	opacity: 1;
	  	transform: translateX(0%);
	  }
	  to {
	  	opacity: 0;
	  	transform: translateX(100%);
	  }
  }

  .d-text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    @media (max-width: 540px){
      max-width: 42ch;
    }
   }

  .d-link-hover {
    transition: all 0.5s ease-out;
    :hover {
      color: var(--color-link-hover);
    }
  }

  .d-line-ext {
    line-height: 0.5;
  }

  .offset-lg-2{
    margin-left: 16.66667%;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {transition: background-color 5000s ease-in-out 0s;}

`
