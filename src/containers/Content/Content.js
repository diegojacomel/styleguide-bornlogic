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
import ContainerDoc from 'components/ContainerDoc';
import CounterBallDoc from 'components/CounterBallDoc';
import EmptyContentDoc from 'components/EmptyContentDoc';
import FormControlDoc from 'components/FormControlDoc';
import ImageDoc from 'components/ImageDoc';
import InputDoc from 'components/InputDoc';
import LabelDoc from 'components/LabelDoc';
import LoadingDoc from 'components/LoadingDoc';
import ModalDoc from 'components/ModalDoc';
import PanelDoc from 'components/PanelDoc';
import ProgressBarDoc from 'components/ProgressBarDoc';
import RadioDoc from 'components/RadioDoc';
import SelectDoc from 'components/SelectDoc';
import TitleDoc from 'components/TitleDoc';

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
                <ContainerDoc />
                <CounterBallDoc />
                <EmptyContentDoc />
                <FormControlDoc />
                <ImageDoc />
                <InputDoc />
                <LabelDoc />
                <LoadingDoc />
                <ModalDoc />
                <PanelDoc />
                <ProgressBarDoc />
                <RadioDoc />
                <SelectDoc />
                <TitleDoc />
            </Container>
        </ContentWrapper>
    )
}

export default Content;