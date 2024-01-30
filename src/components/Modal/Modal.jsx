import { createPortal } from "react-dom";
import { ModalStyled } from "./Modal.styled";
import { EducationModal } from "./EducationModal/EducationModal";
import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import {closeModalEducation, closeModalPortfolio} from "../../redux/Modal/modal-slice";
import { useModal } from "../../hooks/useModal";


const modalRoot = document.querySelector("#modal-root");


export const Modal = () => {
    const dispatch = useDispatch();
    const {isEducationModalOpen, isPortfolioModalOpen} = useModal();



    const handleClickClose = useCallback(() => {
        if (isEducationModalOpen){
            dispatch(closeModalEducation());
        }
        if(isPortfolioModalOpen) {
            dispatch(closeModalPortfolio());
        }
    }, [dispatch, isEducationModalOpen, isPortfolioModalOpen]);



    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          handleClickClose();
        }
    };


    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.code === "Escape") {
            handleClickClose();
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        document.body.style.cssText = `overflow: hidden; `;
    
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
          document.body.style.cssText = `overflow: auto; `;
        };
    }, [handleClickClose]);



    return createPortal(
        (isEducationModalOpen || isPortfolioModalOpen) && (
            <ModalStyled onClick={handleBackdropClick}>
                {isEducationModalOpen && (
                    <EducationModal handleClickClose={handleClickClose}/>
                )}
            </ModalStyled>
        ),
        modalRoot
    );
};