import React from 'react';
import styled from "styled-components";

const Title = styled.h3`
    margin: 0;
`;

export default function PresentDetailHeader({nickname}) {
    return (
        <Title>{nickname} 님의 선물 🎁</Title>
    );
}