'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';

const NAV_LINKS = [
  { href: '/story', label: "Len's story" },
  { href: '/champions', label: 'Champions' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/statue', label: 'The statue' },
  { href: '/more-information', label: 'More information' },
];

// Roughly matches the header's real rendered height (measured precisely
// below, once mounted) — used only for the very first paint, so the page
// doesn't visibly jump once the real measurement lands.
const DEFAULT_NAV_HEIGHT = 88;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navHeight, setNavHeight] = useState(DEFAULT_NAV_HEIGHT);
  const headerRef = useRef<HTMLElement>(null);

  // Measure the header's actual height (it varies with the wordmark's
  // clamp()'d font size across breakpoints) and reserve exactly that much
  // space below it with a spacer, since a `position: fixed` header is out
  // of flow and would otherwise sit on top of the first section.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => setNavHeight(header.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Hide on the way down, show on the way up — the pattern most sites use,
  // and one that sidesteps the whole family of iOS Safari bugs that came
  // from pinning something with `position: sticky` right at the very top
  // edge (see the CSS for the fuller account of what those were). A `fixed`
  // header that moves under the app's own control, rather than sitting
  // statically at the boundary Safari's own address-bar animation cares
  // about, doesn't get pulled into that failure mode.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      // iOS rubber-band overscroll can briefly report a negative scrollY;
      // clamp it so that bounce isn't misread as "scrolling up".
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;

      setScrolled(y > 40);

      if (y < navHeight) {
        // Always show the bar once you're back near the top — hiding it
        // there would mean landing on a page with no way to open the menu.
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY = y;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
    // navHeight only changes the "near the top" threshold slightly; not
    // worth re-binding the listener for.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHidden(false);
  }, [pathname]);

  // Keep the bar on screen for as long as the menu is open, whatever the
  // scroll position underneath it — there'd be no way to close the menu
  // otherwise.
  useEffect(() => {
    if (menuOpen) setHidden(false);
  }, [menuOpen]);

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
    <>
    <header
      ref={headerRef}
      className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}
    >
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
            className={`site-nav-toggle ${menuOpen ? 'is-open' : ''}`}
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
    </header>

    {/* `.site-nav` is `position: fixed`, so it's out of the document flow —
        without this, the page's first section would sit directly under the
        very top of the viewport, behind the bar. Kept in sync with the
        header's real, responsive height via ResizeObserver above rather
        than a guessed constant. */}
    <div style={{ height: navHeight }} aria-hidden="true" />

    {/* Rendered as a sibling of the header, not a child of it. `.site-nav`
        carries a `transform` (the hide/show animation) and a transformed
        ancestor becomes the containing block for any `position: fixed`
        descendant — this menu's `inset: 0` would then resolve against the
        header's own small box instead of the viewport, collapsing the
        overlay down to a sliver behind the burger icon. */}
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
    </>
  );
}
