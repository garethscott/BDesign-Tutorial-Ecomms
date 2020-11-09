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
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SideBarMenu>
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
