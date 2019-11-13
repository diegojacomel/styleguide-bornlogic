// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Label } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function LabelDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Label
            </Title>
            <Title tag="h4" marginBottom="px20">
                Basic usage
            </Title>
            <Spacing>
                <Label>
                    Label
                </Label>
                <SyntaxHighlighter language="react" style={docco}>
{`<Label>
    Label
</Label>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default LabelDoc;