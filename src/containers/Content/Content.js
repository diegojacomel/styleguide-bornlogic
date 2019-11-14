// Modules
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

// Components
import { Container } from 'bornlogic-react-components';

// Routes
import MyRouter from 'router/router';

const ContentWrapper = styled('div')`
    background: #ffffff;
    color: #333333;
    padding: 20px 0;
    flex-basis: calc(100% - 320px);
    box-sizing: border-box;
    flex-shrink: 1;
    flex-grow: 0;
    max-width: 100%;
`

function Content() {
    return (
        <ContentWrapper>
            <Container>
                <MyRouter />
            </Container>
        </ContentWrapper>
    )
}

export default withRouter(Content);