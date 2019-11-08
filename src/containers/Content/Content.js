// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import { Container, Title } from 'bornlogic-react-components';

// Local Components
import GettingStarted from 'components/GettingStarted';
import ButtonDoc from 'components/ButtonDoc';
import ButtonCloseDoc from 'components/ButtonCloseDoc';
import ButtonIconDoc from 'components/ButtonIconDoc';
import CheckboxDoc from 'components/CheckboxDoc';

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
                <ButtonCloseDoc />
                <ButtonIconDoc />
                <CheckboxDoc />
            </Container>
        </ContentWrapper>
    )
}

export default Content;