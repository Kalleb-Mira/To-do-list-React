import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
    
    html {
        font-size: 10px;  //medida rem
        font-family: 'Roboto', sans-serif;
    }
   

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        
        //background-image: url(./src/images/background-list.png);
    }

`

export default GlobalStyle