// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Container } from 'bornlogic-react-components';

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

function ContainerDoc() {
    return (
        <>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Container
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <Container>
                    <div style={{ background: '#f2f2f2', width: '100%' }}>
                        Container
                    </div>
                </Container>
                <SyntaxHighlighter language="react" style={docco}>
{`<Container>
    <div style={{ background: '#f2f2f2', width: '100%' }}>
        Container
    </div>
</Container>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        maxWidth
                    </Text>
                    <Text>
                        It specifies the container max width.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Container maxWidth="200px">
                        <div style={{ background: '#f2f2f2', width: '100%' }}>
                            Container
                        </div>
                    </Container>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Container maxWidth="200px">
    <div style={{ background: '#f2f2f2', width: '100%' }}>
        Container
    </div>
</Container>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        noLeft
                    </Text>
                    <Text>
                        It specifies if the container has padding left.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Container noLeft={true}>
                        <div style={{ background: '#f2f2f2', width: '100%' }}>
                            Container
                        </div>
                    </Container>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Container noLeft={true}>
    <div style={{ background: '#f2f2f2', width: '100%' }}>
        Container
    </div>
</Container>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        spacingDefault
                    </Text>
                    <Text>
                        It keeps the padding left of 30px on screens smaller than 1200px if attribute noLeft is setted.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Container noLeft spacingDefault>
                        <div style={{ background: '#f2f2f2', width: '100%' }}>
                            Container
                        </div>
                    </Container>
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Container spacingDefault>
    <div style={{ background: '#f2f2f2', width: '100%' }}>
        Container
    </div>
</Container>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </>
    )
}

export default ContainerDoc;