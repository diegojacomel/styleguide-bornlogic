// Modules
import React, { useState } from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, FormControl, Checkbox, Label } from 'bornlogic-react-components';

const Spacing = styled('div')`
    margin-bottom: 40px;
`

const Text = styled('p')`
${({ bold }) =>`
    ${bold
        ?
        `
        font-weight: bold;
        `
        :
        ``
    }
`}`


function CheckboxDoc() {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <Spacing>
                <Title tag="h3" marginBottom="px20">
                    Checkbox
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <FormControl inline>
                    <Checkbox
                        name="checkbox_1"
                        id="checkbox_1"
                        color="blue3"
                        onClick={toggleCheck}
                        checked={isChecked}
                    />
                    <Label leftSpace htmlFor="checkbox_1">
                        Checkbox 1
                    </Label>
                </FormControl>
                <SyntaxHighlighter language="react" style={docco}>
{`<FormControl inline>
    <Checkbox
        name="checkbox_1"
        color="blue3"
    />
    <Label leftSpace htmlFor="checkbox_1">
        Checkbox 1
    </Label>
</FormControl>
`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing id="Checkbox">
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        type
                    </Text>
                    <Text>
                        It specifies the checkbox type.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        name
                    </Text>
                    <Text>
                        It specifies the checkbox name.
                    </Text>
                    <Text>
                        type: string, number
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        id
                    </Text>
                    <Text>
                        It specifies the checkbox id.
                    </Text>
                    <Text>
                        type: string, number
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        checked
                    </Text>
                    <Text>
                        It specifies if the checkbox is checked.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        onClick
                    </Text>
                    <Text>
                        It define what function will be triggered when the checkbox is selected or unselected.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                </Spacing>
                <Spacing>
                    <Spacing>
                        <Text bold>
                            color
                        </Text>
                        <Text>
                            It define the checkbox color.
                        </Text>
                        <Text>
                            type: string
                        </Text>
                    </Spacing>
                    <FormControl inline>
                        <Checkbox
                            name="checkbox_2"
                            id="checkbox_2"
                            onClick={toggleCheck}
                            color="green3"
                            checked={isChecked}
                        />
                        <Label leftSpace htmlFor="checkbox_2">
                            Checkbox 2
                        </Label>
                    </FormControl>
                    <SyntaxHighlighter language="react" style={docco}>
{`<FormControl inline>
    <Checkbox
        name="checkbox_1"
        id="checkbox_1"
        onClick={(e) => console.log('You {!!e.target.checked ? '' : 'un'}selected the checkbox: {e.target.name}')}
        color="green3"
    />
    <Label leftSpace htmlFor="checkbox_1">
        Checkbox 1
    </Label>
</FormControl>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </>
    )
}

export default CheckboxDoc;