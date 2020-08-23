/* eslint-disable import/no-unresolved */
import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  .theme-light {
    --bg-primary: #f2f2f2;
    --bg-secondary: #fff;
    --bg-ternary: #9e9e9e;
  }
  .theme-dark {
    --bg-primary: #121317;
    --bg-secondary: #1a1c23;
    --bg-ternary: #737780;
  }
  * {
    ${tw`m-0 p-0 outline-none box-border`}
  }
  *:focus{
    ${tw`outline-none`}
  }
  *::selection{
    ${tw`bg-teal-500 bg-opacity-25`}
  }
  html, #root, :root, body{
    ${tw`h-screen w-screen antialiased`}
  }
  body, input, button, textarea{
    ${tw`text-sm`}
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
  ul {
    ${tw`list-none`}
  }
  button {
    ${tw`cursor-pointer`}
  }
  h1,h2,h3,h4,h5,h6{
    ${tw`tracking-wider m-0 p-0`}
    font-family: 'Alata', Arial, Helvetica, sans-serif;
  }
  a {
    ${tw`text-sm font-bold no-underline`}
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }
  img{
    ${tw`w-full`}
  }

  body{
    ${tw`text-dark-500 text-base overflow-x-hidden`}
  }
`;
