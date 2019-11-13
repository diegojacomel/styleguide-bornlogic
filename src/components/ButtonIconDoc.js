// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ButtonIcon } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function ButtonIconDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                ButtonIcon
            </Title>
            <Title tag="h4" marginBottom="px10">
                Basic usage
            </Title>
            <ButtonIcon onClick={() => alert('ButtonIcon was clicked')} />
            <SyntaxHighlighter language="html" style={docco}>
{`<ButtonIcon onClick={() => alert('ButtonIcon was clicked')} />
`}
            </SyntaxHighlighter>    
        </Spacing>
    )
}

export default ButtonIconDoc;