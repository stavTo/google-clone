import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import { googleImg } from "data/google-image";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />
      {/* BODY */}
      <div className="flex flex-col items-center mt-24">
        <Image alt="Google image" width={300} height={100} src={googleImg} />
        <HomeSearch />
      </div>
    </>
  );
}
