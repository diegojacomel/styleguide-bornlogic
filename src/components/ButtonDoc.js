// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Button } from 'bornlogic-react-components';

const ButtonWrapper = styled('div')`
    margin-bottom: 40px;
`

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

function ButtonDoc() {
    return (
        <>
            <ButtonWrapper id="button">
                <Title tag="h3" marginBottom="px10">
                    Button
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <Button>Click here</Button>
                <SyntaxHighlighter language="html" style={docco}>
                    {`<Button>Click here</Button>`}
                </SyntaxHighlighter>
            </ButtonWrapper>
            <ButtonWrapper id="button">
                <Title tag="h4" marginBottom="px10">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        type
                    </Text>
                    <Text>
                        It specifies the button's type
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        backgroundColor
                    </Text>
                    <Text>
                        It define the button background color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button backgroundColor="green3">Green</Button>
                        <Button backgroundColor="blue2">Blue</Button>
                        <Button backgroundColor="red3">Red</Button>
                        <Button backgroundColor="orange3">Orange</Button>
                        <Button backgroundColor="pink">Pink</Button>
                        <Button backgroundColor="purple">Purple</Button>
                        <Button backgroundColor="brown">Brown</Button>
                        <Button backgroundColor="grey3">Grey</Button>
                    </Spacing>
                    <Spacing>
                        <SyntaxHighlighter language="html" style={docco}>
{`<Button backgroundColor="green3">Green</Button>
<Button backgroundColor="blue2">Blue</Button>
<Button backgroundColor="red3">Red</Button>
<Button backgroundColor="orange3">Orange</Button>
<Button backgroundColor="pink">Pink</Button>
<Button backgroundColor="purple">Purple</Button>
<Button backgroundColor="brown">Brown</Button>
<Button backgroundColor="grey3">Grey</Button>
`}
                        </SyntaxHighlighter>
                    </Spacing>
                </Spacing>
            </ButtonWrapper>
        </>
    )
}

export default ButtonDoc;