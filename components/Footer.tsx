import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="section bg-cream">
      <div className="container">
        <h2 className="display-font h-huge text-black mb-16">MENU</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div>
            <p className="label text-muted mb-6">EXPLORE</p>
            <ul className="space-y-3">
              <li>
                <Link href="/story" className="body-md link-underline">
                  Len&apos;s story
                </Link>
              </li>
              <li>
                <Link href="/story#boxing" className="body-md link-underline">
                  Boxing career
                </Link>
              </li>
              <li>
                <Link href="/story#activism" className="body-md link-underline">
                  Activism
                </Link>
              </li>
              <li>
                <Link href="/events" className="body-md link-underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="body-md link-underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/statue#campaign" className="body-md link-underline">
                  The campaign
                </Link>
              </li>
              <li>
                <Link href="/statue" className="body-md link-underline">
                  The statue
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-muted mb-6">CONNECT</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://facebook.com/LenJohnsonCampaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-md link-underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lenjohnsonmcr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-md link-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/breakingbarzmcr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-md link-underline"
                >
                  Breaking Barz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-muted mb-6">SUPPORT</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="body-md link-underline font-bold text-green"
                >
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="body-md link-underline">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="body-md link-underline">
                  Partner with us
                </a>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <p className="label text-muted mb-6">CONTACT</p>
            <p className="body-md mb-2">Manchester, England</p>
            <p className="body-md mb-2">Community Interest Company</p>
            <p className="body-md mb-4">Est. 2023</p>
            <a
              href="mailto:info@lenjohnsoncampaign.co.uk"
              className="body-md link-underline font-bold break-anywhere"
            >
              info@lenjohnsoncampaign.co.uk
            </a>
          </div>
        </div>

        <div className="display-font h-huge text-black text-center pt-20 pb-4 border-t border-gray-300">
          HERE.WE.<span className="text-green">GO.</span>
        </div>

        <p className="body-sm text-muted text-center mt-8">
          &copy; {new Date().getFullYear()} Len Johnson Campaign. Community Interest Company.
          Manchester deserves justice.
        </p>
      </div>
    </footer>
  );
}
