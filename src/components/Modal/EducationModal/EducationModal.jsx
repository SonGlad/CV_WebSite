import { EducationStyled } from "./EducationModal.styled";
import {ReactComponent as CloseIcon} from "../../../images/svg-icons/close.svg";
import { useModal } from "../../../hooks/useModal";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



export const EducationModal = ({handleClickClose}) => {
    const { aboutPictureData } = useModal();
    const {img_url, url} = aboutPictureData;


    const initialSlide = url ? img_url.findIndex(image => image.url === url) : 0;


    return(
        <EducationStyled>
            <Swiper
                loop={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                initialSlide={initialSlide}
                className="mySwiper"
            > 
            {img_url.map(({url}) => (
                <SwiperSlide  key={nanoid()}>
                    <div className="div-for-pic">
                        <button type="button" className="close-btn" onClick={handleClickClose}>
                            <CloseIcon className="close-icon" width={16} height={16}/>
                        </button>
                        <img className="education-picture" src={url} alt='img'/>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>  
        </EducationStyled>
    )
};