// Modules
import React from 'react';
import styled from 'styled-components';

// Containers
import Header from 'containers/Header/Header';
import Sidebar from 'containers/Sidebar/Sidebar';
import Content from 'containers/Content/Content';

const AppWrapper = styled('div')``

const ContentWrapper = styled('main')`
    display: flex;
    align-items: stretch;
    padding-top: 70px;
    height: calc(100vh - 70px);
`

function App() {
    return (
        <AppWrapper>
            <Header />
            <ContentWrapper>
                <Sidebar />
                <Content />
            </ContentWrapper>
        </AppWrapper>
    );
}

export default App;
