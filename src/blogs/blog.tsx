import * as React from 'react';
import styled from 'styled-components';
import { OverlayTrigger, Popover, Button, Overlay } from 'react-bootstrap';
import { Icontent } from './blog.interface';
import { CustomPopover } from '../custom';

const StyledBlogDiv = styled.div`
    border: none;
    border-radius: 6px;
    background-color: #aaa;
    position: relative;
    box-sizing: border-box;

    a {
        cursor: pointer;
        border-radius: 6px;
        display: block;
        padding: 0px;
        font-weight: bold;
        text-decoration: none;
        color: rgb(113, 113, 113);
        overflow: hidden;
        background: rgb(200, 215, 212);
        margin-top: 5px;
        max-height: 200px;

        img {
            transition: opacity 0.04s linear 0s;
            border-radius: inherit;
            opacity: 1;
            display: block;
            margin: 0px auto;
            border: 0px;
            width: 100%;
            z-index: 0;
            max-width: 100%;
            position: relative;
            background-repeat: no-repeat; 
        }
    }
`;

const StyledBlogA = styled.a`
    cursor: pointer;
    border-radius: 6px;
    display: block;
    padding: 0px;
    font-weight: bold;
    text-decoration: none;
    color: rgb(113, 113, 113);
    overflow: hidden;
    background: rgb(200, 215, 212);
    margin-top: 5px;
    max-height: 200px;

    img {
        transition: opacity 0.04s linear 0s;
        border-radius: inherit;
        opacity: 1;
        display: block;
        margin: 0px auto;
        border: 0px;
        width: 100%;
        z-index: 0;
        max-width: 100%;
        position: relative;
        background-repeat: no-repeat; 
    }
`;

const StyledInnerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 10;

    h2 span {
        color: #ffffb5;
        font: bold 24px/45px Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 0.7);
    }

    span {
        margin-left: 2px;
        margin-right: 2px;        
        color: #ffffff;
        font: bold 24px/45px Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 0.7);        
    }
`;

class Blog extends React.Component<any, any> {
    content: Icontent = {};
    show = null;

    constructor(props: Icontent) {
        super(props);
        this.content = props;
    }

    showData = () => {
        this.show = true;
        this.setState({
            show: true
        });
    }

    hideData = () => {
        this.show = false;
        this.setState({
            show: false
        });
    }

    render() {
        return (
            <StyledBlogDiv onMouseOver={this.showData} onMouseLeave={this.hideData}>
                <StyledBlogA>
                    <img src={this.content.images} />
                    <StyledInnerDiv>
                        <h2>
                            <span>
                                {this.content.title}
                            </span>
                        </h2>
                        <span> {this.content.description} </span>
                    </StyledInnerDiv>
                </StyledBlogA>
                <Overlay container={this} show={this.show}>
                    <CustomPopover />
                </Overlay>
            </StyledBlogDiv>
        );
    }
}

export default Blog;