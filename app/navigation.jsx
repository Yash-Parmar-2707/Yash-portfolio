"use client";

import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a className="brand-lockup" href="#home" aria-label="Yash Parmar, home">
          <span className="brand-mark">YP<span>.</span></span>
          <span className="brand-text">
            <strong>Yash Parmar</strong>
            <small>DEVELOPER</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-nav"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          id="primary-nav"
          className={`primary-nav${isOpen ? " is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-github"
          href="https://github.com/Yash-Parmar-2707"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
