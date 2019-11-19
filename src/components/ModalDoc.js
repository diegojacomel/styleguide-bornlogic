// Modules
import React, { useState } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Modal, Button } from 'bornlogic-react-components';

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

function ModalDoc() {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                Modal
            </Title>
            <Title tag="h4" marginBottom="px20">
                Basic usage
            </Title>
            <Button onClick={() => setToggleModal(true)}>
                Open Modal
            </Button>
            <Modal
                visible={toggleModal}
                onClickAway={() => setToggleModal(false)}
                title="Title"
                cancelButton={() => setToggleModal(false)}
                cancelButtonText="Close"
                confirmButton={() => setToggleModal(false)}
                confirmButtonText="Finish"
            >
                <div style={{ padding: '30px' }}>
                    Content
                </div>
            </Modal>
            <Spacing>
                <SyntaxHighlighter language="react" style={docco}>
{`<Button onClick={() => setToggleModal(true)}>
    Open Modal
</Button>
<Modal
    visible={toggleModal}
    onClickAway={() => setToggleModal(false)}
    title="Title"
    cancelButton={() => setToggleModal(false)}
    cancelButtonText="Close"
    confirmButton={() => setToggleModal(false)}
    confirmButtonText="Finish"
>
    <div style={{ padding: '30px' }}>
        Content
    </div>
</Modal>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing>
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        visible
                    </Text>
                    <Text>
                        It specifies if the modal will be shown.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        onClickAway
                    </Text>
                    <Text>
                        It's responsible to trigger a function that close the modal.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        title
                    </Text>
                    <Text>
                        It define the modal title.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        cancelButton
                    </Text>
                    <Text>
                        It's responsible to trigger a function when left button is clicked.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        cancelButtonText
                    </Text>
                    <Text>
                        It define the left button text.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        confirmButton
                    </Text>
                    <Text>
                        It's responsible to trigger a function when right button is clicked.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        confirmButtonText
                    </Text>
                    <Text>
                        It define the right button text.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
            </Spacing>
        </Spacing>
    )
}

export default ModalDoc;