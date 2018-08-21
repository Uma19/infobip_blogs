import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar) `
    display: block;
    background-color: #da000d;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
    position: relative;
`;

const StyledNavbarBrand = styled(Navbar.Brand) `
    color: #ffffff !important;
    font-weight: 500;
`;

const BlogHeader = () => {
    return (
        <StyledNavbar>
            <Navbar.Header>
                <StyledNavbarBrand>
                    <span>Infobip related blogs</span>
                </StyledNavbarBrand>
            </Navbar.Header>
        </StyledNavbar>
    );
};
export default BlogHeader;