import Logo from "@/components/logo";
import Search from "@/components/search";
import BigBanner from './../components/bigBanner';
import SmallBanner from "@/components/smallBanner";


export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-center bg-white px-4 lg:px-32">
      <Logo/>
      <Search/>
      <BigBanner/>
      <SmallBanner/>
    </main>
  )
}
