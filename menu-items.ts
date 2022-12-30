export const menuItems = [
  {
    title: 'Happy',
    icon: '😊',
    submenu: [
      {
        title: 'One',
        url: '#one',
      },
      {
        title: 'Two',
        url: '#two',
      },
      {
        title: 'Three',
        url: '#three',
      },
    ],
  },
  {
    title: 'Love',
    icon: '💗',
    submenu: [
      {
        title: 'Four',
        url: '#four',
      },
      {
        title: 'Five',
        url: '#five',
      },
      {
        title: 'Six',
        url: '#six',
      },
    ],
  },
  {
    title: 'Family',
    icon: '👨‍👩‍👦',
    defaultOpen: true,
    submenu: [
      {
        title: 'Seven',
        url: '#seven',
      },
      {
        title: 'Eight',
        submenu: [
          {
            title: 'Kat',
            url: '#kat',
          },
          {
            title: 'Blitz',
            url: '#blitz',
          },
          {
            title: 'Milan',
            url: '#milan',
          },
          {
            title: 'More',
          },
        ],
      },
      {
        title: 'Nine',
        submenu: [
          {
            title: 'Kat',
            url: '#kat',
          },
          {
            title: 'Blitz',
            url: '#blitz',
          },
          {
            title: 'Milan',
            url: '#milan',
          },
          {
            title: 'More',
            submenu: [
              {
                title: 'Kat',
                url: '#kat',
              },
              {
                title: 'Blitz',
                url: '#blitz',
              },
              {
                title: 'Milan',
                url: '#milan',
              },
              {
                title: 'More',
              },
            ],
          },
        ],
      },
    ],
  },
];
