// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Panel } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function PanelDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px10">
                    Panel
                </Title>
                <Panel
                    title="Title"
                    subtitle="Subtitle"
                    subtitleColor="green3"
                    showBoxShadow
                    showBorder
                >
                    Content
                </Panel>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="html" style={docco}>
{`<Panel
    title="Title"
    subtitle="Subtitle"
    subtitleColor="green3"
    showBoxShadow
    showBorder
>
    Content
</Panel>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default PanelDoc;