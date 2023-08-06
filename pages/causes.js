import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TestimonialSliderComponent from "@/components/TestimonialSliderComponent";
import Link from "next/link";
import CauseItem from "@/components/causeItem";

export default function Home() {
  const causes = [
    {
      id: 1,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/01.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/1",
      donationLink: "/donate/1",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    {
      id: 2,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/02.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/2",
      donationLink: "/donate/2",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    {
      id: 3,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/03.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/3",
      donationLink: "/donate/3",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    {
      id: 4,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/03.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/4",
      donationLink: "/donate/4",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    {
      id: 5,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/03.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/5",
      donationLink: "/donate/5",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    {
      id: 6,
      goal: 5000,
      raised: 2000,
      toGo: 1000,
      imageUrl: "/img/causes/03.jpg",
      causeTitle: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown.",
      causeDetailsLink: "/cause/6",
      donationLink: "/donate/6",
      adminImgUrl: "/img/icons/admin1.png",
      adminName: "Kristin Horton",
    },
    // ...
  ];

  return (
    <div wrapper causes-page-wrapper>
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
                  <h2 className="title text-white">Causes</h2>
                  <div className="bread-crumbs">
                    <Link href="/">
                      Home<span className="breadcrumb-sep">//</span>
                    </Link>
                    <span className="active">Causes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="causes-area causes-default-area"
          style={{ marginBottom: "180px" }}
        >
          <div className="container">
            <div className="row">
              {causes.map((cause, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <CauseItem {...cause} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
