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

function InputDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Input
            </Title>
            <Title tag="h4" marginBottom="px20">
                Basic usage
            </Title>
            <Spacing>
                <Input />
                <SyntaxHighlighter language="react" style={docco}>
{`<Input />`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        type
                    </Text>
                    <Text>
                        It specifies the input type.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        id
                    </Text>
                    <Text>
                        It specifies the input id.
                    </Text>
                    <Text>
                        type: any
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        name
                    </Text>
                    <Text>
                        It specifies the input name.
                    </Text>
                    <Text>
                        type: any
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        value
                    </Text>
                    <Text>
                        It specifies the input value.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        onChange, onBlur, onFocus, onKeyUp
                    </Text>
                    <Text>
                        They're responsible to trigger some function when change/blur/focus/keyUp something on the input.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Input 
                        onChange={(e) => console.log(`Você digitou: ${e.target.value}`)}
                    />
                    <SyntaxHighlighter language="react" style={docco}>
{`<Input 
    onChange={(e) => console.log("Você digitou: {e.target.value}")}
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        placeholder
                    </Text>
                    <Text>
                        It define the input placeholder.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Input 
                        placeholder="Type your text here"
                    />
                    <SyntaxHighlighter language="react" style={docco}>
{`<Input 
    placeholder="Type your text here"
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        withoutBorder
                    </Text>
                    <Text>
                        It specifies if the input component will be border.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Input 
                        withoutBorder={true}
                        placeholder="Type your text here"
                    />
                    <SyntaxHighlighter language="react" style={docco}>
{`<Input 
    withoutBorder
    placeholder="Type your text here"
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        disabled
                    </Text>
                    <Text>
                        It specifies if the input component is disabled.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Input 
                        disabled={true}
                    />
                    <SyntaxHighlighter language="react" style={docco}>
{`<Input 
    disabled
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default InputDoc;

// type="text"
// onChange={(e) => console.log(`Content typed: ${e.target.value}`)}
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