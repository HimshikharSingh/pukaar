import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import "swiper/swiper.min.css";

const TeamSliderComponent = () => {
  return (
    <Swiper
      slidesPerView={3}
      loop={true}
      spaceBetween={30}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      }}
      className="swiper-container team-slider-container"
    >
      <div className="swiper-wrapper team-slider">
        <SwiperSlide className="swiper-slide team-member">
          <div className="thumb">
            <img src="/img/team/1.jpg" alt="Image" />
            <div className="social-icons">
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
              <Link href="#">
                <i className="icofont-skype"></i>
              </Link>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="member-info">
              <h4 className="name">
                <Link href="#/">Harvey Harrington</Link>
              </h4>
              <h6 className="designation">Senior Volunteer</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide team-member">
          <div className="thumb">
            <img src="/img/team/2.jpg" alt="Image" />
            <div className="social-icons">
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
              <Link href="#">
                <i className="icofont-skype"></i>
              </Link>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="member-info">
              <h4 className="name">
                <Link href="#/">Alejandra Bobbitt</Link>
              </h4>
              <h6 className="designation">Senior Volunteer</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide team-member">
          <div className="thumb">
            <img src="/img/team/3.jpg" alt="Image" />
            <div className="social-icons">
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
              <Link href="#">
                <i className="icofont-skype"></i>
              </Link>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="member-info">
              <h4 className="name">
                <Link href="#/">Sherika Hankins</Link>
              </h4>
              <h6 className="designation">Senior Volunteer</h6>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide team-member">
          <div className="thumb">
            <img src="/img/team/3.jpg" alt="Image" />
            <div className="social-icons">
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
              <Link href="#">
                <i className="icofont-skype"></i>
              </Link>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="member-info">
              <h4 className="name">
                <Link href="#/">Sherika Hankins</Link>
              </h4>
              <h6 className="designation">Senior Volunteer</h6>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default TeamSliderComponent;
