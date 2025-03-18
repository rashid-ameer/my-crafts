export const fileStructure = [
  {
    id: "app",
    name: "app",
    type: "folder",
    isOpen: true,
    items: [
      {
        id: "layout",
        name: "layout.js",
        type: "file",
      },
      {
        id: "marketing",
        name: "(marketing)",
        type: "folder",
        isOpen: false,
        items: [
          {
            id: "about",
            name: "about",
            type: "folder",
            isOpen: false,
            path: "/about",
            items: [
              {
                id: "about-page",
                name: "page.js",
                type: "file",
              },
            ],
          },
          {
            id: "blog",
            name: "blog",
            type: "folder",
            isOpen: false,
            path: "/blog",
            items: [
              {
                id: "blog-page",
                name: "page.js",
                type: "file",
              },
            ],
          },
        ],
      },
      {
        id: "shop",
        name: "(shop)",
        type: "folder",
        isOpen: false,
        items: [
          {
            id: "account",
            name: "account",
            type: "folder",
            isOpen: false,
            path: "/account",
            items: [
              {
                id: "account-page",
                name: "page.js",
                type: "file",
              },
            ],
          },
        ],
      },
    ],
  },
];
