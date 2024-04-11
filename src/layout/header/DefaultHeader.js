import Link from "next/link";
import Nav from "./Nav";
// import NavSearch from "./NavSearch";

const DefaultHeader = ({ singleMenu, dark }) => {
  return (
    <header className="main-header menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1620 clearfix">
          <div className="header-inner rpy-10 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logos/mv.png"
                          : "assets/images/logos/mv.png"
                      }
                      alt="Logo"
                      title="Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <Nav singleMenu={singleMenu} />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <NavSearch /> */}
            {/* Menu Button */}
            <div className="menu-btns">
              <div className="call-anytime">
                <div className="icon">
                  <img src="/assets/images/logos/whatsapp.png" alt="WhatsApp Logo" style={{ width: '50px', height: 'auto' }} />
                </div>
                <div className="content">
                  <span>WhatsApp Us</span>
                  <a href="https://api.whatsapp.com/send?phone=919970050313">9970050313</a>
                </div>
              </div>
              {/* menu sidebar */}
              <div className="menu-sidebar">
                <button>
                  <img src="assets/images/icons/toggler.svg" alt="Toggler" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
