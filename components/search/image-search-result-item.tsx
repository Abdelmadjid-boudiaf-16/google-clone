/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "../ui/card";

const ImageSearchResultItem = ({ item }: any) => {
  console.log(item);
  return (
    <Card className="flex h-60 w-full flex-col gap-y-3 overflow-hidden p-2 sm:max-w-[280px]">
      <div className="h-4/5 w-full overflow-hidden rounded-lg">
        <img
          src={item.link}
          alt={item.title}
          className="h-full w-full object-fill"
        />
      </div>
      <Link
        href={item.image.contextLink}
        className="group flex flex-col text-sm"
      >
        <span className="group-hover:underline">{item.displayLink}</span>

        <CardHeader className="p-0">
          <CardTitle className="text-md font-normal">
            {item.title.slice(0, 20) + "..."}
          </CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default ImageSearchResultItem;
