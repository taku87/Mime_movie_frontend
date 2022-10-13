import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import 'swiper/swiper-bundle.css';
import "src/css/swiper.css";


import SetSampleVideo from "src/components/molecules/SetSampleVideo";

export const SwingVideos = () => {
  return (
    <>
    <Swiper
    dir="rtl"
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <SetSampleVideo />
      </SwiperSlide>
      <SwiperSlide>
        <SetSampleVideo />
      </SwiperSlide>
    </Swiper>
    </>
  );
};

export default SwingVideos;