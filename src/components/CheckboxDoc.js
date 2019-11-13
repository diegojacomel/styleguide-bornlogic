// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, FormControl, Checkbox, Label } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function CheckboxDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Checkbox
            </Title>
            <Title tag="h4" marginBottom="px10">
                Basic usage
            </Title>
            <FormControl inline>
                <Checkbox
                    name="checkbox_1"
                    id="checkbox_1"
                    onClick={(e) => console.log(`You ${!!e.target.checked ? '' : 'un'}selected the checkbox: ${e.target.name}`)}
                    color="green3"
                />
                <Label leftSpace htmlFor="checkbox_1">
                    Checkbox 1
                </Label>
            </FormControl>
            <SyntaxHighlighter language="react" style={docco}>
{`<FormControl inline>
    <Checkbox
        name="checkbox_1"
        id="checkbox_1"
        onClick={(e) => console.log('You {!!e.target.checked ? '' : 'un'}selected the checkbox: {e.target.name}')}
        color="green3"
    />
    <Label leftSpace htmlFor="checkbox_1">
        Checkbox 1
    </Label>
</FormControl>
`}
            </SyntaxHighlighter>    
        </Spacing>
    )
}

export default CheckboxDoc;