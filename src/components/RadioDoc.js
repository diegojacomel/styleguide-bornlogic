// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, FormControl, Radio } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function RadioDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Panel
                </Title>
                <FormControl>
                    <Radio name="radio" id="radio_1" text="Option 1" />
                    <Radio name="radio" id="radio_2" text="Option 2" />
                </FormControl>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="html" style={docco}>
{`<FormControl>
    <Radio name="radio" id="radio_1" text="Option 1" />
    <Radio name="radio" id="radio_2" text="Option 2" />
</FormControl>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default RadioDoc;