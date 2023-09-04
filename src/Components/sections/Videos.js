import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../steyles.css";
import { Pagination } from "swiper/modules";
import { data } from "../../data/data";
import ViewOnScroll from "../motion";

export default function App() {
  return (
    <>
      <ViewOnScroll>
        <div className="section">
          <div className="main-heading">
            <h1 className="main-h1">Videos</h1>
          </div>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.videos.map((vid) => (
              <SwiperSlide className="vid-swiper">
                <video controls className="vid">
                  <source src={vid.path} type="video/mp4" />
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ViewOnScroll>
    </>
  );
}
