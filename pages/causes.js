import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestimonialSliderComponent from "@/components/TestimonialSliderComponent";
import Link from "next/link";
export default function Home() {
  return (
    <div wrapper causes-page-wrapper>
      <Navbar />

      <main className="main-content site-wrapper-reveal">
        <section
          className="page-title-area"
          data-bg-img="/img/photos/bg-page-title.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content text-center">
                  <h2 className="title text-white">Causes</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Causes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="causes-area causes-default-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/01.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/causes">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/02.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causes">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/03.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/02.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/03.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <img src="/img/causes/01.jpg" alt="Givest-HasTech" />
                  </div>
                  <div className="content">
                    <ul className="donate-info">
                      <li className="info-item">
                        <span className="info-title">Goal:</span>
                        <span className="amount">$ 5,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">Raised:</span>
                        <span className="amount">$ 2,000</span>
                      </li>
                      <li className="info-item">
                        <span className="info-title">To Go:</span>
                        <span className="amount">$ 1,000</span>
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry's since
                      the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/causes">
                          <span className="icon-img">
                            <img src="/img/icons/admin1.png" alt="Icon" />
                          </span>{" "}
                          Kristin Horton
                        </Link>
                      </h5>
                    </div>
                    <Link
                      className="btn-theme btn-border-gradient gray-border btn-size-md"
                      href="/donation"
                    >
                      <span>
                        Donate Now{" "}
                        <img
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right-gradient.png"
                          alt="Icon"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-area funfact-default-area">
          <div className="container">
            <div className="row row-gutter-0 funfact-items-style1">
              <div className="col-sm-6 col-md-4 funfact-item">
                <div className="inner-content">
                  <div className="icon-box">
                    <img
                      className="icon"
                      src="/img/icons/f1.png"
                      alt="Image-Givest"
                    />
                    <img
                      className="shape-img"
                      src="/img/shape/4.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h2>
                        <span className="counter-animate">598</span>K
                      </h2>
                    </div>
                    <img
                      className="line-shape"
                      src="/img/shape/funfact-line1.png"
                      alt="Image-Givest"
                    />
                    <p className="title">// Poor People</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 funfact-item">
                <div className="inner-content">
                  <div className="icon-box">
                    <img
                      className="icon"
                      src="/img/icons/f2.png"
                      alt="Image-Givest"
                    />
                    <img
                      className="shape-img"
                      src="/img/shape/4.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h2>
                        <span className="counter-animate">897</span>M
                      </h2>
                    </div>
                    <img
                      className="line-shape"
                      src="/img/shape/funfact-line1.png"
                      alt="Image-Givest"
                    />
                    <p className="title">// Fund raised</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 funfact-item">
                <div className="inner-content">
                  <div className="icon-box">
                    <img
                      className="icon"
                      src="/img/icons/f3.png"
                      alt="Image-Givest"
                    />
                    <img
                      className="shape-img"
                      src="/img/shape/4.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="content">
                    <div className="number">
                      <h2>
                        <span className="counter-animate">998</span>+
                      </h2>
                    </div>
                    <img
                      className="line-shape"
                      src="/img/shape/funfact-line1.png"
                      alt="Image-Givest"
                    />
                    <p className="title">// Active Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-area testimonial-default-area bgcolor-theme3">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-xl-5">
                <div
                  className="title-wrp"
                  data-bg-img="/img/testimonial/bg-testi1.jpg"
                >
                  <div className="section-title">
                    <h5 className="subtitle line-white-color text-white mb-7">
                      Recent Events
                    </h5>
                    <h2 className="title title-style text-white">
                      What People Say About Us.{" "}
                      <img
                        className="img-shape"
                        src="/img/shape/3.png"
                        alt="Image-Givest"
                      />
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 col-xl-6">
                <div className="testimonial-content">
                  <TestimonialSliderComponent />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-logo-area brand-logo-default-area">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-0 col-xl-4">
                <div className="section-title text-center text-lg-start">
                  <h2 className="title title-style mt-xl-30">
                    Our Current Sponsors.{" "}
                    <img
                      className="img-shape"
                      src="/img/shape/3.png"
                      alt="Image-Givest"
                    />
                  </h2>
                </div>
              </div>
              <div className="col-lg-8 col-xl-7 offset-xl-1">
                <div className="brand-logo-content">
                  <div className="row row-cols-3 row-cols-sm-5">
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/1.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/2.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/3.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/4.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/5.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/6.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/7.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/8.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/9.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/10.png" alt="Image-Givest" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
