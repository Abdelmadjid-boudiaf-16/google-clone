import Link from "next/link";
import { Button } from "../ui/button";
import Country from "./country";

const firstLinksList = [
  {
    name: "About",
    path: "https://about.google",
  },
  {
    name: "Advertising",
    path: "",
  },
  {
    name: "Business",
    path: "https://www.google.com/services",
  },
  {
    name: "How Search Works",
    path: "https://google.com/search/howsearchworks",
  },
];
const secondLinksList = [
  {
    name: "Privacy",
    path: "https://policies.google.com",
  },
  {
    name: "Terms",
    path: "https://policies.google.com",
  },
];
const Footer = () => {
  return (
    <footer className="w-full bg-muted">
      <div className="container mx-auto px-2 py-4">
        <Country />
        <div className="my-2 w-full border border-muted-foreground/20" />
        <div className="flex flex-col items-center justify-between gap-y-2 lg:flex-row">
          <ul className="flex items-center">
            {firstLinksList.map((link, index) => (
              <li key={index}>
                <Button asChild variant={"link"}>
                  <Link href={link.path}>{link.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <ul className="flex items-center">
            {secondLinksList.map((link, index) => (
              <li key={index}>
                <Button asChild variant={"link"}>
                  <Link href={link.path}>{link.name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
