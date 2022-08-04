import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import dividerMobile from "../public/pattern-divider-mobile.svg";
import dividerDesktop from "../public/pattern-divider-desktop.svg";
import dice from "../public/icon-dice.svg";

interface AdviceAPI {
  slip: {
    id: number;
    advice: string;
  };
}

const Home: NextPage = () => {
  const [advice, setAdvice] = useState<AdviceAPI>({
    slip: {
      id: 117,
      advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
    },
  });

  const handleClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice", { method: "GET" });
    const json = await res.json();
    setAdvice(json);
  };

  return (
    <div>
      <Head>
        <title>Advice Generator App</title>
        <meta name="description" content="Frontend Mentor solution for Advice Generator App" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <main
        className="
        md:max-w-[540px] md:mx-auto md:mt-[14rem] md:pb-8 md:pt-[52px] md:px-8 mx-6 mt-[7.5rem] pt-10 pb-6 px-6
        relative text-center rounded-2xl
        big-shadow
        font-extrabold text-gray-200 bg-blue-600"
      >
        <h1 className="w-full -mt-[6px] tracking-[0.3em] text-neon uppercase text-[0.8rem]">
          Advice #{advice.slip.id}
        </h1>
        <p className="mt-6 md:text-[28px] text-[22px] leading-snug">&ldquo;{advice.slip.advice}&rdquo;</p>
        <div className="md:py-9 py-6">
          <div className="md:hidden">
            <Image src={dividerMobile} alt="" />
          </div>
          <div className="md:block hidden">
            <Image src={dividerDesktop} alt="" />
          </div>
        </div>

        <button
          className="grid place-items-center w-16 h-16 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full hover:glow bg-neon"
          onClick={handleClick}
        >
          <Image src={dice} alt="Roll new advice" />
        </button>
      </main>
    </div>
  );
};

export default Home;
