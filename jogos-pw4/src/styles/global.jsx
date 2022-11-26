import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --pink: #E10096;
        --lightpink: #F548BB;
        --pinkPE: #FFE3F6;;
        --white: #fff;
        --black: #000;
        --grey: #fafafa;
        --mediumgrey: #6F6F6F;
        --greybg: #f8f8f8;
        --greyinputborder: #DADADA;
        --greyinputtext: #a3a3a3;
        --greylight: #F4F4F4;
        --maosecolor: #141414;
        --greymaosebg: #e5e5e5;
        --fakeback: rgba(0, 0, 0, 0.04);
        --container-margin: 24px;
        --bg-maose-light: #E7EAEE;
        --bg-maose-dark: #E5E5E5;
        --avocado: #d9fa98;
        --whitegdsn: #f4f4f4;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Thin.otf');
        font-weight: 200;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Thin_Italic.otf');
        font-weight: 200;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Light.otf');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Light_Italic.otf');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Regular.otf');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Regular_Italic.otf');
        font-weight: 400;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Semi_Bold.otf');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Semi_Bold_Italic.otf');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Medium.otf');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Medium_Italic.otf');
        font-weight: 600;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Bold.otf');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poligon';
        src: url('/fonts/Poligon_Bold_Italic.otf');
        font-weight: 700;
        font-style: italic;
        font-display: swap;
    }

    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, textarea, label, strong, div {
        font-family: 'Poligon', sans-serif;
        letter-spacing: 0.5px;
    }

    .container {
        margin: 0 var(--container-margin);
        max-width: 1200px;
    }

    .async-hide {
        opacity: 0 !important;
    }

    @media (min-width: 768px) {
        :root{
            --container-margin: 55px;
        }
    }

    @media (min-width: 1024px) {
        :root{
            --container-margin: 120px;
        }
    }

    @media (min-width: 1440px) {
        :root{
            --container-margin: auto;
        }
    }    
`;

export default GlobalStyles;
