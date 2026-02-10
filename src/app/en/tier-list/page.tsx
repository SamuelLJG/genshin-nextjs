import Image from "next/image";
import { characters } from "@/data/characters";
import React from "react";
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import AdTargetingRaw from "@/components/AdTargetingRaw";
import Anchor from "@/components/anchor";
import Nav from '@/components/nav-en';
import Filter from "@/components/tier-filter";
import Footer from '@/components/footer-en';
import ptBr from "@/data/en-us.json"

export const metadata: Metadata = {
  title: "Genshin Impact Tier List 6.3 | Ranking Best Characters",
  description: "Explore the latest Genshin Impact tier list and find out which characters dominate the 2025 meta!",
  alternates: {
    canonical: '/en/tier-list',
    languages: {
      'en': `/en/tier-list`,
      'pt-br': `/tier-list`,
      'x-default': `/tier-list`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/en/tier-list',
    type: 'website'
  }
};

export default function Teams() {
  function formatarNome(nome: string) {
    return nome
      .split("-")
      .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join("_");
  }
  function formatarNomeComEspaco(nome: string) {
    return nome
      .split('_')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  }
  const ranks = ["S", "A", "B", "C", "D"];

  return (
    <html lang="en">
              <body>
                <Anchor/>
        <Nav/>
    <h1 id="hdn">Tier List of the Best Characters in Genshin Impact 6.3</h1>
    <main id="main-index" className="iii"><Filter ptBr={ptBr}/>
    <AdComponent/>
     <ul id="tier-list-flex" className='joinads'>
  {ranks.map((rank) => {
    const chars = characters.filter(
      (p) => p.rank?.toUpperCase() === rank
    );

    // se não tiver personagens, não renderiza nada
    if (chars.length === 0) return null;

    return (
      <li className="tiers-flex" key={rank}>
        <span className={`tiers ${rank.toLowerCase()}`}>
          <img src={`https://genshinbuild.com/images/tier-${rank.toLowerCase()}.svg`} alt="" />
        </span>
        <ul className="tier-list-characters-flex">
          {chars.map((p) => (
            <li
              key={p.name}
              className={`char-tier-${rank.toLowerCase()} ddsadada ${p.name
               
                }`}
            >
              <a href={p.name} className="char-tier-flexbox">
                <Image
                  width={100}
                  height={100}
                  src={`https://genshinbuild.com/images/Team-Icons/${formatarNome(p.name)}.png`}
                  alt={formatarNomeComEspaco(formatarNome(p.name))}
                  className={`border-${p.elementType}`}
                />
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  })}
</ul>
    </main>
        <Footer/>
      </body>
    </html>
  );
}