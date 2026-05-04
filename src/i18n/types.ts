export type Language = "en" | "es";

interface Testimonial {
  name: string;
  age: number;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export interface TranslationSchema {
  header: {
    logoAlt: string;
    giveCare: string;
  };
  hero: {
    tagline: string;
    heading1: string;
    heading2: string;
    headingHighlight: string;
    description: string;
    cta: string;
  };
  about: {
    altVolunteers: string;
    altCharity: string;
    altHelping: string;
    yearsCount: string;
    yearsLabel: string;
    tag: string;
    heading: string;
    headingHighlight: string;
    description: string;
    feature1Title: string;
    feature1Text: string;
    feature2Title: string;
    feature2Text: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    cta: string;
  };
  donationTypes: {
    tag: string;
    heading: string;
    headingHighlight: string;
    description: string;
    card1Title: string;
    card1Text: string;
    card1Alt: string;
    card2Title: string;
    card2Text: string;
    card2Alt: string;
    card2Cta: string;
    card3Title: string;
    card3Text: string;
    card3Alt: string;
  };
  gratitude: {
    floatingHeading: string;
    floatingText: string;
    donateCta: string;
    altImage: string;
    tag: string;
    heading: string;
    description: string;
    yearsOld: string;
    prev: string;
    next: string;
    testimonials: Testimonial[];
  };
  transparency: {
    tag: string;
    heading: string;
    headingHighlight: string;
    description: string;
    faqs: FAQ[];
  };
  footer: {
    logoAlt: string;
    description: string;
    visitWebsite: string;
    contactHeading: string;
    missionHeading: string;
    missionSubhead: string;
    missionText: string;
    copyright: string;
  };
}
