'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

const NAV_LINKS = [
  { href: '/story', label: "Len's story" },
  { href: '/champions', label: 'Champions' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/statue', label: 'The statue' },
  { href: '/more-information', label: 'More information' },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Plain `overflow: hidden` on <body> doesn't reliably block touch/
    // momentum scrolling on iOS Safari, so the page behind the open menu
    // can still scroll. Pin the body in place instead, and restore the
    // scroll position when the menu closes.
    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.dataset.scrollY = String(scrollY);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.classList.add('nav-open');
    } else {
      const scrollY = document.body.dataset.scrollY;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.classList.remove('nav-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
        delete document.body.dataset.scrollY;
      }
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.classList.remove('nav-open');
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav-inner" aria-label="Main">
        <Link href="/" className="site-wordmark display-font text-sm">
          LEN JOHNSON<br />CAMPAIGN
        </Link>

        <ul className="site-nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`site-nav-link label ${isActive(link.href) ? 'is-active' : ''}`}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="site-nav-actions">
          <a
            href={DONATE_URL}
            {...EXTERNAL_LINK_PROPS}
            className="pill pill-gold site-nav-donate"
          >
            <span>Donate</span>
          </a>
          <button
            type="button"
            className="site-nav-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className={`burger ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}
        hidden={!menuOpen}
      >
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="display-font h-small text-white"
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a href={DONATE_URL} {...EXTERNAL_LINK_PROPS} className="pill pill-gold mt-8">
          <span>Donate</span>
        </a>
      </div>
    </header>
  );
}
