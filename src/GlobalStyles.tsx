import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
        ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
        }
        -ms-overflow-style: none; /* IE, Edge */
        scrollbar-width: none; /* Firefox */
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        color: ${(props) => props.theme.textColor};
        font-family: 'Source Sans Pro', sans-serif;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
`;

export default GlobalStyles;
