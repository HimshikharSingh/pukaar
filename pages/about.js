import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TeamSliderComponent from "@/components/TeamSliderComponent";
import Link from "next/link";
export default function About() {
  return (
    <div className="wrapper about-page-wrapper">
      <Navbar />

      <div className="main-content site-wrapper-reveal">
        <section
          className="page-title-area"
          data-bg-img="/public/img/photos/bg-page-title.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content text-center">
                  <h2 className="title text-white">About Us</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep"></span>
                    </Link>
                    <span className="active">About</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="section-title">
                  <h5 className="subtitle line-theme-color">About Us.</h5>
                  <h2 className="title">
                    <span>Givest</span> is The Non Profitable Organization.
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="thumb thumb-style">
                  <img src="/img/about/3.jpg" alt="Image-Givest" />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="about-content">
                  <p className="text-style">
                    Lorem Ipsum simply dummy text the printing and typesettin
                    industry. Lorem Ipsum has been the industry&apos;s standard
                    dumm text ever since the unknown.
                  </p>
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when and unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                </div>
                <div className="content-box-wrp">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="content-box-item mb-md-30">
                        <h3 className="title">Mission</h3>
                        <img
                          className="img-line-shape"
                          src="/img/shape/line-s1.png"
                          alt="Image-Givest"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry has been the industry&apos;s
                          standard dummy text ever since 1500 when unknown
                          printer took a galley of type and scram bled it to
                          make a type specimen book.
                        </p>
                        <p className="font-family2 mb-0">
                          Lorem Ipsum simply dummy text the printing &
                          typesetting industry been the industry standard dummy
                          make type specimen book.
                        </p>
                        <img
                          className="bg-line-shape"
                          src="/img/shape/line5.png"
                          alt="Image-Givest"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="content-box-item" data-bg-color="#fea444">
                        <h3 className="title">Vission</h3>
                        <img
                          className="img-line-shape"
                          src="/img/shape/line-s1.png"
                          alt="Image-Givest"
                        />
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry has been the industry&apos;s
                          standard dummy text ever since 1500 when unknown
                          printer took a galley of type and scram bled it to
                          make a type specimen book.
                        </p>
                        <p className="font-family2 mb-0">
                          Lorem Ipsum simply dummy text the printing &
                          typesetting industry been the industry standard dummy
                          make type specimen book.
                        </p>
                        <img
                          className="bg-line-shape"
                          src="/img/shape/line5.png"
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

        <section
          className="team-area team-fluid-area"
          style={{ marginBottom: "180px" }}
        >
          <div className="container ">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-xl-4 offset-xl-0">
                <div className="section-title">
                  <h5 className="subtitle line-theme-color mb-7">
                    Volunteer Team
                  </h5>
                  <h2 className="title title-style">
                    Volunteer Team of Givest.{" "}
                    <img
                      className="img-shape"
                      src="/img/shape/3.png"
                      alt="Image-Givest"
                    />
                  </h2>
                  <div className="desc">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry&apos;s standard dummy text ever since
                      and unknown printer took scrambled it make specimen book.
                    </p>
                    <Link
                      href="volunteer.html"
                      className="btn-theme btn-gradient btn-slide"
                    >
                      Join Now{" "}
                      <img
                        className="icon icon-img"
                        src="/img/icons/arrow-line-right2.png"
                        alt="Icon"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="team-member-items">
                  <TeamSliderComponent />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
