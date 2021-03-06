// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function ButtonIconDoc() {
    return (
        <Spacing>
            <Title tag='h3' marginBottom='px20'>
                Theme
            </Title>
            <SyntaxHighlighter language='react' style={docco}>
{`const theme = {
    breakpoint: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px"
    },
    colors: {
        white: "#ffffff",
        none: "transparent",
        active: {
            blue2: "#004367",
        },
        grey1: "#333333",
        grey2: "#4c5564",
        grey3: "#8c97a8",
        grey4: "#b4b4b4",
        grey5: "#cecece",
        grey6: "#e4e4e4",
        grey7: "#f2f2f2",
        grey8: "#f8f8f8",
        grey9: "#fafafa",
        
        blueGrey1: "#0C2833",
        blueGrey2: "#304E5C",
        blueGrey3: "#577584",
        blueGrey4: "#8BA4B1",
        blueGrey5: "#C3CFD6",
        blueGrey6: "#F2F2F2",
        
        blue1: "#004367",
        blue2: "#0087C8",
        blue3: "#2DBFF3",
        blue4: "#B9E6FB",
        blue5: "#E7F3FA",
        blue6: "#F4FBFF",
        
        red1: "#64001C",
        red2: "#89002B",
        red3: "#B51D42",
        red4: "#FAC8C7",
        red5: "#FFE0E0",
        red6: "#FFEBEB",
        
        orange1: "#985826",
        orange2: "#AF6A22",
        orange3: "#F1A539",
        orange4: "#FFE17F",
        orange5: "#FFF9DB",
        orange6: "#FFFCEB",
        
        green1: "#005742",
        green2: "#007864",
        green3: "#00967D",
        green4: "#A0D9DE",
        green5: "#C9F8F6",
        green6: "#E6FFFE",
        
        pink: "#B926BF",
        purple: "#561EA5",
        brown: "#765A50",
        orange: "#F36A2D",
        black: "#000000",
        
    },
    spacing: {
        px3: "3px",
        px5: "5px",
        px8: "8px",
        px10: "10px",
        px12: "12px",
        px15: "15px",
        px16: "16px",
        px20: "20px",
        px24: "24px",
        px25: "25px",
        px30: "30px",
        px32: "32px",
        px35: "35px",
        px40: "40px",
        px50: "50px",
        px60: "60px",
        px70: "70px",
        px90: "90px",
        
        none: "0",
        quarter: "25%",
        middle: "50%",
        full: "100%"
    },
    fontSize: {
        none: "0",
        px8: "8px",
        px10: "10px",
        px11: "11px",
        px12: "12px",
        px14: "14px",
        px16: "16px",
        px18: "18px",
        px20: "20px",
        px24: "24px",
        px25: "25px",
        px30: "30px",
        px32: "32px",
        px35: "35px",
        px40: "40px",
        px45: "45px",
        px60: "60px",
    },
    fontWeight: {
        light: 300,
        normal: 400,
        bold: 700
    },
    fontFamily: {
        default: "Lato", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"
    },
    rounded: {
        px3: "3px",
        px5: "5px",
        px10: "10px",

        none: "0",
        full: "100%"
    }
}
`}
            </SyntaxHighlighter>    
        </Spacing>
    )
}

export default ButtonIconDoc;