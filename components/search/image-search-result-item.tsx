/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../ui/card";
type Item = {
  link: string;
  title: string;
  href: string;
  displayLink: string;
};
const ImageSearchResultItem = ({ link, title, href, displayLink }: Item) => {
  return (
    <Card className="flex h-60 w-full flex-col gap-y-3 overflow-hidden p-2 sm:max-w-[280px]">
      <div className="h-4/5 w-full overflow-hidden rounded-lg">
        <img src={link} alt={title} className="h-full w-full object-fill" />
      </div>
      <Link href={href} className="group flex flex-col text-sm">
        <span className="group-hover:underline">{displayLink}</span>

        <CardHeader className="p-0">
          <CardTitle className="text-md font-normal">
            {title.slice(0, 20) + "..."}
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ImageSearchResultItem;
