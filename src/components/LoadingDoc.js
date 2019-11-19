// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, LocalLoading } from 'bornlogic-react-components';

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

function LocalLoadingDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Loading
            </Title>
            <Title tag="h4" marginBottom="px20">
                Basic usage
            </Title>
            <Spacing>
                <LocalLoading />
                <SyntaxHighlighter language="react" style={docco}>
{`<LocalLoading />
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        isLoading
                    </Text>
                    <Text>
                        It specifies if the Loading component will be shown.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <LocalLoading isLoading={true} />
                    <SyntaxHighlighter language="react" style={docco}>
    {`<LocalLoading isLoading={true} />
    `}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default LocalLoadingDoc;