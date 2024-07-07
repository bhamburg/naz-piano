import Image from "next/image";
import { Noto_Serif_Georgian, Open_Sans } from "next/font/google";
import Piano from "./components/piano/piano"

const sans = Open_Sans({ subsets: ["latin"] });
const serif = Noto_Serif_Georgian({ subsets: ["latin"] });

export default function BuyAKey() {
  return (
    <main className={sans.className + " text-center"}>
      <header className="flex flex-col bg-naz-blue justify-center p-4">
        <Image
          className="pb-4 self-center"
          src="/Seal_White.svg"
          width={70}
          height={70}
          alt="Nazareth Academy High School seal"
        />
        <p className={serif.className + " text-naz-gold"}>
          Nazareth Academy High School Performing Arts
        </p>
        <h1 className="text-white font-bold"><em>Buy A Key</em> Fundraiser</h1>
      </header>
      <div className="p-4">
        <h2 className="font-bold">Selected Key</h2>
        <p className="font-bold text-6xl">E1</p>
      </div>
      <Piano />
    </main>
  );
}
