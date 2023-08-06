import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Volunteer() {
  return (
    <div className="wrapper volunteer-page-wrapper">
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
                    <img
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
                          <img src="/img/team/1.jpg" alt="Image" />
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
                          <img src="/img/team/2.jpg" alt="Image" />
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
                          <img src="/img/team/3.jpg" alt="Image" />
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
                          <img src="/img/team/4.jpg" alt="Image" />
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
                          <img src="/img/team/5.jpg" alt="Image" />
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
                          <img src="/img/team/6.jpg" alt="Image" />
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
                    <img
                      className="icon"
                      src="/img/icons/f1.png"
                      alt="Image-Givest"
                    />
                    <img
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
                    <img
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
                    <img
                      className="icon"
                      src="/img/icons/f2.png"
                      alt="Image-Givest"
                    />
                    <img
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
                    <img
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
                    <img
                      className="icon"
                      src="/img/icons/f3.png"
                      alt="Image-Givest"
                    />
                    <img
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
                    <img
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
                    <img
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
                        <img src="/img/brand-logo/1.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/2.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/3.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/4.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/5.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/6.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/7.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/8.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/9.png" alt="Image-Givest" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="brand-logo-item">
                        <img src="/img/brand-logo/10.png" alt="Image-Givest" />
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
