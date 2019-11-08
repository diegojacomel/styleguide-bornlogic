// Modules
import React from 'react';
import styled from 'styled-components';

// Containers
import Header from 'containers/Header/Header';
import Content from 'containers/Content/Content';

const AppWrapper = styled('div')``

function App() {
    return (
        <AppWrapper>
            <Header />
            <Content />
        </AppWrapper>
    );
}

export default App;
