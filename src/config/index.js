module.exports = {
  siteTitle: 'raiworks | Blockchain Intelligence Services',
  siteDescription: 'raiworks focuses on building the right mix ',
  siteKeywords:
    'We leverage our vast machine intelligence platform, intelligence analysts, and global network of executives and startups empower people to articulate compelling answers to difficult questions — about growth, about the competition, and about technology. ',
  siteUrl: 'https://raiworks.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'raiworks',
  location: 'Sandton, SA',
  email: 'hello@raiworks.com',
  github: 'https://github.com/raiworks',
  twitterHandle: '@raiworks',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/raiworks',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/raiworks',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/raiworks',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/raiworks',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Services',
      url: '/#jobs',
    },
    {
      name: 'Portfolio',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
