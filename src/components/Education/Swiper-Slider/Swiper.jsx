import { SwiperStyled } from "./Swiper.styled";
import { useEffect, useState} from "react";
import {ReactComponent as CameraIcon} from "../../../images/svg-icons/camera.svg";
import { useDispatch } from "react-redux";
import {openModalEducation} from "../../../redux/Modal/modal-slice";
import {updateAboutPictureData} from "../../../redux/Modal/modal-slice";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import DefaultPicture from '../../../images/images/bg_image.jpg'
import 'swiper/css';
import 'swiper/css/pagination';



export const SwiperComponent = ({id, img_url, index}) => {
    const dispatch = useDispatch();
    const [delay, setDelay] = useState(0);


    const openModal = (url) => {
        dispatch(updateAboutPictureData({id, img_url, url}));
        dispatch(openModalEducation());
    };


    useEffect(() => {
        setDelay(2500 + index * 500);
        
        setTimeout(() => {
            setDelay(2500);
        }, 3500);

    },[index]);


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
        },
    };



    return (
        <SwiperStyled style={{'--i': 2 * index + 2}}>
            <Swiper
                direction={'vertical'}
                loop={true}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {img_url.map(({url}) => (
                    <SwiperSlide  key={nanoid()}>
                        <img className="education-picture" src={url || DefaultPicture} alt='img'/>
                        <button type='button' className="img-btn" onClick={() => openModal(url)}>
                            <CameraIcon className="img-icon" width={30} height={30}/>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>    
        </SwiperStyled>
    )
};