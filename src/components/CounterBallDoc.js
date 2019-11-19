// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, CounterBall } from 'bornlogic-react-components';

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

function CounterBallDoc() {
    return (
        <>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    CounterBall
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <CounterBall
                    backgroundColor="green3"
                    fontColor="white"
                    counter={10}
                />
                <SyntaxHighlighter language="react" style={docco}>
{`<CounterBall
    backgroundColor="green3"
    fontColor="white"
    counter={10}
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
                        backgroundColor
                    </Text>
                    <Text>
                        It specifies the CounterBall background color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <CounterBall
                        backgroundColor="green3"
                    />
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<CounterBall
    backgroundColor="green3"
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        fontColor
                    </Text>
                    <Text>
                        It specifies the CounterBall font color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <CounterBall
                        fontColor="black"
                    />
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<CounterBall
    fontColor="black"
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        counter
                    </Text>
                    <Text>
                        It specifies the value to be shown.
                    </Text>
                    <Text>
                        type: number
                    </Text>
                </Spacing>
                <Spacing>
                    <CounterBall
                        counter={5}
                    />
                </Spacing>
                <Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<CounterBall
    counter={5}
/>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </>
    )
}

export default CounterBallDoc;