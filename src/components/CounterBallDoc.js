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

function CounterBallDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                CounterBall
            </Title>
            <CounterBall
                backgroundColor="green3"
                fontColor="white"
                counter={10}
                alignTop
            />
            <SyntaxHighlighter language="html" style={docco}>
{`<CounterBall
    backgroundColor="green3"
    fontColor="white"
    counter={10}
    alignTop
/>
`}
            </SyntaxHighlighter>
        </Spacing>
    )
}

export default CounterBallDoc;