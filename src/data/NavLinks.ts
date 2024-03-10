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
