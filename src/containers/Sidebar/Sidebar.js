// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import ComponentsList from 'containers/ComponentsList/ComponentsList'
import { Title } from 'bornlogic-react-components';

const SidebarWrapper = styled('aside')`
    flex-basis: 320px;
    flex-grow: 1;
    flex-shrink: 0;
    height: 100%;
    max-height: 100%;
    position: relative;
`

const SidebarFixed = styled('div')`
    position: fixed;
    height: calc(100vh - 70px);
    width: 320px;
    border-right: 1px solid #f2f2f2;
    box-sizing: border-box;
    padding: 30px;
    overflow: auto;
`

function Sidebar() {
    return (
        <SidebarWrapper>
            <SidebarFixed>
                <Title tag="h3" color="grey3" marginBottom="px30">
                    Components list
                </Title>
                <ComponentsList />
            </SidebarFixed>
        </SidebarWrapper>
    )
}

export default Sidebar;