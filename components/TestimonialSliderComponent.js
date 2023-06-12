import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const TestimonialSliderComponent = () => {
  useEffect(() => {
    const testimonialSlider = new Swiper(".testimonial-slider-container", {
      slidesPerView: 1,
      speed: 1000,
      loop: true,
      spaceBetween: 30,
      autoplay: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      testimonialSlider.destroy();
    };
  }, []);

  return (
    <div
      className="testimonial-content"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="testimonial-slider-content">
        <div className="swiper-container testimonial-slider-container">
          <div className="swiper-wrapper testimonial-slider">
            <div className="swiper-slide testimonial-single">
              <div className="client-thumb-wrp">
                <div className="client-thumb">
                  <img src="/img/testimonial/1.png" alt="Image-Givest" />
                </div>
                <div className="quote-icon">“</div>
              </div>
              <div className="client-content">
                <p>
                  The leap into electronic typesetting, essentially unchanged
                  was popularised the release Letraset sheets containing and
                  more recently desktop publishing like Aldus maker including.
                </p>
              </div>
              <div className="client-info">
                <img
                  className="shape-line-img"
                  src="/img/shape/line-t1.png"
                  alt="Image-Givest"
                />
                <h4 className="name">Harvey Harrington</h4>
                <h6 className="designation">Senior Volunteer</h6>
              </div>
            </div>
            <div className="swiper-slide testimonial-single">
              <div className="client-thumb-wrp">
                <div className="client-thumb">
                  <img src="/img/testimonial/2.png" alt="Image-Givest" />
                </div>
                <div className="quote-icon">“</div>
              </div>
              <div className="client-content">
                <p>
                  It is long established fact that reader will distract by the
                  readable content a page when looking atten layout. The point
                  of using and that it has a normal distribution of letters
                </p>
              </div>
              <div className="client-info">
                <img
                  className="shape-line-img"
                  src="/img/shape/line-t1.png"
                  alt="Image-Givest"
                />
                <h4 className="name">Julia Steve</h4>
                <h6 className="designation">Senior Volunteer</h6>
              </div>
            </div>
          </div>

          <div className="navigation-wrp">
            <div className="swiper-button-prev">
              <img
                className="icon-img"
                src="/img/icons/test-arrow-left.png"
                alt="Image-Icon"
              />
            </div>
            <div className="swiper-button-next">
              <img
                className="icon-img"
                src="/img/icons/test-arrow-right.png"
                alt="Image-Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSliderComponent;
