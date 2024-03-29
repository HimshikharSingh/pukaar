import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function EventDetails() {
  return (
    <div className="wrapper causes-details-page-wrapper">
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
                  <h2 className="title text-white">Event Details</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="event-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="event-details-column">
                  <div className="event-details-content">
                    <div className="event-details">
                      <div className="thumb">
                        <img
                          className="mb-40 w-100"
                          src="/img/events/d1.jpg"
                          alt="Image-Givest"
                        />
                      </div>
                      <div className="event-time-info">
                        <div className="info-item">
                          <div className="icon">
                            <img src="/img/icons/e1.png" alt="Icon-Image" />
                          </div>
                          <h4>12 Jan 2020</h4>
                        </div>
                        <div className="info-item">
                          <div className="icon">
                            <img src="/img/icons/e2.png" alt="Icon-Image" />
                          </div>
                          <h4>10 AM - 02 PM</h4>
                        </div>
                        <div className="info-item event-location">
                          <div className="icon">
                            <img src="/img/icons/e3.png" alt="Icon-Image" />
                          </div>
                          <h4>Helvetica Street, Jordan</h4>
                        </div>
                      </div>
                      <div className="event-category-post">
                        <div className="event-category">Education</div>
                        <div className="event-author">
                          By: Marinda Roderick, <span>Web Technologist</span>
                        </div>
                      </div>
                      <h3 className="event-title">
                        Save The Children Helps Girls And Boys Living in Poverty
                        in Uganda.
                      </h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                        was popularised in the 1960s with the release of etraset
                        sheets containing Lorem Ipsum passages.
                      </p>
                      <p className="mb-34">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <div className="map-content">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8402891185374!2d144.95373631590425!3d-37.81720974201477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2ssg!4v1607294780661!5m2!1sen!2ssg"></iframe>
                      </div>
                      <h3>Other Information of Event</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                        was popularised in the 1960s with the release of etraset
                        sheets containing Lorem Ipsum passages.
                      </p>
                      <p className="mb-35">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h3>Current Sponsors.</h3>
                      <p className="mb-35">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <div className="brand-logo-area brand-logo-default-area p-0">
                        <div className="brand-logo-content">
                          <div className="row row-cols-3 row-cols-sm-5">
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/1.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/2.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/3.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/4.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/5.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/6.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/7.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/8.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/9.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div className="brand-logo-item">
                                <img
                                  src="/img/brand-logo/10.png"
                                  alt="Image-Givest"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-n8">Why Join This Event?</h3>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged
                        was popularised in the 1960s with the release of etraset
                        sheets containing Lorem Ipsum passages.
                      </p>
                      <p className="mb-44">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <div className="btn-wrp">
                        <Link
                          className="btn-theme btn-gradient btn-slide"
                          href="#"
                        >
                          <span>
                            Join Now{" "}
                            <img
                              className="icon icon-img"
                              src="/img/icons/arrow-line-right2.png"
                              alt="Icon"
                            />
                          </span>
                        </Link>
                        <Link
                          className="btn-theme btn-border"
                          href="tel://+88469963467"
                        >
                          <img
                            className="icon icon-img icon-style"
                            src="/img/icons/call.png"
                            alt="Icon"
                          />{" "}
                          +88 469 963 467
                        </Link>
                      </div>
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
                        <Link href="causes-details.html">
                          Clean Water <span>(18)</span>
                        </Link>
                        <Link href="causes-details.html">
                          Children Education <span>(06)</span>
                        </Link>
                        <Link href="causes-details.html">
                          Healty Food <span>(19)</span>
                        </Link>
                        <Link href="causes-details.html">
                          Food And Water <span>(27)</span>
                        </Link>
                        <Link href="causes-details.html">
                          National Charity <span>(27)</span>
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
                            <Link href="causes-details.html">
                              Need School For Uganda Poor Children.
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
                            <Link
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
                            <Link href="#/">Clean Water</Link>
                          </li>
                          <li>
                            <Link href="#/">Education</Link>
                          </li>
                          <li>
                            <Link className="style2" href="#/">
                              Health
                            </Link>
                          </li>
                          <li>
                            <Link className="style2" href="#/">
                              Medicine
                            </Link>
                          </li>
                          <li>
                            <Link href="#/">Poor</Link>
                          </li>
                          <li>
                            <Link href="#/">Children</Link>
                          </li>
                          <li>
                            <Link className="style2" href="#/">
                              Charity
                            </Link>
                          </li>
                          <li>
                            <Link className="style2" href="#/">
                              Non Profit
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
