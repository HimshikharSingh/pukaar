import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="wrapper home-default-wrapper">
      <div className="header-area header-default sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-sm-3 col-md-3 col-lg-2 pr-0">
              <div className="header-logo-area">
                <Link href="/">
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
                </Link>
              </div>
            </div>
            <div className="col-7 col-sm-9 col-md-9 col-lg-10">
              <div className="header-align">
                <div className="header-navigation-area">
                  <ul className="main-menu nav justify-content-center">
                    <li className="active">
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link href="/causes">Causes</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="/causes">Causes</Link>
                        </li>
                        <li>
                          <Link href="causesDetails">Causes Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link href="/blog">Blog</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="/blog">Blog Grid</Link>
                        </li>
                        <li>
                          <Link href={"blogDetails"}>Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link href="/">Pages</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="/eventDetails">Event Details</Link>
                        </li>
                        <li>
                          <Link href="/volunteer">Volunteer</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-action-area">
                  <button className="btn-menu d-xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <Link
                    href="/contact"
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-content">
        <section className="home-slider-area slider-default">
          <div className="home-slider-content">
            <div className="home-slider-item">
              <div className="slider-content-area">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 col-lg-6 col-xl-7">
                      <div
                        className="content"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        <div className="subtitle-content">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/icons/1.png"
                            alt="Givest-HasTech"
                          />
                          <h6>Change The World.</h6>
                        </div>
                        <div className="tittle-wrp">
                          <h2>
                            Need Your Big Hand For <span>Change</span> The
                            World.
                          </h2>
                        </div>
                        <div className="btn-wrp">
                          <Link
                            href="/causes"
                            className="btn-theme btn-gradient btn-slide btn-style"
                          >
                            All Causes{" "}
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              className="icon icon-img"
                              src="/img/icons/arrow-line-right2.png"
                              alt="Icon"
                            />
                          </Link>
                          <Link
                            href="/donate"
                            className="btn-theme btn-border btn-black btn-style"
                          >
                            Donate Now{" "}
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              className="icon icon-img"
                              src="/img/icons/arrow-right-line-dark.png"
                              alt="Icon"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1 col-lg-5 offset-lg-1 col-xl-5 offset-xl-0">
                      <div className="layer-style">
                        <div className="thumb scene">
                          <span className="scene-layer" data-depth="0.20">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              className=""
                              src="/img/slider/1.jpg"
                              alt="Image-Givest"
                            />
                          </span>
                          <div className="shape-circle scene">
                            <span className="scene-layer" data-depth="0.10">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/shape/circle1.png"
                                alt="Image-Givest"
                              />
                            </span>
                            <span className="scene-layer" data-depth="0.40">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                className="circle-img"
                                src="/img/shape/2.png"
                                alt="Image-Givest"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="shape-style1 scene">
                          <span className="scene-layer" data-depth="0.30">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/shape/1.png"
                              alt="Image-Givest"
                            />
                          </span>
                        </div>
                        <div className="donate-circle-wrp">
                          <div
                            className="pie-chart-circle"
                            data-size="255"
                            data-line-width="8"
                            data-line-cap="butt"
                            data-track-color="#ffffff54"
                            data-bar-color="#fff"
                            data-percent="68"
                          ></div>
                          <div className="donate-content">
                            <div className="raised-amount">$865M</div>
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              className="line-shape-img"
                              src="/img/shape/line-s2.png"
                              alt="Image-Givest"
                            />
                            <h5 className="donate-title">Total Raised</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider-shape">
                  <div className="shape-style1">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shape-img1"
                      src="/img/shape/map1.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style2">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shape-img2"
                      src="/img/shape/map2.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style3">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shape-img3"
                      src="/img/shape/banner-line1.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style4">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="shape-img3"
                      src="/img/shape/banner-line2.png"
                      alt="Image-Givest"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-area service-default-area">
          <div className="container">
            <div
              className="row icon-box-style1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="col-md-6 col-lg-4">
                <div className="icon-box-item item-one mb-md-30">
                  <div className="icon-box-top">
                    <div className="icon-box">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon-img"
                        src="/img/icons/s1.png"
                        alt="Icon"
                      />
                    </div>
                    <h4 className="title">Clean Water</h4>
                  </div>
                  <div className="content">
                    <div className="separator-line">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/shape/line-s1.png"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text the printing typesetng
                      industry lorem Ipsum has been industry standard dummy text
                      ever since.
                    </p>
                    <Link
                      href="/causesDetails"
                      className="btn-theme btn-white btn-border btn-size-md"
                    >
                      View Details{" "}
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon icon-img"
                        src="/img/icons/arrow-line-right.png"
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="icon-box-item item-two mb-md-30">
                  <div className="icon-box-top">
                    <div className="icon-box">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon-img"
                        src="/img/icons/s2.png"
                        alt="Icon"
                      />
                    </div>
                    <h4 className="title">Healthy Food</h4>
                  </div>
                  <div className="content">
                    <div className="separator-line">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/shape/line-s1.png"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text the printing typesetng
                      industry lorem Ipsum has been industry standard dummy text
                      ever since.
                    </p>
                    <Link
                      href="causes-details.html"
                      className="btn-theme btn-white btn-border btn-size-md"
                    >
                      View Details{" "}
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon icon-img"
                        src="/img/icons/arrow-line-right.png"
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="icon-box-item item-three">
                  <div className="icon-box-top">
                    <div className="icon-box">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon-img"
                        src="/img/icons/s3.png"
                        alt="Icon"
                      />
                    </div>
                    <h4 className="title">Medical Help</h4>
                  </div>
                  <div className="content">
                    <div className="separator-line">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/shape/line-s1.png"
                        alt="Givest-HasTech"
                      />
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text the printing typesetng
                      industry lorem Ipsum has been industry standard dummy text
                      ever since.
                    </p>
                    <Link
                      href="/causesDetails"
                      className="btn-theme btn-white btn-border btn-size-md"
                    >
                      View Details{" "}
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon icon-img"
                        src="/img/icons/arrow-line-right.png"
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area about-default-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div
                  className="section-title position-relative z-index-1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5 className="subtitle line-theme-color">About Us.</h5>
                  <h2 className="title">
                    <span>Givest</span> is The Non Profitable Organization.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-xl-7">
                <div
                  className="layer-style"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div className="thumb">
                    <div className="row m-0">
                      <div className="col-sm-4 col-md-4 col-lg-4 col-xl-4 p-0 d-none d-sm-block d-lg-none d-xl-block tilt-animation">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/about/1.jpg"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="col-sm-8 col-md-8 col-lg-12 col-xl-8 p-0 tilt-animation">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="img-two"
                          src="/img/about/2.jpg"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-xl-5">
                <div
                  className="about-content"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <p className="text-style">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry has been the industry standard.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry orem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown.
                  </p>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry orem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown.
                  </p>
                  <ul className="list-icon-style">
                    <li>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon-img"
                        src="/img/icons/check-double-line.png"
                        alt="Image-Givest"
                      />{" "}
                      Need your simple help <br />
                      for save children.
                    </li>
                    <li className="line-center"></li>
                    <li>
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="icon-img"
                        src="/img/icons/check-double-line.png"
                        alt="Image-Givest"
                      />{" "}
                      Need your simple help <br />
                      for save children.
                    </li>
                  </ul>
                  <Link
                    href="/donate"
                    className="btn-theme btn-gradient btn-slide"
                  >
                    Donate Now{" "}
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="icon icon-img"
                      src="/img/icons/arrow-line-right2.png"
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="causes-area causes-default-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div
                  className="section-title text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5 className="subtitle line-theme-color">Check Causes</h5>
                  <h2 className="title title-style">
                    Donate For Poor People. Causes of Givest{" "}
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
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-md-30">
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
                      <Link href="/causesDetails">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry&apos;s
                      since the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/causes">
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
                        </Link>
                      </h5>
                    </div>
                    <Link
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
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item mb-md-30">
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
                      <Link href="causes-details.html">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry&apos;s
                      since the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/causes">
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
                        </Link>
                      </h5>
                    </div>
                    <Link
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
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="causes-item">
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
                      <Link href="causes-details.html">
                        Children Education Needs For Change The World.
                      </Link>
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry&apos;s
                      since the unknown.
                    </p>
                  </div>
                  <div className="causes-footer">
                    <div className="admin">
                      <h5>
                        <Link href="/causes">
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
                        </Link>
                      </h5>
                    </div>
                    <Link
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
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="donate-area donate-default-area bgcolor-theme3">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-xxl-7">
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="section-title">
                    <h5 className="subtitle line-theme-color mb-7">
                      Make A Donation
                    </h5>
                    <h2 className="title title-style text-white">
                      Need Pure Water For Mozambique People.{" "}
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
                  <div className="donate-form">
                    <form action="#">
                      <div className="amount-info">
                        <div className="donate-amount">$20</div>
                        <div className="donate-amount">$50</div>
                        <div className="donate-amount">$200</div>
                        <div className="donate-amount donate-custom-amount">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Custom"
                          />
                        </div>
                      </div>
                      <div className="btn-wrp">
                        <Link
                          href="#/"
                          className="btn-theme btn-gradient btn-slide"
                        >
                          Donate Now{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right2.png"
                            alt="Icon"
                          />
                        </Link>
                        <Link
                          href="#/"
                          className="btn-theme btn-gradient btn-border"
                        >
                          Join Events{" "}
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon icon-img"
                            src="/img/icons/arrow-line-right2-gradient.png"
                            alt="Icon"
                          />
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xxl-4 offset-xxl-1">
                <div className="donners-content">
                  <div
                    className="thumb-bg-layer"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-bg-img="/img/photos/bg-donate1.jpg"
                  ></div>
                  <div
                    className="donners-info"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <h3>Great Donners</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry since the 1500s, when an unknown.
                    </p>
                    <div className="donners-item">
                      <div className="donner-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/photos/donner1.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="donner-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/photos/donner2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="donner-item">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          src="/img/photos/donner3.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="donner-item donner-number">+286</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-area funfact-default-area">
          <div className="container">
            <div
              className="row row-gutter-0 funfact-items-style1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
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
                    <p className="title"> Poor People</p>
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
                    <p className="title"> Fund raised</p>
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
                    <p className="title"> Active Member</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="events-area events-default-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5 className="subtitle line-theme-color mb-7">
                    Recent Events
                  </h5>
                  <h2 className="title title-style">
                    Join Recent Fundraising Event Of Givest.{" "}
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
                <div
                  className="events-content events-list"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="event-item">
                    <div className="thumb">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="thumb-img"
                        src="/img/events/1.jpg"
                        alt="Image-Givest"
                      />
                      <Link
                        href="event-details.html"
                        className="btn-theme btn-gradient btn-size-sm"
                      >
                        Join Now{" "}
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="event-info">
                        15 January 2021 // <span>Education</span>
                      </div>
                      <h4 className="event-name">
                        <Link href="event-details.html">
                          Need School For Mozambique Children.
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="thumb">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="thumb-img"
                        src="/img/events/2.jpg"
                        alt="Image-Givest"
                      />
                      <Link
                        href="event-details.html"
                        className="btn-theme btn-gradient btn-size-sm"
                      >
                        Join Now{" "}
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="event-info">
                        15 January 2021 // <span>Education</span>
                      </div>
                      <h4 className="event-name">
                        <Link href="event-details.html">
                          Need School For Mozambique Children.
                        </Link>
                      </h4>
                    </div>
                  </div>
                  <div className="event-item">
                    <div className="thumb">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        className="thumb-img"
                        src="/img/events/3.jpg"
                        alt="Image-Givest"
                      />
                      <Link
                        href="event-details.html"
                        className="btn-theme btn-gradient btn-size-sm"
                      >
                        Join Now{" "}
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="icon icon-img"
                          src="/img/icons/arrow-line-right.png"
                          alt="Icon"
                        />
                      </Link>
                    </div>
                    <div className="content">
                      <div className="event-info">
                        15 January 2021 // <span>Education</span>
                      </div>
                      <h4 className="event-name">
                        <Link href="event-details.html">
                          Need School For Mozambique Children.
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8 offset-2 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-4 offset-lg-0">
                <div
                  className="layer-style"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="thumb tilt-animation">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/photos/event1.png"
                      alt="Image-Givest"
                    />
                    <div className="play-video-btn">
                      <Link
                        className="btn-play play-video-popup wave-btn"
                        href="https://player.vimeo.com/video/174392490?dnt=1&amp;app_id=122963"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="icon">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/icons/play.png"
                            alt="Icon"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="shape-style1">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/shape/line1.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style2">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/shape/line2.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style3">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/shape/line3.png"
                      alt="Image-Givest"
                    />
                  </div>
                  <div className="shape-style4">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/img/shape/line4.png"
                      alt="Image-Givest"
                    />
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
                  data-aos="fade-right"
                  data-aos-duration="1000"
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

        <section className="blog-area blog-default-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-6 m-auto">
                <div
                  className="section-title text-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <h5 className="subtitle line-theme-color">Blog Post</h5>
                  <h2 className="title title-style">
                    Latest News From Givest Blog{" "}
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
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
              <div className="col-md-6 col-lg-4">
                <div className="post-item mb-md-150">
                  <div className="thumb">
                    <Link href="blog-details.html">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/blog/1.jpg"
                        alt="Givest-Blog"
                      />
                    </Link>
                    <div className="meta-date">
                      <Link href="/blog">
                        <span>15</span> January
                      </Link>
                    </div>
                    <div className="shape-line"></div>
                  </div>
                  <div className="content">
                    <div className="inner-content">
                      <div className="meta">
                        <Link className="post-category" href="/blog">
                          Education
                        </Link>
                        <div className="post-share">
                          <Link className="icon-share" href="/blog">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/icons/share-line-gradient.png"
                              alt="Icon"
                            />
                          </Link>
                          <ul>
                            <li>
                              <Link className="color-facebook" href="#/">
                                <i className="social_facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-twitter" href="#/">
                                <i className="social_twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-dribbble" href="#/">
                                <i className="social_dribbble"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-pinterest" href="#/">
                                <i className="social_pinterest"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 className="title">
                        <Link href="blog-details.html">
                          Save Children Life For Future.
                        </Link>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text industry since
                        unknown..
                      </p>
                    </div>
                    <div className="post-footer">
                      <Link
                        href="blog-details.html"
                        className="btn-theme btn-border-gradient btn-size-xs"
                      >
                        <span>
                          Details{" "}
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
                      </Link>
                      <Link className="post-author" href="/blog">
                        By: Robbins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="post-item mb-md-150">
                  <div className="thumb">
                    <Link href="blog-details.html">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/blog/2.jpg"
                        alt="Givest-Blog"
                      />
                    </Link>
                    <div className="meta-date">
                      <Link href="/blog">
                        <span>25</span> January
                      </Link>
                    </div>
                    <div className="shape-line"></div>
                  </div>
                  <div className="content">
                    <div className="inner-content">
                      <div className="meta">
                        <Link className="post-category" href="/blog">
                          Water
                        </Link>
                        <div className="post-share">
                          <Link className="icon-share" href="/blog">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/icons/share-line-gradient.png"
                              alt="Icon"
                            />
                          </Link>
                          <ul>
                            <li>
                              <Link className="color-facebook" href="#/">
                                <i className="social_facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-twitter" href="#/">
                                <i className="social_twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-dribbble" href="#/">
                                <i className="social_dribbble"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-pinterest" href="#/">
                                <i className="social_pinterest"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 className="title">
                        <Link href="blog-details.html">
                          Save Children Life For Future.
                        </Link>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text industry since
                        unknown..
                      </p>
                    </div>
                    <div className="post-footer">
                      <Link
                        href="blog-details.html"
                        className="btn-theme btn-border-gradient btn-size-xs"
                      >
                        <span>
                          Details{" "}
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
                      </Link>
                      <Link className="post-author" href="/blog">
                        By: Robbins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="post-item">
                  <div className="thumb">
                    <Link href="blog-details.html">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/blog/3.jpg"
                        alt="Givest-Blog"
                      />
                    </Link>
                    <div className="meta-date">
                      <Link href="/blog">
                        <span>30</span> January
                      </Link>
                    </div>
                    <div className="shape-line"></div>
                  </div>
                  <div className="content">
                    <div className="inner-content">
                      <div className="meta">
                        <Link className="post-category" href="/blog">
                          Health
                        </Link>
                        <div className="post-share">
                          <Link className="icon-share" href="/blog">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/icons/share-line-gradient.png"
                              alt="Icon"
                            />
                          </Link>
                          <ul>
                            <li>
                              <Link className="color-facebook" href="#/">
                                <i className="social_facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-twitter" href="#/">
                                <i className="social_twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-dribbble" href="#/">
                                <i className="social_dribbble"></i>
                              </Link>
                            </li>
                            <li>
                              <Link className="color-pinterest" href="#/">
                                <i className="social_pinterest"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <h4 className="title">
                        <Link href="blog-details.html">
                          Save Children Life For Future.
                        </Link>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text industry since
                        unknown..
                      </p>
                    </div>
                    <div className="post-footer">
                      <Link
                        href="blog-details.html"
                        className="btn-theme btn-border-gradient btn-size-xs"
                      >
                        <span>
                          Details{" "}
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
                      </Link>
                      <Link className="post-author" href="/blog">
                        By: Robbins
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-logo-area brand-logo-default-area">
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration="1000">
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
      </div>

      <div className="footer-area">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="widget-item">
                  <div className="about-widget">
                    <Link className="footer-logo" href="/">
                      <Image
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        src="/img/logo.png"
                        alt="Logo"
                      />
                    </Link>
                    <p>
                      Lorem Ipsum is simply dummy text of the industry orem
                      Ipsum has been the industry&apos;s since the when unknown.
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                          <Link className="icon" href="#/">
                            <i className="icofont-instagram"></i>
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
                            <Link href="about.html">About Us</Link>
                          </li>
                          <li>
                            <Link href="/blog">Blog Post Terms</Link>
                          </li>
                          <li>
                            <Link href="#/">Conditions</Link>
                          </li>
                          <li>
                            <Link href="#/">Privacy Policy</Link>
                          </li>
                          <li>
                            <Link href="#/">Documentation</Link>
                          </li>
                          <li>
                            <Link href="#/">Donners</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-6 col-sm-6 col-md-6 pl-sm-5">
                        <ul className="nav-menu nav align-right">
                          <li>
                            <Link href="volunteer.html">Become Volunteer</Link>
                          </li>
                          <li>
                            <Link href="#/">Quick Fundraise</Link>
                          </li>
                          <li>
                            <Link href="#/">Give Donation</Link>
                          </li>
                          <li>
                            <Link href="volunteer.html">Become Volunteer</Link>
                          </li>
                          <li>
                            <Link href="causes-details.html">
                              Food And Water
                            </Link>
                          </li>
                          <li>
                            <Link href="causes-details.html">
                              Medical facilities
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
                      <Link target="_blank" href="https://www.hasthemes.com">
                        HasThemes
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
      </div>

      <aside className="off-canvas-wrapper">
        <div className="off-canvas-inner">
          <div className="off-canvas-overlay"></div>

          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="logo-area">
                <Link href="/">
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    src="/img/logo.png"
                    alt="Logo"
                  />
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
