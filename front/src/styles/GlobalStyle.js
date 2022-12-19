import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        font-size: 0.9rem;
    }
    @font-face {
        font-family: 'JejuMyeongjo';
        font-weight: normal;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.ttf') format("truetype");
        font-display: swap;
    }
    body {
        width: 100%;
    }

`;
export default GlobalStyle