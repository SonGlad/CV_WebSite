import { SwiperStyled } from "./Swiper.styled";
import { nanoid } from "nanoid";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, EffectCube, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState} from "react";
import {ReactComponent as CameraIcon} from "../../../images/svg-icons/camera.svg";



export const SwiperComponent = ({img_url, index}) => {
    const [delay, setDelay] = useState(0);


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
        <SwiperStyled>
            <Swiper
                direction={'vertical'}
                loop={true}
                autoplay={{
                    delay: delay,
                    disableOnInteraction: false,
                }}
                pagination={pagination}
                modules={[Pagination, EffectCube, Autoplay]}
                className="mySwiper"
            >
                {img_url.map(({url}) => (
                    <SwiperSlide  key={nanoid()}>
                        <img className="education-picture" src={url} alt='img'/>
                        <button type='button' className="img-btn">
                            <CameraIcon className="img-icon" width={30} height={30}/>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>    
        </SwiperStyled>
    )
};