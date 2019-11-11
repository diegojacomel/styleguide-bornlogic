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

function TitleDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px10">
                    Title
                </Title>
                <Title tag="h1" marginBottom="px10">
                    Title example
                </Title>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="html" style={docco}>
{`<Title tag="h1" marginBottom="px10">
    Title example
</Title>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default TitleDoc;