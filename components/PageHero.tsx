import type { ReactNode } from 'react';
import FlagStripe from './FlagStripe';
import ArchiveImage from './ArchiveImage';

type PageHeroProps = {
  image: string;
  imageAlt: string;
  label?: string;
  children: ReactNode;
};

export default function PageHero({
  image,
  imageAlt,
  label,
  children,
}: PageHeroProps) {
  return (
    <>
      <section className="hero page-hero">
        <ArchiveImage src={image} alt={imageAlt} className="hero-bg" sizes="100vw" priority />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {label ? <p className="label text-gold mb-6 slide-up">{label}</p> : null}
          <div className="slide-up delay-1">{children}</div>
        </div>
      </section>
      <FlagStripe />
    </>
  );
}
