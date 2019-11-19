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

function RadioDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Panel
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <FormControl>
                    <Radio name="radio" id="radio_1" text="Option 1" />
                    <Radio name="radio" id="radio_2" text="Option 2" />
                </FormControl>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<FormControl>
    <Radio name="radio" id="radio_1" text="Option 1" />
    <Radio name="radio" id="radio_2" text="Option 2" />
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
                        name
                    </Text>
                    <Text>
                        It define the radio name.
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
                        It define the radio id.
                    </Text>
                    <Text>
                        type: any
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        text
                    </Text>
                    <Text>
                        It define the radio label.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default RadioDoc;