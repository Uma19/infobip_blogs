import * as React from 'react';
import styled from 'styled-components';

const StyledOverlayUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

const StyledOverlayA = styled.a`
    background-color: transparent !important
    span {
        left: 10px
    }
`;

export const CustomPopover = () => {
    return (
        <div
            className="fade in"
            style={{
                top: '30%',
                left: '40%',
                position: 'absolute',
                backgroundColor: '#EEE',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
                border: '1px solid #CCC',
                zIndex: 100,
                height: 'inherit',
                borderRadius: '50em',
                width: '40px'
            }}
        >
            <StyledOverlayUl>
                <li>
                    <StyledOverlayA> <span className="glyphicon glyphicon-plus" /></StyledOverlayA>
                    <StyledOverlayA> <span className="glyphicon glyphicon-print" /></StyledOverlayA>
                    <StyledOverlayA> <span className="glyphicon glyphicon-search" /></StyledOverlayA>
                </li>
            </StyledOverlayUl>
        </div>
    );
};
