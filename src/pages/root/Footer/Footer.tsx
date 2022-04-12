import {FooterStyled, AddressStyled} from './Footer.styled';
import React from 'react';

const Footer: React.FC = (): JSX.Element => {
    return (
        <FooterStyled>
            <AddressStyled>
                GitHub repository search for Tonik by Tomasz Adamczyk
            </AddressStyled>
        </FooterStyled>
    );
};

export default Footer;
