// @ts-nocheck
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from "swiper";
import 'swiper/swiper-bundle.css';
import "src/css/swiper.css";

import SetSampleVideo from "src/components/molecules/SetSampleVideo";

//import type { ContentVideo } from "src/types/contentvideo";



export const SwingVideos = (props :any) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      dir="rtl"
      loop={true}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={10000}
    >
      {props.contentVideos.map((content_video, index) => (
        <>
            <SwiperSlide>
              <SetSampleVideo
              key = {index}
              thumbnail = {content_video.attributes.thumbnail} />
            </SwiperSlide>
        </>
      ))}
    </Swiper>
  );
};

export default SwingVideos;

//effect="fade"
//fadeEffect={{ crossFade: true }}
