import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = () => {
  const router = useRouter();

  return (
    <div>
      <div className="header-area header-default sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-sm-3 col-md-3 col-lg-2 pr-0">
              <div className="header-logo-area">
                <Link href="/">
                  <img className="logo-main" src="/img/logo.png" alt="Logo" />
                  <img className="logo-light" src="/img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-7 col-sm-9 col-md-9 col-lg-10">
              <div className="header-align">
                <div className="header-navigation-area">
                  <ul className="main-menu nav justify-content-center">
                    <li
                      className={
                        router.pathname === "/" ? "active" : null
                        // This is the line that uses the `useRouter` hook
                      }
                    >
                      <Link href="/">Home</Link>
                    </li>
                    <li
                      className={router.pathname === "/about" ? "active" : null}
                    >
                      <Link href="/about">About Us</Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/causes" ? "active" : null
                      }
                    >
                      <Link href="/causes">Causes</Link>
                    </li>
                    <li
                      className={router.pathname === "/blog" ? "active" : null}
                    >
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li
                      className={
                        router.pathname === "/contact" ? "active" : null
                      }
                    >
                      <Link href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="header-action-area">
                  <button className="btn-menu d-xl-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <Link
                    href="/contact"
                    className="btn-theme btn-gradient btn-slide btn-style"
                  >
                    Give Support{" "}
                    <img
                      className="icon icon-img"
                      src="/img/icons/arrow-line-right2.png"
                      alt="Icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
