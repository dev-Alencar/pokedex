import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all .3s;
  }

  p {
    color: ${({ theme }) => theme.text};
  }
   .segundaBox {
    background: ${({ theme }) => theme.segundaBox};
    color: ${({ theme }) => theme.text};
   }

   #voltar {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
   }

   .wrapper-white-danilo {
    background: ${({ theme }) => theme.segundaBox};
    color: ${({ theme }) => theme.text};
   }

   .wrapper-white-hylk {
    background: ${({ theme }) => theme.segundaBox};
    color: ${({ theme }) => theme.text};
   }

   .wrapper-white {
    background: ${({ theme }) => theme.segundaBox};
    color: ${({ theme }) => theme.text};
   }

   .dark-mode-name {
    color: ${({ theme }) => theme.darkon};
   }
  `;