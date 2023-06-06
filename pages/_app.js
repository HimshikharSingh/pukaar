import "./globals.css";
import "./animate.css";
import "./bootstrap.min.css";
import "./jquery.fancybox.min.css";
import "./swiper.min.css";
import "./aos.css";
import "./slicknav.css";
import "./icofont.css";
import "./style.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
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

    <link href="assets/css/bootstrap.min.css" rel="stylesheet" />

    <link href="assets/css/icofont.css" rel="stylesheet" />

    <link href="assets/css/elegantIcons.css" rel="stylesheet" />

    <link href="assets/css/animate.css" rel="stylesheet" />

    <link href="assets/css/aos.css" rel="stylesheet" />

    <link href="assets/css/jquery.fancybox.min.css" rel="stylesheet" />

    <link href="assets/css/slicknav.css" rel="stylesheet" />

    <link href="assets/css/swiper.min.css" rel="stylesheet" />

    <link href="assets/css/style.css" rel="stylesheet" />
  </Head>;
  return <Component {...pageProps} />;
}
