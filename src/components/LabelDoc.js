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

const Text = styled('p')`
${({ bold }) =>`
    ${bold
        ?
        `
        font-weight: bold;
        `
        :
        ``
    }
`}`

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
                <SyntaxHighlighter language="html" style={docco}>
{`<Label>
    Label
</Label>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        htmlFor
                    </Text>
                    <Text>
                        It specifies the bind between the label and the input.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Label htmlFor="input_1">
                        Label
                    </Label>
                    <SyntaxHighlighter language="html" style={docco}>
{`<Label htmlFor="input_1">
    Label
</Label>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default LabelDoc;