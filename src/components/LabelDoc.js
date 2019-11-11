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
            <Title tag="h3" marginBottom="px10">
                Label
            </Title>
            <Spacing>
                <Label>
                    Label
                </Label>
                <SyntaxHighlighter language="html" style={docco}>
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