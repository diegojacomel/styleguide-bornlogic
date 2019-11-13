// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ButtonClose } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function ButtonCloseDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                ButtonClose
            </Title>
            <Title tag="h4" marginBottom="px10">
                Basic usage
            </Title>
            <ButtonClose onClick={() => alert('ButtonClose was clicked')} showButton styleguide />
            <SyntaxHighlighter language="html" style={docco}>
{`<ButtonClose onClick={() => alert('ButtonClose was clicked')} />
`}
            </SyntaxHighlighter>    
        </Spacing>
    )
}

export default ButtonCloseDoc;