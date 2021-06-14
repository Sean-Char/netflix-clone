import React, { useState, useContext, createContext } from 'react'
import { Body, Title, Header, Container, Inner, Item, Frame } from './styles/accordion'

const toggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    ) 
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState(false)

    return  <toggleContext.Provider value={{ toggleShow, setToggleShow}}>
                <Item {...restProps}>{children}</Item>
            </toggleContext.Provider>       
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const {toggleShow, setToggleShow} = useContext(toggleContext)

    return (
        <Header {...restProps} onClick={() => setToggleShow(!toggleShow)}>
            {children}
            {toggleShow ? (
                <img src="https://sean-char.github.io/netflix-clone/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="https://sean-char.github.io/netflix-clone/images/icons/add.png" alt="Open" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const {toggleShow} = useContext(toggleContext)
    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}