import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="section bg-cream">
      <div className="container">
        <h2 className="display-font h-huge text-black mb-12">MENU</h2>

        {/* Horizontal links */}
        <div className="mb-20">
          <nav className="flex flex-wrap gap-6 md:gap-8 mb-12">
            {/* Main navigation */}
            <Link href="/story" className="body-md link-underline font-bold">
              Len&apos;s story
            </Link>
            <Link href="/champions" className="body-md link-underline font-bold">
              Champions
            </Link>
            <Link href="/events" className="body-md link-underline font-bold">
              Events
            </Link>
            <Link href="/gallery" className="body-md link-underline font-bold">
              Gallery
            </Link>
            <Link href="/statue" className="body-md link-underline font-bold">
              The statue
            </Link>

            {/* Social links */}
            <a
              href="https://facebook.com/LenJohnsonCampaign"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md link-underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/lenjohnsonmcr/"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md link-underline"
            >
              Instagram
            </a>

            {/* Donate CTA */}
            <a
              href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md link-underline font-bold text-green"
            >
              Donate
            </a>
          </nav>

          {/* Contact info */}
          <div className="flex flex-wrap gap-6 md:gap-12 text-sm">
            <div>
              <p className="label text-muted mb-2">LOCATION</p>
              <p className="body-md">Manchester, England</p>
            </div>
            <div>
              <p className="label text-muted mb-2">CONTACT</p>
              <a
                href="mailto:info@lenjohnsoncampaign.co.uk"
                className="body-md link-underline font-bold"
              >
                info@lenjohnsoncampaign.co.uk
              </a>
            </div>
            <div>
              <p className="label text-muted mb-2">ORGANIZATION</p>
              <p className="body-md">Community Interest Company · Est. 2023</p>
            </div>
          </div>
        </div>

        <div className="display-font h-huge text-black text-center pt-12 pb-4 border-t border-gray-300">
          HERE.WE.<span className="text-green">GO.</span>
        </div>

        <p className="body-sm text-muted text-center mt-6">
          &copy; {new Date().getFullYear()} Len Johnson Campaign. Community Interest Company.
          Manchester deserves justice.
        </p>
      </div>
    </footer>
  );
}
