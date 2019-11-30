import React from 'react';
import { IoMdNotifications, IoMdArrowDropdown } from 'react-icons/io';

import { Container, Search } from './styles';
import logo from '../../assets/logo.png';
import imgteste from '../../assets/imgteste.jpg';

export default function Header() {
    return (
        <Container>
            <img src={logo} alt="Trend Logo" />
            <Search placeholder="Search" type="text" />
            <div>
                <IoMdNotifications size={30} />
                <img src={imgteste} alt="avatar" />
                <IoMdArrowDropdown size={30} />
            </div>
        </Container>
    );
}
