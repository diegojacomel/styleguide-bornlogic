// Modules
import React from 'react';
import styled from 'styled-components';

// Components
import { Link } from 'react-router-dom';
import { Title } from 'bornlogic-react-components';

const HeaderWrapper = styled('header')`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #561EA5;
    color: #ffffff;
    padding: 10px 30px;
    text-align: center;
    box-sizing: border-box;
    height: 70px;
    width: 100%;
    z-index: 1000;
`

const HeaderMenu = styled('ul')`
    margin: 0;
    padding: 0
`

const HeaderMenuItem = styled('li')`
    list-style-type: none;
`

const CustomLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
`

function Header() {
    return (
        <HeaderWrapper>
            <Title tag="h3" color="grey3" marginBottom="0">
                Bornlogic React Components
            </Title>
            <HeaderMenu>
                <HeaderMenuItem>
                    <CustomLink to="/">
                        Getting Started
                    </CustomLink>
                </HeaderMenuItem>
            </HeaderMenu>
        </HeaderWrapper>
    )
}

export default Header;