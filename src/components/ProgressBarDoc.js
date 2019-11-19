// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ProgressBar } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function ProgressBarDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Panel
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <ProgressBar percentage={60} color="#1b7db5" />
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<ProgressBar percentage={60} color="#1b7db5" />
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default ProgressBarDoc;