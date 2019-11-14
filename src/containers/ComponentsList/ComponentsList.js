// Modules
import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';

// Components
import { Link } from 'react-router-dom';
import { FormControl, Label, Input } from 'bornlogic-react-components';

const List = styled('ul')`
    padding-left: 10px;
`

const ItemList = styled('li')`
    list-style-type: none;
    margin-bottom: 5px;
`

const CustomLink = styled(Link)`
${({ actived }) =>`
    color: #333333;
    text-decoration: none;
    &:hover {
        color: #561EA5;
    }
    ${!!actived
        ?
        `
            color: #561EA5;
            font-weight: bold;
        `
        :
        ``
    }
`}`

function ComponentsList(props) {
    const { location: { pathname } } = props;
    const [, updateState] = React.useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const [activedLink, setActivedLink] = useState([{
        path: '/Button',
        name: 'Button',
        active: 0,
        show: 1
    }, {
        path: '/ButtonClose',
        name: 'ButtonClose',
        active: 0,
        show: 1
    }, {
        path: '/ButtonIcon',
        name: 'ButtonIcon',
        active: 0,
        show: 1
    }, {
        path: '/Checkbox',
        name: 'Checkbox',
        active: 0,
        show: 1
    }, {
        path: '/Container',
        name: 'Container',
        active: 0,
        show: 1
    }, {
        path: '/CounterBall',
        name: 'CounterBall',
        active: 0,
        show: 1
    }, {
        path: '/EmptyContent',
        name: 'EmptyContent',
        active: 0,
        show: 1
    }, {
        path: '/FormControl',
        name: 'FormControl',
        active: 0,
        show: 1
    }, {
        path: '/Image',
        name: 'Image',
        active: 0,
        show: 1
    }, {
        path: '/Input',
        name: 'Input',
        active: 0,
        show: 1
    }, {
        path: '/Label',
        name: 'Label',
        active: 0,
        show: 1
    }, {
        path: '/Loading',
        name: 'Loading',
        active: 0,
        show: 1
    }, {
        path: '/Modal',
        name: 'Modal',
        active: 0,
        show: 1
    }, {
        path: '/Panel',
        name: 'Panel',
        active: 0,
        show: 1
    }, {
        path: '/ProgressBar',
        name: 'ProgressBar',
        active: 0,
        show: 1
    }, {
        path: '/Radio',
        name: 'Radio',
        active: 0,
        show: 1
    }, {
        path: '/Select',
        name: 'Select',
        active: 0,
        show: 1
    }, {
        path: '/Title',
        name: 'Title',
        active: 0,
        show: 1
    }]);

    const activeLink = (component) => {
        activedLink.forEach((link) => {
            if (pathname !== component.path) {
                link.active = 0;
            }
        });

        component.active = 1;

        setActivedLink(activedLink)
    }

    const filterComponents = (value) => {
        const filteredComponents = [];

        activedLink.forEach((component) => {
            if (component.name.toLowerCase().indexOf(value.toLowerCase()) === -1) {
                component.show = 0
            } else {
                component.show = 1
            }

            filteredComponents.push(component)
        })
        
        setActivedLink(filteredComponents);
    }

    useEffect(() => {
        if (activedLink.every(x => !x.active)) {
            const component = activedLink.find(x => x.path === pathname) || {};

            activeLink(component);
            forceUpdate()
        }

        if (activedLink.every(x => x.path !== pathname)) {
            activeLink({});
            forceUpdate()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activedLink, pathname]);
    
    return (
        <>
            <FormControl>
                <Label>
                    Search a component:
                </Label>
                <Input
                    placeholder="Find the components"
                    onChange={(e) => filterComponents(e.target.value)}
                />
            </FormControl>
            <List>
                {activedLink.map((component, index) => (
                    component.show === 1
                        ?
                        <ItemList key={index}>
                            <CustomLink to={`${component.path}`} onClick={() => activeLink(component)} actived={component.active}>
                                {component.name}
                            </CustomLink>
                        </ItemList>
                        :
                        null
                ))}
            </List>
        </>
    )
}

export default withRouter(ComponentsList);