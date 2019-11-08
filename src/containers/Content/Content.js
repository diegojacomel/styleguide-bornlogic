// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import { Container, Title } from 'bornlogic-react-components';

// Local Components
import GettingStarted from 'components/GettingStarted';
import ButtonDoc from 'components/ButtonDoc';

const ContentWrapper = styled('header')`
    background: #ffffff;
    color: #333333;
    padding: 10px 0;
    flex-basis: 75%;
`

function Content() {
    return (
        <ContentWrapper>
            <Container>
                <Title tag="h2" marginBottom="px10">
                    Getting Started
                </Title>
                <GettingStarted />

                <Title tag="h2" marginBottom="px10">
                    Components
                </Title>

                <ButtonDoc />
            </Container>
        </ContentWrapper>
    )
}

export default Content;