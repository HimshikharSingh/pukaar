import Image from "next/image";
import Link from "next/link";
export default function Volunteer() {
  return (
    <div className="wrapper volunteer-page-wrapper">
      <div className="preloader-wrap">
        <div className="preloader">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <header className="header-area header-default sticky-header">
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
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="about.html">About Us</Link>
                    </li>
                    <li className="has-submenu">
                      <Link href="/causes">Causes</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="/causes">Causes</Link>
                        </li>
                        <li>
                          <Link href="causes-details.html">Causes Details</Link>
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
                          <Link href="blog-details.html">Blog Single</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu active">
                      <Link href="/">Pages</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="event-details.html">Event Details</Link>
                        </li>
                        <li>
                          <Link
                            className="text-theme-color"
                            href="volunteer.html"
                          >
                            Volunteer
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="contact.html">Contact Us</Link>
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
                  <h2 className="title text-white">Become Volunteer</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Pages</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="volunteer-form-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="volunteer-form">
                  <div className="section-title">
                    <h5 className="subtitle">Join With Us</h5>
                    <h2 className="title">
                      If You Interest! You Can Join With Us{" "}
                      <span>As A Volunteer.</span>
                    </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since 1500 an when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries but electronic typesetting, remaining
                      essentially unchanged.
                    </p>
                  </div>
                  <form
                    className="volunteer-form-wrapper"
                    id="contact-form"
                    action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="row row-gutter-20">
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_name"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="email"
                                name="con_email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_age"
                                placeholder="Age"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_religion"
                                placeholder="Religion"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group">
                              <input
                                className="form-control"
                                type="text"
                                name="con_phone"
                                placeholder="Phone"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <textarea
                                className="form-control textarea"
                                name="con_message"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group mb-0">
                              <button
                                className="btn-theme btn-gradient btn-slide no-border"
                                type="submit"
                              >
                                Submit Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="form-message"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="team-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="section-title text-center">
                  <h5 className="subtitle line-theme-color mb-7">
                    Volunteer Team
                  </h5>
                  <h2 className="title title-style">
                    Talented Volunteer Team of Givest.{" "}
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
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-items">
                  <div className="row">
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/1.jpg"
                            alt="Image"
                          />
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
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/2.jpg"
                            alt="Image"
                          />
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
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/3.jpg"
                            alt="Image"
                          />
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
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/4.jpg"
                            alt="Image"
                          />
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
                              <Link href="#/">Destiny Kendall</Link>
                            </h4>
                            <h6 className="designation">Senior Volunteer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/5.jpg"
                            alt="Image"
                          />
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
                              <Link href="#/">Marleen Larry</Link>
                            </h4>
                            <h6 className="designation">Senior Volunteer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-4">
                      <div className="team-member">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/team/6.jpg"
                            alt="Image"
                          />
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="funfact-area funfact-default-area">
          <div className="container">
            <div className="row row-gutter-0 funfact-items-style1">
              <div className="col-lg-4 funfact-item">
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
              <div className="col-lg-4 funfact-item">
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
              <div className="col-lg-4 funfact-item">
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
      </footer>

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
