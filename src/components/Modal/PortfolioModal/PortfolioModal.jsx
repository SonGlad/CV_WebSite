import { PortfolioModalStyled } from "./PortfolioModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { SwiperDiv } from "./Swiper/Swiper";
import { ChartDiv } from "./Chart/Chart";
import { DescriptionDiv } from "./Description/Description";
import { useModal } from "../../../hooks/useModal";
import { useData } from "../../../hooks/useData";



export const PortfolioModal = ({handleClickClose}) => {
    const { portfolioData } = useData();
    const { portfolioModalData } = useModal();


    const selectedModalData = portfolioData.find(item => item.id === portfolioModalData);

 
    return(
        <PortfolioModalStyled>
            <button className="close-btn" type="button" onClick={handleClickClose}>
                <CloseIcon className="icon" width={12} height={12}/>
            </button>
            <div className="border-div">
                <SwiperDiv img_url={selectedModalData.img_url}/>
                <div className="content-cont">
                    <ChartDiv languages={selectedModalData.languages}/>
                    <DescriptionDiv
                        name={selectedModalData.name}
                        type={selectedModalData.type}
                        role={selectedModalData.role}
                        github={selectedModalData.url}
                        homepage={selectedModalData.homepageUrl}
                        figma={selectedModalData.figma_url}
                        technical={selectedModalData.technical_task}
                        technologies={selectedModalData.technologies}
                        libraries={selectedModalData.libraries}
                        collaborators={selectedModalData.collaborators}
                    />
                </div>
                <div className="description-cont">
                    <p>{selectedModalData.description}</p>
                </div>
            </div>
        </PortfolioModalStyled>
    )
};