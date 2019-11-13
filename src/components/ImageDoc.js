// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Image } from 'bornlogic-react-components';

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

function ImageDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Image
            </Title>
            <Title tag="h4" marginBottom="px20">
                Basic usage
            </Title>
            <Spacing>
                <Image
                    src="https://picsum.photos/200/300"
                    alt="Image description"
                />
                <SyntaxHighlighter language="react" style={docco}>
{`<Image
    src="https://picsum.photos/200/300"
    alt="Image description"
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
                        src
                    </Text>
                    <Text>
                        It specifies the image url to be shown.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
            <Spacing>
                <Text bold>
                    alt
                </Text>
                <Text>
                    It specifies the image description case the image can't to be shown.
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
                    It specifies the image id.
                </Text>
                <Text>
                    type: any
                </Text>
            </Spacing>
        </Spacing>
    )
}

export default ImageDoc;