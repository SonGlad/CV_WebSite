import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { EducationModal } from "./EducationModal/EducationModal";
import { PortfolioModal } from "./PortfolioModal/PortfolioModal";
import { ContactModal } from "./CotactModal/ContactModal";
import { useDispatch } from "react-redux";
import { useEffect, useCallback} from "react";
import {closeModalEducation, closeModalPortfolio, closeModalContact} from "../../redux/Modal/modal-slice";
import { useModal } from "../../hooks/useModal";


const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {isEducationModalOpen, isPortfolioModalOpen, isContactModalOpen} = useModal();


    const handleClickClose = useCallback(() => {
        if (isEducationModalOpen){
            dispatch(closeModalEducation());
        }
        if(isPortfolioModalOpen) {
            dispatch(closeModalPortfolio());
        }
        if(isContactModalOpen) {
            dispatch(closeModalContact());
        }
    },[dispatch, isContactModalOpen, isEducationModalOpen, isPortfolioModalOpen]);


    const handleBackdropClick = useCallback(event => {
        if (event.target === event.currentTarget) {
            handleClickClose();
        }
    },[handleClickClose]);


    const handleKeyDown = useCallback(event => {
        if (event.key === "Escape") {
            handleClickClose();
        }
    },[handleClickClose]);


    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleBackdropClick);
    
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleBackdropClick);
        };
    },[handleBackdropClick, handleKeyDown]);



    return createPortal(
        (isEducationModalOpen || isPortfolioModalOpen || isContactModalOpen) && (
            <ModalStyled onClick={handleBackdropClick}>
                {isEducationModalOpen && (
                    <EducationModal handleClickClose={handleClickClose}/>
                )}
                {isPortfolioModalOpen && (
                    <PortfolioModal handleClickClose={handleClickClose}/>
                )}
                {isContactModalOpen && (
                    <ContactModal handleClickClose={handleClickClose}/>
                )}
            </ModalStyled>
        ),
        modalRoot
    );
};