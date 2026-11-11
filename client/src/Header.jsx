import React from "react";


/* ---------- Icons (24px grid, currentColor, round caps) ---------- */
const Icon = ({ children }) => (
  <svg
    className="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const HomeIcon = () => (
  <Icon>
    <path d="M4 11.5 12 4l8 7.5" />
    <path d="M6 10v9a1 1 0 0 0 1 1h3.5v-5h3v5H17a1 1 0 0 0 1-1v-9" />
  </Icon>
);

const CategoriesIcon = () => (
  <Icon>
    <rect x="4" y="4" width="6.5" height="6.5" rx="1.8" />
    <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.8" />
    <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.8" />
    <path d="M16.75 13.5v6.5M13.5 16.75H20" />
  </Icon>
);

const SearchIcon = () => (
  <Icon>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" />
  </Icon>
);

const ContactIcon = () => (
  <Icon>
    <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-4.5 3.5V17H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    <path d="M8 10h8M8 13h5" />
  </Icon>
);

const CartIcon = () => (
  <Icon>
    <path d="M3 4h2.2l2 11h10.2l1.8-7.5H6.2" />
    <circle cx="9" cy="19.5" r="1.4" />
    <circle cx="17" cy="19.5" r="1.4" />
  </Icon>
);

const UserIcon = () => (
  <Icon>
    <circle cx="12" cy="8.5" r="3.8" />
    <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
  </Icon>
);

/* ---------- Logo: the Y is a little cheering figure ---------- */
const AnimatedY = () => (
  <svg className="logo-y" viewBox="0 0 24 32" aria-hidden="true">
    <defs>
      <linearGradient id="velynY" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#6d4aff" />
        <stop offset="1" stopColor="#ff5c7a" />
      </linearGradient>
    </defs>

    {/* arms: drawn in on load, then wave */}
    <path className="y-arm y-arm-l" pathLength="1" d="M4 10 L12 19" />
    <path className="y-arm y-arm-r" pathLength="1" d="M20 10 L12 19" />
    {/* body */}
    <path className="y-stem" pathLength="1" d="M12 19 V30" />
    {/* head */}
    <circle className="y-head" cx="12" cy="4.5" r="2.6" />
  </svg>
);

const Logo = () => (
  <a href="#" className="logo" aria-label="VELYN home">
    <span className="logo-letter">V</span>
    <span className="logo-letter">E</span>
    <span className="logo-letter">L</span>
    <AnimatedY />
    <span className="logo-letter">N</span>
  </a>
);

/* ---------- Header ---------- */
function Header({ onSearchClick, onContactClick, onCartClick, onLoginClick }) {
  return (
    <header className="header">
      <Logo />

      <nav className="nav" aria-label="Main">
        <ul className="nav-list">
          <li>
            <a href="#" className="nav-btn" aria-label="Home" title="Home">
              <HomeIcon />
            </a>
          </li>
          <li>
            <a href="#" className="nav-btn" aria-label="Categories" title="Categories">
              <CategoriesIcon />
            </a>
          </li>
          <li>
            <button type="button" className="nav-btn" aria-label="Search" title="Search" onClick={onSearchClick}>
              <SearchIcon />
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn" aria-label="Contact us" title="Contact us" onClick={onContactClick}>
              <ContactIcon />
            </button>
          </li>
          <li>
            <button type="button" className="nav-btn" aria-label="Cart" title="Cart" onClick={onCartClick}>
              <CartIcon />
            </button>
          </li>
         
        </ul>
      </nav>
         <div className="header-actions">
        <button type="button" className="nav-btn login-btn" aria-label="Log in" title="Log in" onClick={onLoginClick}>
          <UserIcon />
          <span className="login-text">Log in</span>
        </button>
      </div>
    </header>
  );
}

export default Header;