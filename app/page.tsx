import GoogleLogo from "@/components/google-logo";
import HomeHeader from "@/components/header/home-header";
import SearchForm from "@/components/search/search-form";


export default function Home() {
  return (
    <div className="container px-2 mx-auto ">
      <HomeHeader />
      <div className="flex flex-col items-center justify-center mt-24">
        <GoogleLogo className="text-5xl" />
        <SearchForm showButtons/>
      </div>
    </div>
  );
}
