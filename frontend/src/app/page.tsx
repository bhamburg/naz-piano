'use client'

import Image from "next/image";
import { Noto_Serif_Georgian, Open_Sans } from "next/font/google";
import Piano from "./components/piano/piano"

import { useEffect, useState } from "react";

const sans = Open_Sans({ subsets: ["latin"] });
const serif = Noto_Serif_Georgian({ subsets: ["latin"] });

export default function BuyAKey() {
  const [dataFromChild, setDataFromChild] = useState('');

  function handleDataFromChild(id: string) {
    setDataFromChild(id);
  }

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
        <p className={serif.className + " text-naz-gold p-2"}>
          Nazareth Academy High School
        </p>
        <h1 className="text-white font-bold"><em>Buy A Key</em> Fundraiser</h1>
      </header>
      <div className="p-4">
        <p className="pb-5">Select a key from the piano keyboard below. Keys marked in gold have already been purchased.</p>
        <h2 className="font-bold">Selected Key</h2>
        <p className="font-bold text-6xl uppercase">&nbsp;{dataFromChild}&nbsp;</p>
      </div>
      <Piano sendDataToParent={ handleDataFromChild } />
      <p className="p-2">Scroll the piano keyboard left and right. Click a key to make a selection.</p>
    </main>
  );
}
