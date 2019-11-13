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

function ModalDoc() {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <Spacing>
            <Title tag="h3" marginBottom="px10">
                Modal
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
                Content
            </Modal>
            <Spacing>
                <SyntaxHighlighter language="html" style={docco}>
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
    Content
</Modal>
`}
                </SyntaxHighlighter>
            </Spacing>
        </Spacing>
    )
}

export default ModalDoc;