// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title } from 'bornlogic-react-components';

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

function TitleDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Title
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <Title>
                    Title example
                </Title>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<Title>
    Title example
</Title>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        tag
                    </Text>
                    <Text bold>
                        Options: h1, h2, h3, h4, h5, h6
                    </Text>
                    <Text>
                        It specifies the html tag.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Title tag="h1" marginBottom="px10">
                        Title 1
                    </Title>
                    <Title tag="h2" marginBottom="px10">
                        Title 2
                    </Title>
                    <Title tag="h3" marginBottom="px10">
                        Title 3
                    </Title>
                    <Title tag="h4" marginBottom="px10">
                        Title 4
                    </Title>
                    <Title tag="h5" marginBottom="px10">
                        Title 5
                    </Title>
                    <Title tag="h6" marginBottom="px10">
                        Title 6
                    </Title>
                </Spacing>
                <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<Title tag="h1" marginBottom="px10">
    Title 1
</Title>
<Title tag="h2" marginBottom="px10">
    Title 2
</Title>
<Title tag="h3" marginBottom="px10">
    Title 3
</Title>
<Title tag="h4" marginBottom="px10">
    Title 4
</Title>
<Title tag="h5" marginBottom="px10">
    Title 5
</Title>
<Title tag="h6" marginBottom="px10">
    Title 6
</Title>
`}
                </SyntaxHighlighter>
            </Spacing>
                <Spacing>
                    <Text bold>
                        marginBottom
                    </Text>
                    <Text>
                        It specifies the title margin bottom.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default TitleDoc;