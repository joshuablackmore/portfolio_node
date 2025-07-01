export const getGlobalModel = () => {
    return {
      year: new Date().getFullYear(),
      siteName: 'Joshua Blackmore',
      navLinks: [
        { href: '/', label: 'Home' },
        { href: '/music', label: 'Music' },
        { href: '/engineering', label: 'Engineering' },
        ],
        contactLinks: [
            { href: 'mailto:joshua@example.com', label: 'Email' },
            { href: 'https://github.com/joshuablackmore', label: 'GitHub' },
            { href: 'https://linkedin.com/in/joshuablackmore', label: 'LinkedIn' },
          ]
    };
  };