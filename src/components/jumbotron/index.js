import React from 'react';
import { Container, Item, Inner, Title, SubTitle, Image, Pane} from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}

Jumbotron.Container = function JumbotronContainer({ children, ...resProps }) {
    return <Container {...resProps}>{children}</Container>
}

Jumbotron.Title = function JumbotronTitle({ children, ...resProps }) {
    return <Title {...resProps}>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return <Pane {...restProps}>{children}</Pane>;
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return <Image {...restProps} />
}