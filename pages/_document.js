import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />
          <Script src="/lib/js/custom.js" strategy="beforeInteractive" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
