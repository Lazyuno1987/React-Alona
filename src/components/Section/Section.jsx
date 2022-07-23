// import React from "react";
import PropTypes from 'prop-types';
import {SectionCont, Container, Title} from './Section.styled'

export default function Section({ title, children }) {
    return (
        <SectionCont>
            <Container>
            {title && <Title>{title}</Title>}
                {children}
                </Container>
        </SectionCont>
    )
}

Section.prototype = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

