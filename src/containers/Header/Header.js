// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import { Title } from 'bornlogic-react-components';

const HeaderWrapper = styled('header')`
    background: #1d87c8;
    color: #ffffff;
    padding: 10px 30px;
    text-align: center;
`

function Header() {
    return (
        <HeaderWrapper>
            <Title tag="h3" color="grey3" marginBottom="0">
                Bornlogic React Components
            </Title>
        </HeaderWrapper>
    )
}

export default Header;