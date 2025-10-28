import Image from "next/image";
import { characters } from "@/data/characters";
import a from "next/link";
import React from "react";
import { Metadata } from "next";
import AdComponent from "@/components/Adsense";
import Nav from '@/components/nav';
import Footer from '@/components/footer';
import ptBr from "@/data/pt-br.json"
import Filter from "@/components/tier-filter";


export const metadata: Metadata = {
  title: "Genshin Impact Tier List 6.1 | Ranking Melhores Personagens",
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
function formatCharacterName(name: string) {
       
        if (name === 'traveler-hydro' ||
            name === 'traveler-dendro' ||
            name === 'traveler-anemo' ||
            name === 'traveler-geo' ||
            name === 'traveler-electro' ||
            name === 'traveler-pyro') {
            return 'Viajante';
          }
          if (name === 'raiden-shogun') {
            return 'Raiden';
          }
          if (name === 'arataki-itto') {
            return 'Itto';
          }
          if (name === 'kamisato-ayaka') {
            return 'Ayaka';
          }
          if (name === 'kamisato-ayato') {
            return 'Ayato';
          }
          if (name === 'yumemizuki-mizuki') {
            return 'Mizuki';
          }
          if (name === 'kujou-sara') {
            return 'Sara';
          }
          if (name === 'shikanoin-heizou') {
            return 'Heizou';
          }
          if (name === 'sangonomiya-kokomi') {
            return 'Kokomi';
          }
          if (name === 'kaedehara-kazuha') {
            return 'Kazuha';
          }
          if (name === 'kuki-shinobu') {
            return 'Kuki';
          }
        return name;
      }
  return (
    <html lang="pt-br">
      <body>
        <Nav/>
        <h1 id="hdn">Tier List dos Melhores Personagens de Genshin Impact 6.1</h1>
    <main id="main-index" className="iii"><Filter ptBr={ptBr}/>
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
               
                .replace(/traveler/gi, "viajante")}`}
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