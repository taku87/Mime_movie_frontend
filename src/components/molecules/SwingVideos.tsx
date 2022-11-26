import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade } from "swiper";
import 'swiper/swiper-bundle.css';
import "src/css/globals/swiper.css";
import "src/css/molecules/SwingVideos.css";

import SetThumbnail from "src/components/molecules/SetThumbnail";
import type { ContentVideo } from "src/types/contentvideo";

type ContentVideos ={
  contentVideos :Array<ContentVideo>
}

export const SwingVideos = (props :ContentVideos ) => {
const {contentVideos} =  props;

  return (
    <div className="swing-videos-container">
      <Swiper
        modules={[Autoplay, EffectFade]}
        dir="rtl"
        loop={true}
        spaceBetween={30}
        slidesPerView={1.5}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
      >
        {contentVideos.map((content_video :ContentVideo, index :number) => (
          <>
              <SwiperSlide  key ={`${content_video.id}22${index}`}>
                < SetThumbnail
                key ={`${content_video.id}33${index}`}
                thumbnail = {content_video.attributes.thumbnail} />
              </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SwingVideos;

//effect="fade"
//fadeEffect={{ crossFade: true }}
