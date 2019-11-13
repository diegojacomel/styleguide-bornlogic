// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, Button } from 'bornlogic-react-components';

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

function ButtonDoc() {
    return (
        <>
            <Spacing id="button">
                <Title tag="h3" marginBottom="px20">
                    Button
                </Title>
                <Title tag="h4" marginBottom="px10">
                    Basic usage
                </Title>
                <Button>Click here</Button>
                <SyntaxHighlighter language="react" style={docco}>
                    {`<Button>Click here</Button>`}
                </SyntaxHighlighter>
            </Spacing>
            <Spacing id="button">
                <Title tag="h4" marginBottom="px20">
                    Props
                </Title>
                <Spacing>
                    <Text bold>
                        type
                    </Text>
                    <Text>
                        It specifies the button type
                    </Text>
                    <Text>
                        type: string
                    </Text>
                </Spacing>
                <Spacing>
                    <Text bold>
                        backgroundColor
                    </Text>
                    <Text>
                        It define the button background color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button backgroundColor="green3" backgroundHoverColor="green2">Green</Button>
                        <Button backgroundColor="blue2" backgroundHoverColor="blue1">Blue</Button>
                        <Button backgroundColor="red3" backgroundHoverColor="red2">Red</Button>
                        <Button backgroundColor="orange3" backgroundHoverColor="orange2">Orange</Button>
                        <Button backgroundColor="grey3" backgroundHoverColor="grey2">Grey</Button>
                        <Button backgroundColor="pink">Pink</Button>
                        <Button backgroundColor="purple">Purple</Button>
                        <Button backgroundColor="brown">Brown</Button>
                    </Spacing>
                    <Spacing>
                        <SyntaxHighlighter language="react" style={docco}>
{`<Button backgroundColor="green3" backgroundHoverColor="green2">Green</Button>
<Button backgroundColor="blue2" backgroundHoverColor="blue1">Blue</Button>
<Button backgroundColor="red3" backgroundHoverColor="red2">Red</Button>
<Button backgroundColor="orange3" backgroundHoverColor="orange2">Orange</Button>
<Button backgroundColor="grey3" backgroundHoverColor="grey2">Grey</Button>
<Button backgroundColor="pink">Pink</Button>
<Button backgroundColor="purple">Purple</Button>
<Button backgroundColor="brown">Brown</Button>
`}
                        </SyntaxHighlighter>
                    </Spacing>
                </Spacing>
                <Spacing>
                    <Text bold>
                        fontColor
                    </Text>
                    <Text>
                        It define the button font color.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button fontColor="purple" backgroundColor="pink" fontHoverColor="white">Grey</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button fontColor="purple" backgroundColor="pink" fontHoverColor="white">Grey</Button>
`}                        
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        outline
                    </Text>
                    <Text>
                        It define if show the color on the background or only on border.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                    <Spacing>
                        <Button backgroundColor="green3" outline>Green</Button>
                        <Button backgroundColor="blue2" outline>Blue</Button>
                        <Button backgroundColor="red3" outline>Red</Button>
                        <Button backgroundColor="orange3" outline>Orange</Button>
                        <Button backgroundColor="pink" outline>Pink</Button>
                        <Button backgroundColor="purple" outline>Purple</Button>
                        <Button backgroundColor="brown" outline>Brown</Button>
                        <Button backgroundColor="grey3" outline>Grey</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button backgroundColor="green3" outline>Green</Button>
<Button backgroundColor="blue2" outline>Blue</Button>
<Button backgroundColor="red3" outline>Red</Button>
<Button backgroundColor="orange3" outline>Orange</Button>
<Button backgroundColor="pink" outline>Pink</Button>
<Button backgroundColor="purple" outline>Purple</Button>
<Button backgroundColor="brown" outline>Brown</Button>
<Button backgroundColor="grey3" outline>Grey</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        fontSize
                    </Text>
                    <Text>
                        It define the button font size.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button fontSize="px8">fontSize</Button>
                        <Button fontSize="px10">fontSize</Button>
                        <Button fontSize="px11">fontSize</Button>
                        <Button fontSize="px12">fontSize</Button>
                        <Button fontSize="px14">fontSize</Button>
                        <Button fontSize="px16">fontSize</Button>
                        <Button fontSize="px18">fontSize</Button>
                        <Button fontSize="px20">fontSize</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button fontSize="px8">fontSize</Button>
<Button fontSize="px10">fontSize</Button>
<Button fontSize="px11">fontSize</Button>
<Button fontSize="px12">fontSize</Button>
<Button fontSize="px14">fontSize</Button>
<Button fontSize="px16">fontSize</Button>
<Button fontSize="px18">fontSize</Button>
<Button fontSize="px20">fontSize</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        size
                    </Text>
                    <Text>
                        It define the button size.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button size="px5">Size</Button>
                        <Button size="px10">Size</Button>
                        <Button size="px15">Size</Button>
                        <Button size="px16">Size</Button>
                        <Button size="px20">Size</Button>
                        <Button size="px30">Size</Button>
                        <Button size="px40">Size</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button size="px5">Size</Button>
<Button size="px10">Size</Button>
<Button size="px15">Size</Button>
<Button size="px16">Size</Button>
<Button size="px20">Size</Button>
<Button size="px30">Size</Button>
<Button size="px40">Size</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        rounded
                    </Text>
                    <Text>
                        It define the button rounded.
                    </Text>
                    <Text>
                        type: string
                    </Text>
                    <Spacing>
                        <Button rounded="none">Rounded</Button>
                        <Button rounded="px3">Rounded</Button>
                        <Button rounded="px5">Rounded</Button>
                        <Button rounded="px10">Rounded</Button>
                        <Button rounded="full">Rounded</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button rounded="none">Rounded</Button>
<Button rounded="px3">Rounded</Button>
<Button rounded="px5">Rounded</Button>
<Button rounded="px10">Rounded</Button>
<Button rounded="full">Rounded</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        block
                    </Text>
                    <Text>
                        It define if the button will have 100% width related with the parents.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                    <Spacing>
                        <Button block>Block</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button block>Block</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        disabled
                    </Text>
                    <Text>
                        It define if the button is disabled.
                    </Text>
                    <Text>
                        type: boolean
                    </Text>
                    <Spacing>
                        <Button disabled>Disabled</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button disabled>Disabled</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
                <Spacing>
                    <Text bold>
                        onClick
                    </Text>
                    <Text>
                        It's responsible to trigger some function.
                    </Text>
                    <Text>
                        type: function
                    </Text>
                    <Spacing>
                        <Button onClick={() => alert('Button was clicked')}>onClick</Button>
                    </Spacing>
                    <SyntaxHighlighter language="react" style={docco}>
{`<Button onClick={() => alert('Button was clicked')}>onClick</Button>
`}
                    </SyntaxHighlighter>
                </Spacing>
            </Spacing>
        </>
    )
}

export default ButtonDoc;