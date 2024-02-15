import { SwiperStyled } from "./Swiper.styled";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { nanoid } from "nanoid";
import DefaultPicture from "../../../../images/images/bg_image.jpg";


export const SwiperDiv = ({img_url}) => {


    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
        },
    };
    

    return(
        <SwiperStyled>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                rotate: 35,
                stretch: 0,
                depth: 240,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={pagination}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {img_url.map(({url}) => (
                    <SwiperSlide  key={nanoid()}
                    style={{backgroundImage:`url(${url || DefaultPicture})`}}/>
                ))}
            </Swiper>
        </SwiperStyled>
    )
}