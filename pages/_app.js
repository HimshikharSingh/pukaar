import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "/public/lib/css/swiper.min.css";
import "/public/lib/css/bootstrap.min.css";
import "/public/lib/css/animate.css";
import "/public/lib/css/aos.css";
import "/public/lib/css/jquery.fancybox.min.css";
import "/public/lib/css/slicknav.css";
import "/public/lib/css/style.css";
import "/public/lib/css/icofont.css";
import "/public/lib/css/elegantIcons.css";
import Head from "next/head"; // Import Head from next/head

function stylePreloader() {
  document.querySelector("body").classList.add("preloader-deactive");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
    stylePreloader();
  }, []);

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
