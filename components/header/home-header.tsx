import Link from "next/link";
import GoogleApps from "../google-apps";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

const HomeHeader = () => {
  return (
    <header className="container mx-auto px-2 py-3">
      <div className="flex items-center justify-end gap-2">
        <Button asChild variant={"link"}>
          <Link href="https://mail.google.com/">Gmail</Link>
        </Button>
        <Button asChild variant={"link"}>
          <Link href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl">
            Images
          </Link>
        </Button>
        <GoogleApps />
        <Button asChild size={"sm"}>
          <Link href="">Sign in</Link>
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;
{
  /* <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>; */
}
