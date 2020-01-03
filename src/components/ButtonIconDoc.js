// Modules
import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Components
import { Title, ButtonIcon } from 'bornlogic-react-components';

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

function ButtonIconDoc() {
    return (
        <>
        <Spacing>
            <Title tag="h3" marginBottom="px20">
                ButtonIcon
            </Title>
            <Title tag="h4" marginBottom="px10">
                Basic usage
            </Title>
            <ButtonIcon onClick={() => alert('ButtonIcon was clicked')} />
            <SyntaxHighlighter language="react" style={docco}>
{`<ButtonIcon onClick={() => alert('ButtonIcon was clicked')} />
`}
            </SyntaxHighlighter>    
        </Spacing>
         <Spacing id="buttonClose">
         <Title tag="h4" marginBottom="px20">
             Props
         </Title>
         <Spacing>
             <Text bold>
                 color
             </Text>
             <Text>
                 It defines a different color to the icon (default blueGrey3)
             </Text>
             <Text>
                 type: string
             </Text>
             <Spacing>
                 <ButtonIcon
                    onClick={() => alert('ButtonIcon was clicked')}
                    color='green3'
                     styleguide
                 />
             </Spacing>
             <Spacing>
                 <SyntaxHighlighter language="react" style={docco}>
{`<ButtonIcon
 onClick={() => alert('ButtonIcon was clicked')}
 color='green3'
/>
`}
                 </SyntaxHighlighter>
             </Spacing>
         </Spacing>
         
        </Spacing>
        </>
    )
}

export default ButtonIconDoc;