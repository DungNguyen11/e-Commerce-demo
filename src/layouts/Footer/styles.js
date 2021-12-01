import styled from 'styled-components';

const btnIcon = 'https://www.joloves.com/svg-icons/arrow.svg'
const facebookIcon = 'https://www.joloves.com/svg-icons/footer/social/facebook.svg'
const instagramIcon = 'https://www.joloves.com/svg-icons/footer/social/instagram.svg'
const twitterIcon = 'https://www.joloves.com/svg-icons/footer/social/twitter.svg'

export const Footer = styled.div`
    background-color: #f5f5f5;
    width: 100%;
    padding: 24px;
    
    .footer-content {
        margin-bottom: 12px;
    }
`;

export const NewletterFormWrap  = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 12px;

    h4 {
        font-family: HCo Gotham, sans-serif;
        color: #000;
        letter-spacing: 1.6px;
        margin-bottom: 12px;
        padding: 0 12px;
    }

    .newsletter-form {
        width: 280px;
    }

    .newsletter-btn-icon {
        display: block;
        width: 36px;
        height: 20px;
        background-color: transparent;
        background: url(${btnIcon}) no-repeat 40%;
        opacity: 0.4;
        color: inherit;
        border-width: 0;
        padding: 0;
        line-height: 1em;
    }
    
    .newsletter-btn-icon:hover {
        cursor: pointer;
    }
`;

export const FooterLink = styled.ul`
    list-style-type: none;
    padding-left: 0;

    .footer-link-item {
        line-height: 1.6rem;
    }
    
    a {
        color: #000;
        letter-spacing: 1.6px;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 12px;
        padding: 8px;
    }
`;

export const FooterSocial = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FooterSocialIcon = styled.ul`
    display: flex;
    /* justify-content: space-between; */
    padding: 0;
    list-style-type: none;

    li {
        opacity: 1;
        transition: all .2s;
    }

    a {
        display: block;
        width: 3rem;
        height: 3rem;
        background-color: transparent;
    }

    .icon-facebook {
        background: url(${facebookIcon}) no-repeat 40%;
    }

    .icon-instagram {
        background: url(${instagramIcon}) no-repeat 40%;
    }

    .icon-twitter {
        background: url(${twitterIcon}) no-repeat 40%;
    }
`;


export const FooterContact = styled.div`
    display: block;
    font-size: 12px;
    opacity: 0.9;
`;
