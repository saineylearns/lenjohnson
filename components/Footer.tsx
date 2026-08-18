import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-300">
      <div className="container px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Copyright on left */}
          <p className="body-sm text-muted">
            &copy; {new Date().getFullYear()} Len Johnson Campaign. Manchester deserves justice.
          </p>

          {/* Links on right */}
          <div className="flex gap-6 flex-wrap">
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
            <a
              href="https://www.gofundme.com/f/manchester-needs-a-len-johnson-statue"
              target="_blank"
              rel="noopener noreferrer"
              className="body-md link-underline font-bold text-green"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
