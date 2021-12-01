import styled from 'styled-components';

export const HeaderWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    width: 100%;
    border-bottom: 1px solid #ececec;
    box-shadow: rgba(0, 0, 0, 20%) 0 -2px 6px;
    transition: all 0.3s;
    z-index: 100;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 15px;
    margin: 0px auto;

    @media only screen and (min-width: 1200px) {
        max-width: 1200px;
    }

    .menu-hide-desktop {
        display: none;

        @media screen and (max-width: 920px) {
            display: block;
        } 
    } 
`;

export const HeaderLogo = styled.div`
    /* flex-shrink: 0; */
    /* width: 46px;
    height: 60px; */
    cursor: pointer;
    img {
        display: block;
        width: auto;
        height: 75px;
        object-fit: cover;
    }
`;

export const HeaderNav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;  

    @media only screen and (max-width: 920px) {
        display: none;
    }
`;

export const HeaderNavItem = styled.li`
    display: inline-flex;
    align-items: center;
    flex-basis: auto;
    height: 80px;
    color: #000;
    font-size: 1.1rem;
    font-weight: 500;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-decoration: none;
    margin: 0 16px;
    text-transform: uppercase;
    opacity: 1;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
        opacity: 0.7;        
    }
`;

export const HeaderNavItemMobile = styled.div`
    display: flex;
    flex-direction: column;
    color: #000;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    text-decoration: none;
    padding: 12px;
    text-transform: uppercase;
    opacity: 1;
    transition: all 0.2s;

    &:hover {
        transform: scale(1.1);
        opacity: 0.7;        
    }
`;

export const HeaderIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.6rem;
`;