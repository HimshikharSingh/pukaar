import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Blog() {
  return (
    <div className="wrapper blog-page-wrapper">
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
                            <img src="/img/blog/g1.jpg" alt="Givest-Blog" />
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
                                  <img
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
                                <img
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
                            <img src="/img/blog/g2.jpg" alt="Givest-Blog" />
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
                              <img src="/img/icons/play.png" alt="Icon" />
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
                                  <img
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
                                <img
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
                            <img src="/img/blog/g3.jpg" alt="Givest-Blog" />
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
                                  <img
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
                                <img
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
                            <img src="/img/blog/g4.jpg" alt="Givest-Blog" />
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
                                  <img
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
                                <img
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
                                <img
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
                        <img
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
                        <img
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
                        <img
                          className="me-1"
                          src="/img/shape/line-t2.png"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="widget-causes-item">
                        <div className="thumb">
                          <img src="/img/causes/w1.jpg" alt="Givest-HasTech" />
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
                                  <img
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
                        <img
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

      <Footer />
    </div>
  );
}
