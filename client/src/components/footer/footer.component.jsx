import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { footerHeight } from '../../global.styles';
import { ReactComponent as FacebookSVG } from './../../assets/icons/facebook.svg';
import { ReactComponent as TwitterSVG } from './../../assets/icons/twitter.svg';
import { ReactComponent as InstagramSVG } from './../../assets/icons/instagram.svg';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterOption>
                <FooterOptionTitle>EXPLORE</FooterOptionTitle>
                <FooterOptionList>
                    <li>
                        <OptionLink to='/shop/hats'>Hats</OptionLink>
                    </li>
                    <li>
                        <OptionLink to='/shop/jackets'>Jackets</OptionLink>
                    </li>
                    <li>
                        <OptionLink to='/shop/sneakers'>Sneakers</OptionLink>
                    </li>
                    <li>
                        <OptionLink to='/shop/womens'>Womens</OptionLink>
                    </li>
                    <li>
                        <OptionLink to='/shop/mens'>Mens</OptionLink>
                    </li>
                </FooterOptionList>
            </FooterOption>
            <FooterOption>
                <FooterOptionTitle>CONTACT US</FooterOptionTitle>
                <FooterOptionList>
                    <li>043-688-36954</li>
                    <li>Strickstrasse 117, Zürich</li>
                    <li>sales@gorillabross.com</li>
                </FooterOptionList>
            </FooterOption>
            <FooterOption>
                <FooterOptionTitle>FOLLOW US</FooterOptionTitle>
                <SocialMediaList>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://facebook.com'
                        >
                            <FacebookLogo />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://twitter.com'
                        >
                            <TwitterLogo />
                        </a>
                    </li>
                    <li>
                        <a
                            target='_blank'
                            rel='noreferrer'
                            href='https://instagram.com'
                        >
                            <InstagramLogo />
                        </a>
                    </li>
                </SocialMediaList>
            </FooterOption>
        </FooterContainer>
    );
};

// *** STYLES ***

const stylesSVG = css`
    height: 20px;
    width: 20px;

    path {
        fill: #fff !important;
    }
`;

const FooterContainer = styled.div`
    background-color: #000;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    min-height: ${footerHeight.desktop}px;
    left: 0;
    padding: 20px 50px;
    position: absolute;
    width: 100%;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        padding: 20px;
    }
`;

const FooterOption = styled.div`
    @media screen and (max-width: 800px) {
        margin: 12px 0;
    }
`;

const FooterOptionTitle = styled.h3`
    color: #8a6c26;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 7px;
`;

const FooterOptionList = styled.ul`
    li {
        font-size: 18px;
    }
`;

const SocialMediaList = styled.ul`
    display: flex;

    li {
        margin: 0 7px;
    }
`;

const OptionLink = styled(Link)`
    color: #fff;

    &:hover {
        color: #8a6c26;
    }
`;

const FacebookLogo = styled(FacebookSVG)`
    ${stylesSVG}
`;

const TwitterLogo = styled(TwitterSVG)`
    ${stylesSVG}
`;

const InstagramLogo = styled(InstagramSVG)`
    ${stylesSVG}
`;
