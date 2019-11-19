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

function SelectDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Select
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <Select>
                    <option value="">Select some option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                </Select>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<Select>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        onChange
                    </Text>
                    <Text>
                        It's responsible to trigger any function when the user select some option.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Select
                        onChange={(e) => alert(`You selected the Option ${e.target.value}`)}
                    >
                        <option value="">Select some option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Select>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Select
    onChange={(e) => alert('You selected the Option {e.target.value}')}
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        withBorder
                    </Text>
                    <Text>
                        It define if the select component will have border.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Select
                        withBorder
                    >
                        <option value="">Select some option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Select>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Select
    withBorder
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        withoutBorder
                    </Text>
                    <Text>
                        It define if the select component won't any border.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Select
                        withoutBorder
                    >
                        <option value="">Select some option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Select>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Select
    withoutBorder
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        disabled
                    </Text>
                    <Text>
                        It define if the select component is disabled.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Select
                        disabled
                    >
                        <option value="">Select some option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Select>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Select
    disabled
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        size
                    </Text>
                    <Text>
                        It define the select size.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Select
                        size="px14"
                    >
                        <option value="">Select some option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                    </Select>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Select
    size="px14"
>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
</Select>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        selectValue
                    </Text>
                    <Text>
                        It define the selected value.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        defaultValue
                    </Text>
                    <Text>
                        It define the initial selected value.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default SelectDoc;