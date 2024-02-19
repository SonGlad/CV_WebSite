import { useSelector } from "react-redux";
import {
    selectEducationalModal, 
    selectPortfolioModal,
    selectContactModal,
    selectAboutImagedata,
    selectPortfolioModalData,
    selectSuccsess,
} from "../redux/Modal/modal-selector"


export const useModal = () => {
    const isEducationModalOpen = useSelector(selectEducationalModal);
    const isPortfolioModalOpen = useSelector(selectPortfolioModal);
    const isContactModalOpen = useSelector(selectContactModal);
    const aboutPictureData = useSelector(selectAboutImagedata);
    const portfolioModalData = useSelector(selectPortfolioModalData);
    const isSuccsess = useSelector(selectSuccsess);


    return {
        isEducationModalOpen,
        isPortfolioModalOpen,
        isContactModalOpen,
        aboutPictureData,
        portfolioModalData,
        isSuccsess,
    }
};