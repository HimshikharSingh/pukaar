import Image from "next/image";
import Link from "next/link";
export default function Contact() {
  return (
    <div className="wrapper contact-page-wrapper">
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
                    <li className="has-submenu">
                      <Link href="/">Pages</Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link href="event-details.html">Event Details</Link>
                        </li>
                        <li>
                          <Link href="volunteer.html">Volunteer</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="active">
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
                  <h2 className="title text-white">Contact Us</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="contact-colunm">
                  <div className="contact-form">
                    <form
                      className="contact-form-wrapper"
                      id="contact-form"
                      action="http://whizthemes.com/mail-php/raju/arden/mail.php"
                      method="post"
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="section-title">
                            <h5 className="subtitle line-theme-color">
                              Contact Now
                            </h5>
                            <h2 className="title">Get In Touch.</h2>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting typesetting remaining essentially
                              unchanged.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="row row-gutter-20">
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="con_name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="email"
                                  name="con_email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
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
                  <div className="contact-map-area">
                    <div className="contact-info-content">
                      <div className="contact-info-item">
                        <div className="icon">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon-img"
                            src="/img/icons/c1.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Phone</h4>
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="line-icon"
                            src="/img/shape/line-s1.png"
                            alt="Image-Givest"
                          />
                          <Link href="tel://+00569876458">
                            (00) 569 - 876 458
                          </Link>
                          <Link href="tel://+884687549786">
                            (88) 468-7549 786
                          </Link>
                        </div>
                      </div>
                      <div className="contact-info-item">
                        <div className="icon icon-mail">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon-img"
                            src="/img/icons/c2.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Email</h4>
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="line-icon"
                            src="/img/shape/line-s1.png"
                            alt="Image-Givest"
                          />
                          <Link href="mailto://support@gmail.com">
                            support@gmail.com
                          </Link>
                          <Link href="mailto://example@gmail.com">
                            example@gmail.com
                          </Link>
                        </div>
                      </div>
                      <div className="contact-info-item mb-0 pb-0">
                        <div className="icon icon-location">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="icon-img"
                            src="/img/icons/c3.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Address</h4>
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            className="line-icon"
                            src="/img/shape/line-s1.png"
                            alt="Image-Givest"
                          />
                          <p>
                            Norwegian St #APT 807 <br />
                            Pottsville, Pennsya (PA)
                          </p>
                        </div>
                      </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"></iframe>
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
