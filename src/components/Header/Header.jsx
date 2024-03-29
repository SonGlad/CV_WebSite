import {Container} from "../Container/Container";
import { StyledHeader } from "./Header.styled";
import {ReactComponent as LogoSvg} from "../../images/svg-icons/banner.svg";
import {ReactComponent as MobMenuBurger} from "../../images/svg-icons/mobile-menu.svg";
import {ReactComponent as CloseIcon} from "../../images/svg-icons/close.svg";
import { NavLink } from "react-router-dom";
import { LinkList } from "./Link-List/Link-List";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';



export const Header = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const { mobMenBtn, inViewMobMenBtn } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });
    const [mobMenu, setMobMenu] = useState(false);
    const mobileMenu = useRef();


    const toggleMenuBox = () => {
        setMobMenu(!mobMenu);
    };


    const changeIcon = () => {
        if(!mobMenu){
            return <MobMenuBurger className="burger-icon" width={32} height={22}/>
        } else {
            return <CloseIcon className="menu-close-icon" width={22} height={22}/>
        }
    };


    const toggleMobMenuCont = () => {
        return mobMenu ? 'is-active' : '';
    };
    const stopPropagation = (event) => {
        event.stopPropagation();
    };


    const onBackdropClick = useCallback(event => {
        event.stopPropagation();
        if(mobileMenu.current && !mobileMenu.current.contains(event.target)){
            setMobMenu(false);
        }
    },[setMobMenu]);


    useEffect(() => {
        document.addEventListener('click', onBackdropClick);

        return () => {
            document.removeEventListener('click', onBackdropClick);
        }
    },[onBackdropClick]);



    return(
        <StyledHeader>
            <Container>
                <div ref={ref} className={`header-container ${inView ? 'visible' : 'hidden'}`}>
                    <NavLink className="link" to="/">
                        <LogoSvg className="header-logo" width={34} height={34}/>
                    </NavLink>
                    <div className="mobilemenu" ref={mobileMenu} onClick={stopPropagation}>
                        <button type='button'
                            onClick={toggleMenuBox} 
                            ref={mobMenBtn} 
                            className={`mob-menu-btn ${inViewMobMenBtn ? 'visible' : 'hidden'}`}
                        >
                            {changeIcon()}
                        </button>
                        <div className={`mob-menu ${toggleMobMenuCont()}`}>
                            <nav className="navigation">
                                <LinkList toggleMenuBox={toggleMenuBox}/>
                            </nav>
                        </div>
                    </div>
                    <div className="main-menu">
                        <nav className="navigation">
                            <LinkList/>
                        </nav>
                    </div>
                </div>
            </Container>
        </StyledHeader>
    )
}; 