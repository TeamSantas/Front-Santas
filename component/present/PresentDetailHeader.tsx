import React from 'react';
import styled from "styled-components";

const Title = styled.h2`
    test-align: center;
    margin: 0;
`;

export default function PresentDetailHeader({nickname}) {
    return (
        <Title>{nickname} 님이 보낸 선물입니다!</Title>
    );
}