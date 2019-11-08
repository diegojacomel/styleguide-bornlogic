// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title } from 'bornlogic-react-components';

const Wrapper = styled('div')`
    margin-bottom: 40px;
`

const Space = styled('div')`
    margin-top: 40px;
`

function GettingStarted() {
    return (
        <Wrapper>
            <Title tag="h3" marginBottom="px10">
                How can I install the library?
            </Title>
            <Title tag="h4" marginBottom="px10">
                Using npm
            </Title>
            <SyntaxHighlighter language="cli" style={docco}>
                npm install bornlogic-react-components
            </SyntaxHighlighter>
            <Title tag="h4" marginBottom="px10">
                Using yarn
            </Title>
            <SyntaxHighlighter language="cli" style={docco}>
                yarn add bornlogic-react-components
            </SyntaxHighlighter>

            <Space />

            <Title tag="h3" marginBottom="px10">
                How can I install the library?
            </Title>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`import { Button } from 'bornlogic-react-components'`}
            </SyntaxHighlighter>
        </Wrapper>
    )
}

export default GettingStarted;