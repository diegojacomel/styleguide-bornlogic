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

function ImageDoc() {
    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                Image
            </Title>
            <Spacing>
                <Image
                    src="https://picsum.photos/200/300"
                    alt="Image description"
                />
                <SyntaxHighlighter language="html" style={docco}>
{`<Image
    src="https://picsum.photos/200/300"
    alt="Image description"
/>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default ImageDoc;