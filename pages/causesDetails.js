import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Link from "next/link";

export default function CausesDetails() {
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
                  <h2 className="title text-white">Causes Details</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Cause</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="causes-details-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="causes-details-column">
                  <div className="causes-details-content">
                    <div className="causes-details">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src="/img/causes/d1.jpg"
                          alt="Image-Givest"
                        />
                      </div>
                      <h3 className="cause-title">
                        Children Education Needs For Change <br />
                        The World.
                      </h3>
                      <div className="donate-info-wrp">
                        <div className="row">
                          <div className="col-md-6">
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
                          </div>
                          <div className="col-md-6">
                            <div className="progress-item">
                              <div className="progress-line">
                                <div
                                  className="progress-bar-line"
                                  data-percent="90%"
                                >
                                  <span className="percent"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                      <p className="mb-26">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h3>Cause Challenge</h3>
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
                      <p className="mb-26">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <h3>Summery And Documents</h3>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="document-item mb-xs-10">
                            <h4>Documents.pdf</h4>
                            <img src="/img/icons/file.png" alt="Icon" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="document-item bgcolor-theme2">
                            <h4>Documents.pdf</h4>
                            <img src="/img/icons/file.png" alt="Icon" />
                          </div>
                        </div>
                      </div>
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
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500 an
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p></p>
                    </div>
                    <div className="donners-info">
                      <h3>Great Donners</h3>
                      <div className="donners-item">
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner1.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner2.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner3.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner4.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner2.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner3.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner5.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner3.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner1.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner2.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner3.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner1.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item">
                          <img
                            src="/img/photos/donner2.png"
                            alt="Image-Givest"
                          />
                        </div>
                        <div className="donner-item donner-number">+286</div>
                      </div>
                    </div>
                    <div className="donation-form bgcolor-theme3">
                      <div className="section-title">
                        <h5 className="subtitle line-theme-color mb-14">
                          Make A Donation
                        </h5>
                        <h2 className="title text-white">Donate Now</h2>
                        <img
                          className="line-shape"
                          src="/img/shape/line-t3.png"
                          alt="Image-Givest"
                        />
                      </div>
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
                        <div className="payment-method-wrp">
                          <h4>Payment Method:</h4>
                          <div className="payment-method">
                            <div className="payment-type">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  value="option1"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio1"
                                >
                                  Offline
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  value="option2"
                                />
                                <label
                                  className="form-check-label"
                                  for="inlineRadio2"
                                >
                                  Credit Card
                                </label>
                              </div>
                            </div>
                            <img
                              src="/img/photos/payment-card.png"
                              alt="Image-Givest"
                            />
                          </div>
                        </div>
                        <div className="personal-info">
                          <h4>Personal Info:</h4>
                          <div className="row row-gutter-20">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="con_name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="email"
                                  name="con_email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="con_phone"
                                  placeholder="Phone"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  type="text"
                                  name="con_address"
                                  placeholder="Address"
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
                          </div>
                        </div>
                        <div className="btn-wrp">
                          <Link
                            href="#/"
                            className="btn-theme btn-gradient btn-slide"
                          >
                            Donate Now{" "}
                            <img
                              className="icon icon-img"
                              src="/img/icons/arrow-line-right2.png"
                              alt="Icon"
                            />
                          </Link>
                          <Link
                            href="#/"
                            className="btn-theme btn-gradient btn-border"
                          >
                            Total Donation: $50
                          </Link>
                        </div>
                      </form>
                      <div className="layer-style">
                        <img
                          className="layer-style1"
                          src="/img/shape/form-shape1.png"
                          alt="Image-Givest"
                        />
                        <img
                          className="layer-style2"
                          src="/img/shape/form-shape2.png"
                          alt="Image-Givest"
                        />
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
