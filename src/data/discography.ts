type Album = {
    title: string;
    year: number;
    genre: string;
    description: string;
    artwork: string;
    role?: string;
    links?: {
      spotify?: string;
      bandcamp?: string;
      appleMusic?: string;
      [key: string]: string | undefined;
    };
  };
  
  type DiscographySection = {
    heading: string;
    category: 'solo projects' | 'collaborative works' | 'featured performer';
    albums: Album[];
  };

export const discography: DiscographySection[] = [
    {
      heading: 'Solo Projects',
      category: 'solo projects',
      albums: [
        {
          title: 'SiZE',
          year: 2019,
          genre: 'You tell me!',
          description: 'Written as a sound track to playing sega as a child',
          artwork: '/images/albums/size.jpg',
          role:'Composer & Performer',
          links: {
            spotify: 'https://open.spotify.com/album/0gwWpEQI80frLvuLoTv1Tu?si=sxq2vxahTceLG3wPYBCxOA',
            bandcamp: 'https://joshuablackmore.bandcamp.com/album/size',
          },
        },
      ],
    },
    {
      heading: 'Collaborative Works',
      category: 'collaborative works',
      albums: [
        {
          title: 'Tiny Beast',
          year: 2014,
          genre: 'Alternative Jazz',
          description: 'A project I really want to bring back to life with Josh Arcoleo and Chris Hyson',
          artwork:'/images/albums/tiny_beast.jpg',
          role: 'Co-Writer, Sound Design, Drummer',
          links: {
              spotify: 'https://open.spotify.com/album/3JmGxUf5hiOVNIyOtDsB5a?si=qjeqdxhTRTu7jMZzs7ySDQ',
              bandcamp: 'https://joshuablackmore.bandcamp.com/track/teeth-for-teeth'
          },
        },
        {
          title: 'Troyka',
          year: 2015,
          genre: 'Alternative Jazz',
          description: 'A collaborative project which ran from 2007 - 2017. We toured exstensively accross the UK & Europe',
          artwork:'/images/albums/troyka_phobia.jpg',
          role: 'Co-Writer, Drummer',
          links: {
              spotify: 'https://open.spotify.com/album/71i59tB4Mw5xifmg0RRIoq?si=enaFnfG_Ry28TPyZQEcaUA',
          },
        },
      ],
    },
    {
      heading: 'Featured Performer',
      category: 'featured performer',
      albums: [
        {
          title: 'Angus Bayley - Everythings dangerous',
          year: 2024,
          genre: 'Alterative Jazz',
          description: 'Write description here!',
          artwork:'/images/albums/angus.jpg',
          role: 'Drums',
              links: {
              spotify:'https://open.spotify.com/album/5cix0x1sopBKRaSnEuZxPH?si=cklh6ULsTmOPXvtykQgi-A'
          },
        },
      ],
    },
  ];