import Link from 'next/link';
import { DONATE_URL, EXTERNAL_LINK_PROPS } from '@/lib/links';
import { CIC_NUMBER, CONTACT_EMAIL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          {/* Who we are */}
          <div>
            <p className="display-font site-footer-mark">
              LEN JOHNSON
              <br />
              CAMPAIGN
            </p>
            <p className="body-sm site-footer-note">
              Campaigning for a permanent statue of Len Johnson — boxer,
              socialist organiser and community activist — in Manchester city
              centre.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="label site-footer-heading">Contact</h2>
            <ul className="site-footer-list">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="site-footer-link break-anywhere"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/LenJohnsonCampaign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer-link"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lenjohnsonmcr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="site-footer-link"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="label site-footer-heading">Support the campaign</h2>
            <ul className="site-footer-list">
              <li>
                <a
                  href={DONATE_URL}
                  {...EXTERNAL_LINK_PROPS}
                  className="site-footer-link site-footer-link-donate"
                >
                  Donate via GoFundMe
                </a>
              </li>
              <li>
                <Link href="/statue" className="site-footer-link">
                  The statue
                </Link>
              </li>
              <li>
                <Link href="/story" className="site-footer-link">
                  Len&apos;s story
                </Link>
              </li>
              <li>
                <Link href="/more-information" className="site-footer-link">
                  Sources &amp; contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal strip */}
        <div className="site-footer-legal">
          {/* A UK company has to give its registered name and number wherever it
              trades, and the number is also what lets a donor check the campaign
              on the Companies House register before giving. */}
          <p className="body-sm text-muted">
            &copy; {new Date().getFullYear()}{' '}Len Johnson Campaign Community
            Interest Company. Registered in England &amp; Wales, company no.{' '}
            {CIC_NUMBER}.
          </p>
          <Link href="/privacy" className="site-footer-link body-sm">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
