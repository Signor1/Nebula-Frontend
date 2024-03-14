type NavObject = {
  name: string;
  path: string;
};

type NavArray = NavObject[];

export const NavLinks: NavArray = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Profile",
    path: "/profile",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

type creatorObj = {
  title: string;
  createdBy: string;
  amount: string;
};

export const creators: creatorObj[] = [
  {
    title: "POKEMON DRAGON",
    createdBy: "0xblackadam",
    amount: "1.002",
  },
  {
    title: "POKEMON PRINCESS",
    createdBy: "Nonnyjoe",
    amount: "2.502",
  },
  {
    title: "POKEMON FIREFLY",
    createdBy: "Evans",
    amount: "4.200",
  },
];
