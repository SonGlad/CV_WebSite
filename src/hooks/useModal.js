import { useSelector } from "react-redux";
import {
    selectEducationalModal, 
    selectPortfolioModal,
    selectAboutImagedata
} from "../redux/Modal/modal-selector"


export const useModal = () => {
    const isEducationModalOpen = useSelector(selectEducationalModal);
    const isPortfolioModalOpen = useSelector(selectPortfolioModal);
    const aboutPictureData = useSelector(selectAboutImagedata);

    return {
        isEducationModalOpen,
        isPortfolioModalOpen,
        aboutPictureData,
    }
};