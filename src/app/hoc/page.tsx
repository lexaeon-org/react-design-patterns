"use client"
import React from 'react';
import { StyledButton, StyledText } from './withStyles';

const page = () => {
    return (
        <div>
            <StyledButton onClick={() => alert("hi")}>Click me</StyledButton>
            <StyledText>Some text here</StyledText>
        </div>
    );
};

export default page;