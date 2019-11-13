// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, FormControl, Label, Input } from 'bornlogic-react-components';

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

function FormControlDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                FormControl
            </Title>
            <Title tag="h4" marginBottom="px20">
                    Basic usage
            </Title>
            <Spacing>
                <FormControl>
                    <Label htmlFor="input">
                        Label: 
                    </Label>
                    <Input
                        name="input"
                    />
                </FormControl>
                <SyntaxHighlighter language="react" style={docco}>
{`<FormControl>
    <Label htmlFor="input">
        Label: 
    </Label>
    <Input
        name="input"
    />
</FormControl>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        inline
                    </Text>
                    <Text>
                        It specifies the field and label positions.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
            </Spacing>
            <Spacing>
                <FormControl inline>
                    <Label htmlFor="input">
                        Label: 
                    </Label>
                    <Input
                        name="input"
                    />
                </FormControl>
            
                <SyntaxHighlighter language="react" style={docco}>
{`<FormControl inline>
    <Label htmlFor="input">
        Label: 
    </Label>
    <Input
        name="input"
    />
</FormControl>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default FormControlDoc;