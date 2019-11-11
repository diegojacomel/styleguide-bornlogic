// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, FormControl } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function FormControlDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                FormControl
            </Title>
            <Spacing>
                <FormControl>
                    <label htmlFor="input">
                        Label: 
                    </label>
                    <input
                        name="input"
                    />
                </FormControl>
                <SyntaxHighlighter language="html" style={docco}>
{`<FormControl title="Title: " message="My message">
    <label htmlFor="input">
        Label: 
    </label>
    <input
        name="input"
    />
</FormControl>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <FormControl inline>
                    <label htmlFor="input">
                        Label: 
                    </label>
                    <input
                        name="input"
                    />
                </FormControl>
            
                <SyntaxHighlighter language="html" style={docco}>
{`<FormControl inline>
    <label htmlFor="input">
        Label: 
    </label>
    <input
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