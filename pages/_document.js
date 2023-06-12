import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="/public/lib/js/sample.min.js"></Script>
        <Script src="/public/lib/js/modernizr.js"></Script>
        <Script src="/public/lib/js/jquery-3.5.1.min.js"></Script>
        <Script src="/public/lib/js/jquery-migrate.js"></Script>
        <Script src="/public/lib/js/popper.min.js"></Script>
        <Script src="/public/lib/js/bootstrap.min.js"></Script>
        <Script src="/public/lib/js/jquery.appear.js"></Script>
        <Script src="/public/lib/js/swiper.min.js"></Script>
        <Script src="/public/lib/js/fancybox.min.js"></Script>
        <Script src="/public/lib/js/aos.min.js"></Script>
        <Script src="/public/lib/js/tilt-animation.js"></Script>
        <Script src="/public/lib/js/parallax.min.js"></Script>
        <Script src="/public/lib/js/jquery.slicknav.js"></Script>
        <Script src="/public/lib/js/counterup.js"></Script>
        <Script src="/public/lib/js/waypoint.js"></Script>
        <Script src="/public/lib/js/wow.min.js"></Script>
        <Script src="/public/lib/js/jquery.easypiechart.min.js"></Script>
        <Script src="/public/lib/js/custom.js"></Script>
      </body>
    </Html>
  );
}
