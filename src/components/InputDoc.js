// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Input } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

function InputDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                Input
            </Title>
            <Spacing>
                <Input
                    type="text"
                    onChange={(e) => console.log(`Content typed: ${e.target.value}`)}
                    // id={id}
                    // name={name}
                    // block={block}
                    // disabled={disabled}
                    // value={value}
                    // withoutBorder={withoutBorder}
                    // onBlur={onBlur}
                    // onFocus={onFocus}
                    // onKeyUp={onKeyUp}
                    // onChange={onChange}
                />
                <SyntaxHighlighter language="html" style={docco}>
{`<Input
    type="text"
    onChange={(e) => console.log('Content typed: {e.target.value}')}
    // id={id}
    // name={name}
    // block={block}
    // disabled={disabled}
    // value={value}
    // withoutBorder={withoutBorder}
    // onBlur={onBlur}
    // onFocus={onFocus}
    // onKeyUp={onKeyUp}
    // onChange={onChange}
/>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default InputDoc;