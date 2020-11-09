import React from 'react';
import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SideBarMenu,
    SideBarLink,
    SideBarRoute,
    SideBtnWrap
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarMenu isOpen={isOpen} onClick={toggle}>
                <SideBarLink to="/">Pizzas</SideBarLink>
                <SideBarLink to="/">Desserts</SideBarLink>
                <SideBarLink to="/">Full Menu</SideBarLink>
            </SideBarMenu>
            <SideBtnWrap>
                <SideBtnWrap>
                    <SideBarRoute to="/">Order now</SideBarRoute>
                </SideBtnWrap>
            </SideBtnWrap>
        </SideBarContainer>
    )
}

export default SideBar;
