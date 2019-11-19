// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, EmptyContent } from 'bornlogic-react-components';

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

function EmptyContentDoc() {
    return (
        <>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    EmptyContent
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <EmptyContent
                    title="Title: "
                    message="My message"
                />
                <SyntaxHighlighter language="react" style={docco}>
{`<EmptyContent
    title="Title: "
    message="My message"
/>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        title
                    </Text>
                    <Text>
                        It specifies the component title.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
            <Spacing>
                <EmptyContent
                    title="Title: "
                />
                <SyntaxHighlighter language="react" style={docco}>
{`<EmptyContent
    title="Title: "
/>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Text bold>
                    message
                </Text>
                <Text>
                    It specifies the component message.
                </Text>
                <Text>
                    type: string
                </Text>
            </Spacing>
            <Spacing>
                <EmptyContent
                    message="My message"
                />
                <SyntaxHighlighter language="react" style={docco}>
{`<EmptyContent
    message="My message"
/>
`}
                </SyntaxHighlighter>
            </Spacing>
        </>
    )
}

export default EmptyContentDoc;