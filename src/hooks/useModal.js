import { useSelector } from "react-redux";
import {
    selectEducationalModal, 
    selectPortfolioModal,
    selectAboutImagedata,
    selectPortfolioModalData,
} from "../redux/Modal/modal-selector"


export const useModal = () => {
    const isEducationModalOpen = useSelector(selectEducationalModal);
    const isPortfolioModalOpen = useSelector(selectPortfolioModal);
    const aboutPictureData = useSelector(selectAboutImagedata);
    const portfolioModalData = useSelector(selectPortfolioModalData);

    return {
        isEducationModalOpen,
        isPortfolioModalOpen,
        aboutPictureData,
        portfolioModalData,
    }
};