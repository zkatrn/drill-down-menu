export const menuItems = [
  {
    title: 'MLB',
    icon: '⚾',
    brand: 'mlb',
    submenu: [
      {
        title: 'Drops',
        url: 'mlb/drops',
      },
      {
        title: 'Marketplace',
        url: 'mlb/marketplace',
      },
      {
        title: 'Collection',
        url: 'mlb/collection',
      },
    ],
  },
  {
    title: 'Netflix',
    icon: '🎬',
    brand: 'ntx',
    defaultOpen: true,
    submenu: [
      {
        title: 'Drops',
        url: 'netflix/drops',
      },
      {
        title: 'Marketplace',
        url: 'netflix/marketplace',
      },
      {
        title: 'Collection',
        submenu: [
          {
            title: 'one',
            url: '#one',
          },
          {
            title: 'two',
            url: '#two',
          },
          {
            title: 'three',
            submenu: [
              {
                title: 'one',
                url: '#one',
              },
              {
                title: 'two',
                url: '#two',
              },
              {
                title: 'three',
                url: '#three',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Racing',
    icon: '🚗',
    brand: 'nsc',
    submenu: [
      {
        title: 'Drops',
        url: 'racing/drops',
      },
      {
        title: 'Marketplace',
        url: 'racing/marketplace',
      },
      {
        title: 'Collection',
        url: 'racing/collection',
      },
    ],
  },
];
