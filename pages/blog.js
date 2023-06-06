import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="wrapper blog-page-wrapper">
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
                    <li className="has-submenu">
                      <Link>
                        <a href="/causes">Causes</a>
                      </Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link>
                            <a href="/causes">Causes</a>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <a href="causes-details.html">Causes Details</a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu active">
                      <Link>
                        <a href="/blog">Blog</a>
                      </Link>
                      <ul className="submenu-nav">
                        <li>
                          <Link>
                            <a className="text-theme-color" href="/blog">
                              Blog Grid
                            </a>
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
                  <h2 className="title text-white">Blog Post</h2>
                  <div className="bread-crumbs">
                    <Link>
                      <a href="/">
                        Home<span className="breadcrumb-sep">||</span>
                      </a>
                    </Link>
                    <span className="active">Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-grid-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-content-column">
                  <div className="blog-content-area post-items-style2">
                    <div className="post-item">
                      <div className="thumb">
                        <Link>
                          <a href="blog-details.html">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/blog/g1.jpg"
                              alt="Givest-Blog"
                            />
                          </a>
                        </Link>
                        <div className="meta-date">
                          <Link>
                            <a href="/blog">
                              <span>15</span> January
                            </a>
                          </Link>
                        </div>
                        <div className="shape-line"></div>
                      </div>
                      <div className="content">
                        <div className="inner-content">
                          <div className="meta">
                            <Link>
                              <a className="post-category" href="/blog">
                                Education
                              </a>
                            </Link>
                            <Link>
                              <a className="post-author" href="/blog">
                                <span className="icon">
                                  <Image
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    className="icon-img"
                                    src="/img/icons/admin1.png"
                                    alt="Icon-Image"
                                  />
                                </span>
                                By: Marinda Roderick
                              </a>
                            </Link>
                          </div>
                          <h4 className="title">
                            <Link>
                              <a href="blog-details.html">
                                Children Education Needs For Change The World.
                              </a>
                            </Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            industry&apos;s standard dummy text ever since the
                            1500 an when an unknown printer took a galley
                            scrambled it to make a type specimen book.
                          </p>
                          <Link>
                            <a
                              href="blog-details.html"
                              className="btn-theme btn-border-gradient btn-size-md"
                            >
                              <span>
                                Read More{" "}
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

                    <div className="post-item">
                      <div className="thumb">
                        <Link>
                          <a href="blog-details.html">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/blog/g2.jpg"
                              alt="Givest-Blog"
                            />
                          </a>
                        </Link>
                        <div className="meta-date">
                          <Link>
                            <a href="/blog">
                              <span>15</span> January
                            </a>
                          </Link>
                        </div>
                        <div className="shape-line"></div>
                        <Link>
                          <a
                            className="btn-play play-video-popup"
                            href="https://player.vimeo.com/video/174392490?dnt=1&amp;app_id=122963"
                          >
                            <span className="icon">
                              <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: "100%", height: "auto" }}
                                src="/img/icons/play.png"
                                alt="Icon"
                              />
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div className="content">
                        <div className="inner-content">
                          <div className="meta">
                            <Link>
                              <a className="post-category" href="/blog">
                                Education
                              </a>
                            </Link>
                            <Link>
                              <a className="post-author" href="/blog">
                                <span className="icon">
                                  <Image
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    className="icon-img"
                                    src="/img/icons/admin1.png"
                                    alt="Icon-Image"
                                  />
                                </span>
                                By: Marinda Roderick
                              </a>
                            </Link>
                          </div>
                          <h4 className="title">
                            <Link>
                              <a href="blog-details.html">
                                Children Education Needs For Change The World.
                              </a>
                            </Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            industry&apos;s standard dummy text ever since the
                            1500 an when an unknown printer took a galley
                            scrambled it to make a type specimen book.
                          </p>
                          <Link>
                            <a
                              href="blog-details.html"
                              className="btn-theme btn-border-gradient btn-size-md"
                            >
                              <span>
                                Read More{" "}
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

                    <div className="post-item">
                      <div className="thumb">
                        <Link>
                          <a href="blog-details.html">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/blog/g3.jpg"
                              alt="Givest-Blog"
                            />
                          </a>
                        </Link>
                        <div className="meta-date">
                          <Link>
                            <a href="/blog">
                              <span>15</span> January
                            </a>
                          </Link>
                        </div>
                        <div className="shape-line"></div>
                      </div>
                      <div className="content">
                        <div className="inner-content">
                          <div className="meta">
                            <Link>
                              <a className="post-category" href="/blog">
                                Education
                              </a>
                            </Link>
                            <Link>
                              <a className="post-author" href="/blog">
                                <span className="icon">
                                  <Image
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    className="icon-img"
                                    src="/img/icons/admin1.png"
                                    alt="Icon-Image"
                                  />
                                </span>
                                By: Marinda Roderick
                              </a>
                            </Link>
                          </div>
                          <h4 className="title">
                            <Link>
                              <a href="blog-details.html">
                                Children Education Needs For Change The World.
                              </a>
                            </Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            industry&apos;s standard dummy text ever since the
                            1500 an when an unknown printer took a galley
                            scrambled it to make a type specimen book.
                          </p>
                          <Link>
                            <a
                              href="blog-details.html"
                              className="btn-theme btn-border-gradient btn-size-md"
                            >
                              <span>
                                Read More{" "}
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

                    <div className="post-item">
                      <div className="thumb">
                        <Link>
                          <a href="blog-details.html">
                            <Image
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{ width: "100%", height: "auto" }}
                              src="/img/blog/g4.jpg"
                              alt="Givest-Blog"
                            />
                          </a>
                        </Link>
                        <div className="meta-date">
                          <Link>
                            <a href="/blog">
                              <span>15</span> January
                            </a>
                          </Link>
                        </div>
                        <div className="shape-line"></div>
                      </div>
                      <div className="content">
                        <div className="inner-content">
                          <div className="meta">
                            <Link>
                              <a className="post-category" href="/blog">
                                Education
                              </a>
                            </Link>
                            <Link>
                              <a className="post-author" href="/blog">
                                <span className="icon">
                                  <Image
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    className="icon-img"
                                    src="/img/icons/admin1.png"
                                    alt="Icon-Image"
                                  />
                                </span>
                                By: Marinda Roderick
                              </a>
                            </Link>
                          </div>
                          <h4 className="title">
                            <Link>
                              <a href="blog-details.html">
                                Children Education Needs For Change The World.
                              </a>
                            </Link>
                          </h4>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has
                            industry&apos;s standard dummy text ever since the
                            1500 an when an unknown printer took a galley
                            scrambled it to make a type specimen book.
                          </p>
                          <Link>
                            <a
                              href="blog-details.html"
                              className="btn-theme btn-border-gradient btn-size-md"
                            >
                              <span>
                                Read More{" "}
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

                    <div className="pagination-area pt-0 pb-0">
                      <nav>
                        <ul className="page-numbers">
                          <li>
                            <Link>
                              <a className="page-number" href="/blog">
                                1
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="page-number" href="/blog">
                                2
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="page-number" href="/blog">
                                3
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="page-number next" href="/blog">
                                <Image
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  src="/img/icons/arrow-line-right-gradient.png"
                                  alt="Icon-Image"
                                />
                              </a>
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="sidebar-area">
                    <div className="widget">
                      <h3 className="widget-title">Search Here</h3>
                      <div className="separator-line">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-search-box">
                        <form action="#" method="post">
                          <div className="form-input-item">
                            <label for="search2" className="sr-only">
                              Search Here
                            </label>
                            <input
                              type="text"
                              id="search2"
                              placeholder="Search here"
                            />
                            <button type="submit" className="btn-src">
                              <i className="icofont-search-1"></i>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="widget">
                      <h3 className="widget-title">Causes Categories</h3>
                      <div className="separator-line">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-category">
                        <Link>
                          <a href="causes-details.html">
                            Clean Water <span>(18)</span>
                          </a>
                        </Link>
                        <Link>
                          <a href="causes-details.html">
                            Children Education <span>(06)</span>
                          </a>
                        </Link>
                        <Link>
                          <a href="causes-details.html">
                            Healty Food <span>(19)</span>
                          </a>
                        </Link>
                        <Link>
                          <a href="causes-details.html">
                            Food And Water <span>(27)</span>
                          </a>
                        </Link>
                        <Link>
                          <a href="causes-details.html">
                            National Charity <span>(27)</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="widget">
                      <h3 className="widget-title">Urgent Causes</h3>
                      <div className="separator-line">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-causes-item">
                        <div className="thumb">
                          <Image
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: "100%", height: "auto" }}
                            src="/img/causes/w1.jpg"
                            alt="Givest-HasTech"
                          />
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <Link>
                              <a href="causes-details.html">
                                Need School For Uganda Poor Children.
                              </a>
                            </Link>
                          </h4>
                          <ul className="donate-info">
                            <li className="info-item">
                              <span className="info-title">Goal:</span>
                              <span className="amount">$ 5,000</span>
                            </li>
                            <li className="info-item">
                              <span className="info-title">Raised:</span>
                              <span className="amount">$ 2,000</span>
                            </li>
                          </ul>

                          <div className="progress-item">
                            <div className="progress-line">
                              <div
                                className="progress-bar-line"
                                data-percent="75%"
                              >
                                <span className="percent"></span>
                              </div>
                            </div>
                          </div>
                          <form action="#">
                            <div className="amount-info">
                              <div className="donate-amount">$20</div>
                              <div className="donate-amount">$35</div>
                              <div className="donate-amount">$48</div>
                              <div className="donate-amount me-0">$90</div>
                              <div className="donate-amount donate-custom-amount">
                                <input
                                  className="form-control"
                                  type="text"
                                  placeholder="Custome Amount"
                                />
                              </div>
                            </div>
                            <Link>
                              <a
                                className="btn-theme btn-gradient btn-slide"
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
                                    src="/img/icons/arrow-line-right2.png"
                                    alt="Icon"
                                  />
                                </span>
                              </a>
                            </Link>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="widget mb-0 pb-3">
                      <h3 className="widget-title">Popular Tags</h3>
                      <div className="separator-line">
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }}
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-tags">
                        <ul>
                          <li>
                            <Link>
                              <a href="#/">Clean Water</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Education</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="style2" href="#/">
                                Health
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="style2" href="#/">
                                Medicine
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Poor</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a href="#/">Children</a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="style2" href="#/">
                                Charity
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link>
                              <a className="style2" href="#/">
                                Non Profit
                              </a>
                            </Link>
                          </li>
                        </ul>
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
