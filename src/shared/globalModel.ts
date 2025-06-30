export const getGlobalModel = () => {
    return {
      year: new Date().getFullYear(),
      siteName: 'Joshua Blackmore',
      navLinks: [
        { href: '/', label: 'Home' },
        { href: '/music', label: 'Music' },
        { href: '/engineering', label: 'Engineering' },
        { href: '/contact', label: 'Contact' },
      ],
    };
  };