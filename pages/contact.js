import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import Link from "next/link";
export default function Contact() {
  return (
    <div className="wrapper contact-page-wrapper">
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
                          <img
                            className="icon-img"
                            src="/img/icons/c1.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Phone</h4>
                          <img
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
                          <img
                            className="icon-img"
                            src="/img/icons/c2.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Email</h4>
                          <img
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
                          <img
                            className="icon-img"
                            src="/img/icons/c3.png"
                            alt="Icon"
                          />
                        </div>
                        <div className="content">
                          <h4>Address</h4>
                          <img
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

      <Footer />
    </div>
  );
}
