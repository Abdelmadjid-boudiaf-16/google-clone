import GoogleLogo from "@/components/google-logo";
import HomeHeader from "@/components/header/home-header";
import HomeSearch from "@/components/search/search-form";

export default function Home() {
  return (
    <div className="container mx-auto px-2">
      <HomeHeader />
      <div className="mt-24 flex flex-col items-center justify-center">
        <GoogleLogo className="text-5xl" />
        <HomeSearch />
      </div>
    </div>
  );
}
