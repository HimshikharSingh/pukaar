import React, { useEffect } from "react";
import "/public/lib/scss/style.scss";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "/public/lib/css/swiper.min.css";

function stylePreloader() {
  document.querySelector("body").classList.add("preloader-deactive");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
    stylePreloader();
  }, []);
  <Head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />

    <link
      href="https://fonts.googleapis.com/css?family=Yeseva+One:400"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,700i"
      rel="stylesheet"
    />

    <link href="public/lib/csscss/bootstrap.min.css" rel="stylesheet" />

    <link href="public/lib/csscss/icofont.css" rel="stylesheet" />

    <link href="public/lib/csscss/elegantIcons.css" rel="stylesheet" />

    <link href="public/lib/csscss/animate.css" rel="stylesheet" />

    <link href="public/lib/csscss/aos.css" rel="stylesheet" />

    <link href="public/lib/csscss/jquery.fancybox.min.css" rel="stylesheet" />

    <link href="public/lib/csscss/slicknav.css" rel="stylesheet" />

    <link href="public/lib/csscss/swiper.min.css" rel="stylesheet" />

    <link href="public/lib/csscss/style.css" rel="stylesheet" />
  </Head>;
  return <Component {...pageProps} />;
}
