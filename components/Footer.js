import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div>
      <div className="footer-area">
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                <div className="widget-item">
                  <div className="about-widget">
                    <Link className="footer-logo" href="/">
                      <img src="/img/logo.png" alt="Logo" />
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
                          <img
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
                          <img
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
                          <img
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
                          <img
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
                          <img
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
                          <img
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
                            <Link href="/about">About Us</Link>
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
                            <Link href="/volunteer">Become Volunteer</Link>
                          </li>
                          <li>
                            <Link href="#/">Quick Fundraise</Link>
                          </li>
                          <li>
                            <Link href="#/">Give Donation</Link>
                          </li>
                          <li>
                            <Link href="/volunteer">Become Volunteer</Link>
                          </li>
                          <li>
                            <Link href="/causes-details">Food And Water</Link>
                          </li>
                          <li>
                            <Link href="/causesDetails">
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
            <img src="/img/icons/arrow-up-line.png" alt="Icon-Image" />
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
          <img src="/img/shape/footer-line.png" alt="Image-Givest" />
        </div>
      </div>

      <aside className="off-canvas-wrapper">
        <div className="off-canvas-inner">
          <div className="off-canvas-overlay"></div>

          <div className="off-canvas-content">
            <div className="off-canvas-header">
              <div className="logo-area">
                <Link href="/">
                  <img src="/img/logo.png" alt="Logo" />
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

export default Footer;
