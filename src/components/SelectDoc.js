// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Select } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function SelectDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px10">
                    Panel
                </Title>
                <Select
                    onChange={() => {}}
                    withBorder
                    //selectValue
                    //withoutBorder
                    //disabled
                    //size
                    //defaultValue
                >
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </Select>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="html" style={docco}>
{`<Select
    onChange={() => {}}
    withBorder
    //selectValue
    //withoutBorder
    //disabled
    //size
    //defaultValue
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default SelectDoc;