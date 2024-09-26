import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SiGooglemaps,
  SiGmail,
  SiGooglegemini,
  SiGooglenews,
  SiGooglechat,
  SiGooglemeet,
  SiGooglecalendar,
  SiGoogletranslate,
  SiGooglephotos,
  SiGoogledocs,
  SiGooglesheets,
  SiGoogleslides,
  SiGoogleclassroom,
  SiYoutube,
  SiGoogle,
  SiGoogledrive,
  SiGoogleplay,
  SiGoogleearth,
} from "react-icons/si";
import { BiSolidGrid } from "react-icons/bi";
import Link from "next/link";

const GoogleApps = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center rounded-full p-3 hover:bg-muted">
        <BiSolidGrid className="h-6 w-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mx-3 flex max-h-[500px] flex-col items-center overflow-y-auto rounded-xl p-2">
        <div className="flex max-w-[320px] flex-wrap justify-center gap-6 rounded-t-xl bg-primary-foreground p-2">
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href="https://www.google.com/maps?authuser=0"
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogle className="h-7 w-7" />
              <span>Search</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href="https://www.google.com/maps?authuser=0"
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglemaps className="h-7 w-7" />
              <span>Maps</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href="https://www.youtube.com/"
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiYoutube className="h-7 w-7" />
              <span>Youtube</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href="https://gemini.google.com/"
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglegemini className="h-7 w-7" />
              <span>Gemini</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglecalendar className="h-7 w-7" />
              <span>Calendar</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglenews className="h-7 w-7" />
              <span>News</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogledrive className="h-7 w-7" />
              <span>Drive</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGmail className="h-7 w-7" />
              <span>Gmail</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogletranslate className="h-7 w-7" />
              <span>Translate</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogleplay className="h-7 w-7" />
              <span>Play</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglephotos className="h-7 w-7" />
              <span>Photos</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglechat className="h-7 w-7" />
              <span>Chat</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglemeet className="h-7 w-7" />
              <span>Meet</span>
            </Link>
          </DropdownMenuItem>
        </div>
        <DropdownMenuSeparator />
        <div className="flex max-w-[320px] flex-wrap justify-center gap-6 rounded-b-xl bg-primary-foreground p-2">
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGooglesheets className="h-7 w-7" />
              <span>Sheets</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogledocs className="h-7 w-7" />
              <span>Docs</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogleclassroom className="h-7 w-7" />
              <span>Classroom</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogleslides className="h-7 w-7" />
              <span>Slides</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="h-20 w-20">
            <Link
              href=""
              className="flex h-full w-full flex-col items-center justify-center gap-y-2 p-2"
            >
              <SiGoogleearth className="h-7 w-7" />
              <span>Earth</span>
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GoogleApps;
