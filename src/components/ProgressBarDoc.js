// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ProgressBar } from 'bornlogic-react-components';

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

function ProgressBarDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    ProgressBar
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <ProgressBar percentage={60} color="#1b7db5" />
                <SyntaxHighlighter language="react" style={docco}>
{`<ProgressBar percentage={60} color="#1b7db5" />
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        percentage
                    </Text>
                    <Text>
                        It define the ProgressBar percentage.
                    </Text>
                    <Text>
                        type: number
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        color
                    </Text>
                    <Text>
                        It define the hexadecimal color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default ProgressBarDoc;