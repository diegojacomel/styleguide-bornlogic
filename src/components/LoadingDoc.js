// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, LocalLoading } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function LocalLoadingDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Loading
            </Title>
            <Spacing>
            <LocalLoading isLoading={true} image="https://picsum.photos/30/30" />
                <SyntaxHighlighter language="html" style={docco}>
{`<LocalLoading isLoading={true} />
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default LocalLoadingDoc;