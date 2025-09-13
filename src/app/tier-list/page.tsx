import Image from "next/image";
import { characters } from "@/data/characters";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import Nav from '@/components/nav';
import Footer from '@/components/footer';


export const metadata: Metadata = {
  title: "Tier List 6.0 | Genshin Impact ",
  description: "Confira a tier list atualizada de Genshin Impact com os melhores personagens. Veja quem está no topo do meta em 2025!",
  alternates: {
    canonical: '/tier-list',
    languages: {
      'en': `/en/tier-list`,
      'pt-br': `/tier-list`,
      'x-default': `/tier-list`
    }
  },
  openGraph: {
    images: `/images/genshinbuild-image.png`,
    url: '/tier-list',
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
    <html lang="pt-br">
      <body>
        <Nav/>
    <main id="main-index" className="iii">
      <div id="h1-flex">
        <Image
          src="/images/sort-lowest-svgrepo-com.svg"
          className="index-h1-icon"
          width={30}
          height={30}
          alt="Tier-List Ranking"
          loading="eager"
        />
        <h1 id="index-h1" style={{ display: "block" }}>
          Genshin Impact <span className="nowrap"> Tier-List 6.0</span>
        </h1>
      </div>
      <AdComponent/>
      <ul id="tier-list-flex" className='joinads'>
        {ranks.map((rank) => {
          const chars = characters.filter(
            (p) => p.rank?.toUpperCase() === rank
          );

          return (
            <li className="tiers-flex" key={rank}>
              <span className="tiers">{rank}</span>
              <ul className="tier-list-characters-flex">
                {chars.map((p) => (
                  <li key={p.name}>
                    <Link href={p.name}>
                      <Image
                        width={100}
                        height={100}
                        src={`/images/Team-Icons/${formatarNome(p.name)}.png`}
                        alt={formatarNomeComEspaco(formatarNome(p.name))}
                        className={`border-${p.elementType}`}
                      />
                    </Link>
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