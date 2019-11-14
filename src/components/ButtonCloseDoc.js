// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ButtonClose } from 'bornlogic-react-components';

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

function ButtonCloseDoc() {
    return (
        <>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    ButtonClose
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <ButtonClose styleguide />
                <SyntaxHighlighter language="react" style={docco}>
{`<ButtonClose />
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing id="buttonClose">
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        showButton
                    </Text>
                    <Text>
                        It define if the button will be shown.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                    <Spacing>
                        <ButtonClose
                            showButton={true}
                            styleguide
                        />
                    </Spacing>
                    <Spacing>
                        <SyntaxHighlighter language="react" style={docco}>
{`<ButtonClose
    showButton={true}
/>
`}
                        </SyntaxHighlighter>
                    </Spacing>
                </Spacing>
                <Spacing>
                    <Text bold>
                    onClick
                    </Text>
                    <Text>
                        It define what function will be triggered when the button is clicked.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                    <Spacing>
                        <ButtonClose
                            onClick={() => alert('You clicked on ButtonClose component')}
                            showButton={true}
                            styleguide
                        />
                    </Spacing>
                    <Spacing>
                        <SyntaxHighlighter language="react" style={docco}>
{`<ButtonClose
    onClick={() => alert('You clicked on ButtonClose component')}
    showButton={true}
/>
`}
                        </SyntaxHighlighter>
                    </Spacing>
                </Spacing>
            </Spacing>
        </>
    )
}

export default ButtonCloseDoc;