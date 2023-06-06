import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <div className="wrapper">
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
                            <a href="/blog">Blog Grid</a>
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <a
                              className="text-theme-color"
                              href="blog-details.html"
                            >
                              Blog Single
                            </a>
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
                  <h2 className="title text-white">Blog Details</h2>
                  <div className="bread-crumbs">
                    <Link>
                      <a href="/">
                        Home<span className="breadcrumb-sep">//</span>
                      </a>
                    </Link>
                    <span className="active">Blog</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="blog-details-column">
                  <div className="post-details-content">
                    <div className="post-details-body">
                      <div className="thumb">
                        <Image
                          className="w-100"
                          src="/img/blog/g1.jpg"
                          alt="Givest-HasTech"
                        />
                      </div>
                      <div className="content">
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
                                  className="icon-img"
                                  src="/img/icons/admin1.png"
                                  alt="Icon-Image"
                                />
                              </span>
                              By: Marinda Roderick
                            </a>
                          </Link>
                        </div>
                        <h2 className="title">
                          Children Education Needs For Change The World.
                        </h2>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from written in 45 BC. This book is a treatise on the
                          theory.
                        </p>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature.
                        </p>
                        <div className="blockquote-area">
                          <blockquote className="blockquote-style">
                            <p>
                              Contrary to popular belief not simply random has
                              roots in a piece of classical Latin literature
                              making it over 2000 years old Latin professort
                              looked up one of the more.
                            </p>
                            <div className="icon">“</div>
                          </blockquote>
                        </div>
                        <h2 className="title">
                          Children Education Needs For Change The World.
                        </h2>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from written in 45 BC. This book is a treatise on the
                          theory.
                        </p>
                        <p className="mb-31">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature.
                        </p>
                        <div className="row mb-32">
                          <div className="col-sm-4">
                            <Image
                              className="w-100 mb-xs-30"
                              src="/img/blog/s1.jpg"
                              alt="Image-Givest"
                            />
                          </div>
                          <div className="col-sm-4">
                            <Image
                              className="w-100 mb-xs-30"
                              src="/img/blog/s2.jpg"
                              alt="Image-Givest"
                            />
                          </div>
                          <div className="col-sm-4">
                            <Image
                              className="w-100"
                              src="/img/blog/s3.jpg"
                              alt="Image-Givest"
                            />
                          </div>
                        </div>
                        <h2 className="title">
                          Children Education Needs For Change The World.
                        </h2>
                        <p>
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from written in 45 BC. This book is a treatise on the
                          theory.
                        </p>
                        <p className="mb-0">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          literature from 459, making it over 2000 years old.
                          Richard McClintock, a Latin professor at Virginia
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature.
                        </p>
                        <div className="category-social-content">
                          <div className="social-items">
                            <Link>
                              <a href="#/">
                                <i className="icofont-facebook"></i>
                              </a>
                            </Link>
                            <Link>
                              <a href="#/">
                                <i className="icofont-skype"></i>
                              </a>
                            </Link>
                            <Link>
                              <a href="#/">
                                <i className="icofont-twitter"></i>
                              </a>
                            </Link>
                          </div>
                          <div className="category-items">
                            <span>Tags:</span>
                            <Link>
                              <a href="/blog">Donation,</a>
                            </Link>
                            <Link>
                              <a href="/blog">Charity,</a>
                            </Link>
                            <Link>
                              <a href="/blog">Non Profit,</a>
                            </Link>
                            <Link>
                              <a href="/blog">Fund Raising</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="comment-area">
                        <h2 className="title">
                          Comments <span>(04)</span>
                        </h2>
                        <div className="comment-content">
                          <div className="single-comment">
                            <div className="author-info">
                              <div className="thumb">
                                <Image
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  src="/img/blog/c1.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="author-details">
                                <h4 className="name">Hassan Boisvert</h4>
                                <div className="comment-date">
                                  12 January 2020
                                </div>
                                <p>
                                  Contrary to popular belief soorem Ipsum is not
                                  simply random text. It has roots literature
                                  from 459, making it over 2000 years old
                                  professor at Virginia looked up one of the
                                  more obscure Latin words.
                                </p>
                                <Link>
                                  <a
                                    className="btn-theme btn-border-gradient gray-border btn-reply btn-size-md"
                                    href="#/"
                                  >
                                    <span>
                                      Reply{" "}
                                      <Image
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
                          <div className="single-comment pl-xxs-30 pl-70">
                            <div className="author-info">
                              <div className="thumb">
                                <Image
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  src="/img/blog/c2.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="author-details">
                                <h4 className="name">Nancey Buckner</h4>
                                <div className="comment-date">
                                  12 January 2020
                                </div>
                                <p>
                                  Contrary to popular belief soorem Ipsum is not
                                  simply random text. It has roots literature
                                  from 459, making it over 2000 years old
                                  professor at Virginia looked up one of the
                                  more obscure Latin words.
                                </p>
                                <Link>
                                  <a
                                    className="btn-theme btn-border-gradient gray-border btn-reply btn-size-md"
                                    href="#/"
                                  >
                                    <span>
                                      Reply{" "}
                                      <Image
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
                          <div className="single-comment">
                            <div className="author-info">
                              <div className="thumb">
                                <Image
                                  width={0}
                                  height={0}
                                  sizes="100vw"
                                  style={{ width: "100%", height: "auto" }}
                                  src="/img/blog/c3.jpg"
                                  alt="Image"
                                />
                              </div>
                              <div className="author-details">
                                <h4 className="name">Romona Prosser</h4>
                                <div className="comment-date">
                                  12 January 2020
                                </div>
                                <p>
                                  Contrary to popular belief soorem Ipsum is not
                                  simply random text. It has roots literature
                                  from 459, making it over 2000 years old
                                  professor at Virginia looked up one of the
                                  more obscure Latin words.
                                </p>
                                <Link>
                                  <a
                                    className="btn-theme btn-border-gradient gray-border btn-reply btn-size-md"
                                    href="#/"
                                  >
                                    <span>
                                      Reply{" "}
                                      <Image
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
                        <div className="comment-form">
                          <h2 className="title">Reply Comment</h2>
                          <form action="#" method="post">
                            <div className="comment-form-content">
                              <div className="row row-gutter-20">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="Name"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <input
                                      className="form-control"
                                      type="email"
                                      placeholder="Email"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mb-0">
                                    <textarea
                                      className="form-control textarea"
                                      name="comment"
                                      id="comment"
                                      cols="45"
                                      rows="7"
                                      placeholder="Comment"
                                      required=""
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group mb-0">
                                    <button
                                      className="btn-theme btn-gradient btn-slide no-border"
                                      type="submit"
                                    >
                                      Send Comment
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-area">
                    <div className="widget">
                      <h3 className="widget-title">Search Here</h3>
                      <div className="separator-line">
                        <Image
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
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-causes-item">
                        <div className="thumb">
                          <Image
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
