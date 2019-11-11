// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, EmptyContent } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function EmptyContentDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                EmptyContent
            </Title>
            <EmptyContent
                title="Title: "
                message="My message"
            />
            <SyntaxHighlighter language="html" style={docco}>
{`<EmptyContent
    title="Title: "
    message="My message"
/>
`}
            </SyntaxHighlighter>
        </Spacing>
    )
}

export default EmptyContentDoc;