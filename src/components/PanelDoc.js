// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Panel } from 'bornlogic-react-components';

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

function PanelDoc() {
    return (
        <Spacing>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Panel
                </Title>
                <Title tag="h4" marginBottom="px20">
                    Basic usage
                </Title>
                <Panel
                    title="Title"
                    subtitle="Subtitle"
                    subtitleColor="green3"
                    showBoxShadow
                    showBorder
                >
                    Content
                </Panel>
            </Spacing>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<Panel
    title="Title"
    subtitle="Subtitle"
    subtitleColor="green3"
    showBoxShadow
    showBorder
>
    Content
</Panel>
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
                        It define the panel title.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        subtitle
                    </Text>
                    <Text>
                        It define the panel subtitle.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        subtitleColor
                    </Text>
                    <Text>
                        It define the panel subtitle color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        showBoxShadow
                    </Text>
                    <Text>
                        It define if the panel will have shadow.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        showBorder
                    </Text>
                    <Text>
                        It define if the panel will have border.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default PanelDoc;