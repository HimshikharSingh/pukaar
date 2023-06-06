import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <header className="header-area header-default sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-sm-3 col-md-3 col-lg-2 pr-0">
              <div className="header-logo-area">
                <Link>
                  <a href="/">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="logo-main"
                      src="/img/logo.png"
                      alt="Logo"
                    />
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="logo-light"
                      src="/img/logo.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-7 col-sm-9 col-md-9 col-lg-10">
              <div className="header-align">
                <div className="header-navigation-area">
                  <ul className="main-menu nav justify-content-center">
                    <li>
                      <Link>
                        <a href="/">Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <a href="about.html">About Us</a>
                      </Link>
                    </li>
                    <li className="has-submenu active">
                      <Link>
                        <a href="/causes">Causes</a>
                      </Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link>
                            <a className="text-theme-color" href="/causes">
                              Causes
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <a href="causes-details.html">Causes Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link>
                        <a href="/blog">Blog</a>
                      </Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link>
                            <a href="/blog">Blog Grid</a>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <a href="blog-details.html">Blog Single</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link>
                        <a href="/">Pages</a>
                      </Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link>
                            <a href="event-details.html">Event Details</a>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <a href="volunteer.html">Volunteer</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link>
                        <a href="contact.html">Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="header-action-area">
                  <button className="btn-menu d-xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <Link>
                    <a
                      href="contact.html"
                      className="btn-theme btn-gradient btn-slide btn-style"
                    >
                      Give Support{" "}
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon icon-img"
                        src="/img/icons/arrow-line-right2.png"
                        alt="Icon"
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

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
                    <Link>
                      <a href="/">
                        Home<span className="breadcrumb-sep">//</span>
                      </a>
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/01.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="/causes">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/02.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="#/">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/03.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="#/">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/02.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="#/">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/03.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="#/">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-30">
                  <div className="thumb">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/causes/01.jpg"
                      alt="Givest-HasTech"
                    />
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
                      <Link>
                        <a href="causes-details.html">
                          Children Education Needs For Change The World.
                        </a>
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
                        <Link>
                          <a href="/causes">
                            <span className="icon-img">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/admin1.png"
                                alt="Icon"
                              />
                            </span>{" "}
                            Kristin Horton
                          </a>
                        </Link>
                      </h5>
                    </div>
                    <Link>
                      <a
                        className="btn-theme btn-border-gradient gray-border btn-size-md"
                        href="#"
                      >
                        <span>
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right-gradient.png"
                            alt="Icon"
                          />
                        </span>
                      </a>
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="icon"
                      src="/img/icons/f1.png"
                      alt="Image-Givest"
                    />
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="icon"
                      src="/img/icons/f2.png"
                      alt="Image-Givest"
                    />
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="icon"
                      src="/img/icons/f3.png"
                      alt="Image-Givest"
                    />
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
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
                  <div className="testimonial-slider-content">
                    <div className="swiper-container testimonial-slider-container">
                      <div className="swiper-wrapper testimonial-slider">
                        <div className="swiper-slide testimonial-single">
                          <div className="client-thumb-wrp">
                            <div className="client-thumb">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/testimonial/1.png"
                                alt="Image-Givest"
                              />
                            </div>
                            <div className="quote-icon">“</div>
                          </div>
                          <div className="client-content">
                            <p>
                              The leap into electronic typesetting, essentially
                              unchanged was popularised the release Letraset
                              sheets containing and more recently desktop
                              publishing like Aldus maker including.
                            </p>
                          </div>
                          <div className="client-info">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
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
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/testimonial/2.png"
                                alt="Image-Givest"
                              />
                            </div>
                            <div className="quote-icon">“</div>
                          </div>
                          <div className="client-content">
                            <p>
                              It is long established fact that reader will
                              distract by the readable content a page when
                              looking atten layout. The point of using and that
                              it has a normal distribution of letters
                            </p>
                          </div>
                          <div className="client-info">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
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
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon-img"
                            src="/img/icons/test-arrow-left.png"
                            alt="Image-Icon"
                          />
                        </div>
                        <div className="swiper-button-next">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon-img"
                            src="/img/icons/test-arrow-right.png"
                            alt="Image-Icon"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
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
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/1.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/2.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/3.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/4.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/5.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/6.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/7.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/8.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/9.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/brand-logo/10.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer-area">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="widget-item">
                  <div className="about-widget">
                    <Link>
                      <a className="footer-logo" href="/">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/logo.png"
                          alt="Logo"
                        />
                      </a>
                    </Link>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry orem
                      Ipsum has been the industry's since the when unknown.
                    </p>
                    <div className="widget-total-raised">
                      <h4 className="raised-title">Total Raised:</h4>
                      <div className="raised-amount">$8,965</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="widget-item">
                  <h4 className="widget-title line-style">Gallery</h4>
                  <div className="widget-gallery">
                    <div className="row row-cols-3 row-gutter-10">
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery1.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery2.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery3.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery4.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery5.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col">
                        <div className="gallery-item">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/photos/gallery6.jpg"
                            alt="Givest-HasTech"
                          />
                          <Link>
                            <a className="icon" href="#/">
                              <i className="icofont-instagram"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                <div className="widget-item menu-wrap-two-column">
                  <h4 className="widget-title line-style">Quick Links</h4>
                  <nav className="widget-menu-wrap">
                    <div className="row">
                      <div className="col-6 col-sm-6 col-md-6 pr-sm-5">
                        <ul className="nav-menu nav">
                          <li>
                            <Link>
                              <a href="about.html">About Us</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="/blog">Blog Post Terms</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Conditions</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Privacy Policy</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Documentation</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Donners</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 pl-sm-5">
                        <ul className="nav-menu nav align-right">
                          <li>
                            <Link>
                              <a href="volunteer.html">Become Volunteer</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Quick Fundraise</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Give Donation</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="volunteer.html">Become Volunteer</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="causes-details.html">Food And Water</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="causes-details.html">
                                Medical facilities
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-to-top">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              src="/img/icons/arrow-up-line.png"
              alt="Icon-Image"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="widget-copyright text-center">
                    <p>
                      © 2025 <span>Givest</span>. Made with{" "}
                      <i className="icon_heart"></i> by{" "}
                      <Link>
                        <a target="_blank" href="https://www.hasthemes.com">
                          HasThemes
                        </a>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-layer">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src="/img/shape/footer-line.png"
            alt="Image-Givest"
          />
        </div>
      </footer>

      <aside className="off-canvas-wrapper">
        <div className="off-canvas-inner">
          <div className="off-canvas-overlay"></div>

          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="logo-area">
                <Link>
                  <a href="/">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/logo.png"
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              <div className="close-action">
                <button className="btn-close">
                  <i className="icofont-close"></i>
                </button>
              </div>
            </div>

            <div className="off-canvas-item">
              <div className="res-mobile-menu menu-active-one"></div>
            </div>

            <div className="off-canvas-footer"></div>
          </div>
        </div>
      </aside>
    </div>
  );
}
